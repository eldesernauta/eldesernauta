// app\api\recaptchaSubmit\route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Define the shape of the data returned by Google's reCAPTCHA API
type GoogleRecaptchaResponse = {
  success: boolean;
  score: number;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

// Define the structure of the API's response to the client
type RecaptchaResponseData =
  | { success: true; score: number }
  | { success: false; error: string };

// Define the structure of the incoming POST data
interface PostData {
  gRecaptchaToken: string;
}

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecaptchaResponseData>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");
    return res
      .status(500)
      .json({ success: false, error: "Server configuration error" });
  }

  const postData: PostData = req.body;

  if (!postData?.gRecaptchaToken) {
    return res.status(400).json({ success: false, error: "Bad request" });
  }

  const { gRecaptchaToken } = postData;
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    const response = await axios.post<GoogleRecaptchaResponse>(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.data.success && response.data.score > 0.5) {
      console.log("ReCaptcha score:", response.data.score);
      return res.status(200).json({
        success: true,
        score: response.data.score,
      });
    } else {
      console.error("ReCaptcha verification failed:", response.data);
      return res
        .status(403)
        .json({ success: false, error: "ReCaptcha verification failed" });
    }
  } catch (error) {
    console.error("Error during ReCaptcha verification:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
}