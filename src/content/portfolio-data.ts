/**
 * Types and data for portfolio page
 */

export interface PortfolioDataTag {
    text: string;
    color: "RED" | "GREEN"; // add more as needed
    icon?: string; // url to SVG icon
}

export interface PortfolioDataItem {
    title: string; // title as printed
    time: string; // e.g. "Summer 2025", "June 2024 - current"
    shortDesc: string; // 1-2 sentence description
    link?: { url: string; text: string };
}

export const portfolioData: PortfolioDataItem[] = [
    {
        title: "Orpheus Pico",
        time: "Aug 2024 - April 2025",
        shortDesc:
            "This solo project was an incredibly inexpensive RP2040-based microcontroller designed for Hack Club. Several versions have been released, totalling nearly 2000 boards sent to teenagers. ",
    },
    {
        title: "Mutiny",
        time: "Aug 2024 - Jan 2025",
        shortDesc:
            "An unfortunately scrapped solo project, Mutiny was a full-stack physical mailing tool to fully automate the purchase and shipping of packages globally.",
    },
];
