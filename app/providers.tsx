"use client";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { useEffect, useState, createContext, useContext } from "react";
import theme from "@/lib/theme";

type ColorMode = "light" | "dark" | "system";

interface ColorModeContextProps {
    mode: ColorMode;
    setMode: (mode: ColorMode) => void;
}

const ColorModeContext = createContext<ColorModeContextProps>({
    mode: "system",
    setMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ColorMode>("system");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedMode = localStorage.getItem("colorMode") as ColorMode | null;
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("colorMode", mode);
        }
    }, [mode, mounted]);

    // For SSR, we need to ensure this component doesn't render with mismatched modes
    if (!mounted) {
        return null;
    }

    return (
        <ColorModeContext.Provider value={{ mode, setMode }}>
            <CssVarsProvider
                defaultMode={mode === "system" ? "system" : mode}
                theme={theme}
            >
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </ColorModeContext.Provider>
    );
}
