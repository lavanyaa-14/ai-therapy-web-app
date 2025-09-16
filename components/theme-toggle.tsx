'use client';

import{ Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return(
        <Button
    variant="ghost"
    className="h-12 w-12 p-2 relative"
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    aria-label="Toggle theme"
>
    <Moon className="h-6 w-6 transition-all absolute opacity-0 scale-0 dark:opacity-100 dark:scale-100" />
    <Sun className="h-6 w-6 transition-all opacity-100 scale-100 dark:opacity-0 dark:scale-0" />
</Button>
    );
}
