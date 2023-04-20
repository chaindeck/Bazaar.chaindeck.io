import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full antialiased scroll-smooth" lang="en">
            <Head />

            <body className="flex h-full flex-col bg-[#100828] text-zinc-200">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
