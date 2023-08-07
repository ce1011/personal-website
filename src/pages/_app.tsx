import type { AppProps } from "next/app";
import "@/app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div data-theme="dark" className="min-h-screen">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
