import Main from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex items-start justify-start bg-blue-50">
                <Main />
            </div>
        </>
    );
}
