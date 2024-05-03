import { useMemo } from "react";
import { usePathname } from "next/navigation";
import DashboardLogo from "@/public/svg/dashboardLogoIcon.svg";
import dashboardIcon from "@/public/svg/dashboardIcon.svg";
import plusIcon from "@/public/svg/plusIcon.svg";
import importantLabel from "@/public/svg/importentIcon.svg";
import assignmentIcon from "@/public/svg/assignmentIcon.svg";
import waitingTimeIcon from "@/public/svg/waitingTimeIcon.svg";
import localShippingIcon from "@/public/svg/localShippingIcon.svg";
import parcelTrackingIcon from "@/public/svg/ParcelTrackingIcon.svg";
import businessIcon from "@/public/svg/businessIcon.svg";
import walletIcon from "@/public/svg/walletIcon.svg";
import multiWindowIcon from "@/public/svg/multiWindowIcon.svg";
import settingIcon from "@/public/svg/settingIcon.svg";

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(
        () => [
            {
                label: "DashboardLogo",
                href: "/#",
                icon: DashboardLogo,
            },
            {
                label: "Dashboard",
                href: "/#",
                icon: dashboardIcon,
            },
            {
                label: "plusIcon",
                href: "/#",
                icon: plusIcon,
            },
            {
                label: "importantLabel",
                href: "/#",
                icon: importantLabel,
            },
            {
                label: "assignmentIcon",
                href: "/#",
                icon: assignmentIcon,
            },
            {
                label: "waitingTimeIcon",
                href: "/#",
                icon: waitingTimeIcon,
            },
            {
                label: "localShippingIcon",
                href: "/#",
                icon: localShippingIcon,
            },
            {
                label: "parcelTrackingIcon",
                href: "/#",
                icon: parcelTrackingIcon,
            },
            {
                label: "businessIcon",
                href: "/#",
                icon: businessIcon,
            },
            {
                label: "walletIcon",
                href: "/#",
                icon: walletIcon,
            },
            {
                label: "multiWindowIcon",
                href: "/#",
                icon: multiWindowIcon,
            },
            {
                label: "settingIcon",
                href: "/#",
                icon: settingIcon,
            },
        ],
        [pathname]
    );

    return routes;
};

export default useRoutes;
