import {HeaderComponent} from "../components";
import {ReactNode} from "react";

type Props = {
    children : ReactNode
}
export function DefaultLayout({children}: Readonly<Props>) {
    return (
        <>
            <HeaderComponent/>
            {children}
        </>
    );
}