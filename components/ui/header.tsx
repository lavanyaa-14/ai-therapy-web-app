"use client";

import React, { useState } from "react";
// components/header.tsx
import Link from "next/link";
import { AudioWaveform, X, Menu } from "lucide-react";
import { ThemeToggle} from "../theme-toggle";
import { SignInButton } from "../auth/sign-in-button";
import { Button } from "./button";

export default function Header() {
    const navItems = [
        { href: "/features", label: "Features"},
        { href: "/about", label: "About Aura"},
    ];

    const [isMenuOpen, setIsMenuOpen] = useState
    (false);

    return (
      <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="absolute inset-0 border-b border-primary/10"></div>
        <header className="relative max-w-6xl mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                    <AudioWaveform className="w-7 h-7 text-primary animate-pulse-gentle" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary/80 text-transparent bg-clip-text">Aura3.0</span>
                    </div>
                </Link>
                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => ( // Changed {} to () for implicit return
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <SignInButton />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen
                            (!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5"/>
                            
                            )}

                        </Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
    <div className="md:hidden border-t border-primary/10">
        <nav className="flex flex-col space-y-1 py-4">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item.label}  {/* Fixed: changed {item, label} to {item.label} */}
                </Link>
            ))}
        </nav>
    </div>
)}
        </header>

        {/*mobile menu*/}

      </div>
    );
  }