import Dashboard from "@/components/Dashboard/dashboard";
import SideBar from "@/components/sidebar/sideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-blue-50">
                <SideBar />
                <div className="ml-20">
                    <div className="w-2/3">
                        <Dashboard />
                    </div>
                    <div className="w-1/3">
                        <p>Vishal</p>
                    </div>
                </div>
            </div>
        </>
    );
}
