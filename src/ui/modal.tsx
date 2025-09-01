"use client";
/**
 * Reuseable basic modal component
 */

import { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from "react";

export const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const Modal = ({ children }: { children?: ReactElement }): ReactNode => {
        return (
            modalOpen && (
                <div
                    className="absolute z-30 top-0 left-0 w-screen h-screen backdrop-blur-sm bg-gray-500/20 flex items-center align-center justify-center"
                    onClick={() => {
                        setModalOpen(false);
                    }}
                >
                    <div>{children}</div>
                </div>
            )
        );
    };

    return { openModal, Modal };
};
