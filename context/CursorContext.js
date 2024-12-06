// context/CursorContext.js
import { createContext, useContext } from 'react';

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children, cursorText, setCursorText, cursorVariant, setCursorVariant }) => (
    <CursorContext.Provider value={{ cursorText, setCursorText, cursorVariant, setCursorVariant }}>
        {children}
    </CursorContext.Provider>
);
