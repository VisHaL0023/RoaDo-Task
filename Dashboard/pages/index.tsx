import SideBar from "@/components/sidebar/sideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <SideBar />
        </>
    );
}
