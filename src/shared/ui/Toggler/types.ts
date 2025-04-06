import { ReactNode } from "react";

export interface IToggler {
    value: boolean;
    icon?: ReactNode;
    handler: () => void;
}