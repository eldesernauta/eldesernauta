import { motion } from "framer-motion";
import { GoogleAnalytics } from '@next/third-parties/google'

const Layout = ({ children }) => (
    <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
    >
        {children}

        <GoogleAnalytics gaId="G-Z9404XF3PJ" />
    </motion.div>
);
export default Layout;