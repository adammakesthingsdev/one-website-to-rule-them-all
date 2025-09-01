/* UI components for portfolio rendering */
"use client";
import { useMDXComponents } from "@/mdx-components";
import type { PortfolioTag } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { MDXClient } from "next-mdx-remote-client";
import Image from "next/image";
import { useState } from "react";
import { useModal } from "./modal";

export const tagColor = (tag: PortfolioTag) => {
    switch (tag.color) {
        case "RED":
            return "bg-red-500/20";
        default:
            return "";
    }
};

export type PortfolioItemFull = Prisma.PortfolioItemGetPayload<{
    include: { tag: true };
}>;

export function PortfolioTag({ tag }: { tag: PortfolioTag }) {
    return (
        <span
            className={`border-1 rounded-full px-2 text-lg mx-2 inline-flex items-center ${tagColor(
                tag
            )}`}
        >
            {tag.iconUrl && (
                <Image
                    alt="logo"
                    src={tag.iconUrl}
                    width={512}
                    height={512}
                    className="h-5 w-auto mr-1"
                />
            )}
            {tag.name}
        </span>
    );
}

export function PortfolioItem({
    item,
    mdxSource,
    expanded,
}: {
    item: PortfolioItemFull;
    // For whatever reason the given typedef varies from client to server - ignoring for now
    mdxSource?: any;
    expanded?: boolean;
}) {
    // current modal state
    const { openModal, Modal } = useModal();

    return (
        <>
            <div
                className={`border-2 p-2 rounded-md m-3 flex flex-col bg-white ${
                    expanded ? "lg:w-4xl " : "cursor-pointer"
                }`}
                onClick={() => {
                    openModal();
                }}
            >
                <span className="text-2xl inline-flex items-center">
                    {item.title}
                    {item.tag && <PortfolioTag tag={item.tag} />}
                </span>
                <span className="italic">{item.tagline}</span>
                <span className="">{`${item.start ?? "Unknown"} - ${
                    item.end ?? "Unknown"
                }`}</span>
                {mdxSource && (
                    <span
                        className={`${
                            expanded ? "" : "max-h-20"
                        } text-ellipsis overflow-hidden`}
                    >
                        <MDXClient
                            compiledSource={mdxSource.compiledSource}
                            components={useMDXComponents()}
                        />
                    </span>
                )}
            </div>
            <Modal>
                <PortfolioItem
                    item={item}
                    mdxSource={mdxSource}
                    expanded={true}
                />
            </Modal>
        </>
    );
}
