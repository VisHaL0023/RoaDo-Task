import Dashboard from "@/components/Dashboard/dashboard";
import HighLight from "@/components/Highlight";
import SideBar from "@/components/sidebar/sideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-blue-50 text-black">
                <SideBar />
                <div className="ml-20 flex gap-2">
                    <div className="min-w-[100%] md:min-w-[70%]">
                        <Dashboard />
                    </div>
                    <div className="hidden md:block min-w-[30%] bg-white rounded-md">
                        <HighLight />
                    </div>
                </div>
            </div>
        </>
    );
}
