'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SignInButtonProps {
    className?: string;
}

export function SignInButton({ className }: SignInButtonProps) {
    return (
        <Link href="/login">
            <Button className={className}>Sign In</Button>
        </Link>
    );
}
