import { PropsWithChildren } from "react";
import MoviesData from "./MovieContext";

export default function MainProvider({ children }: PropsWithChildren) {
    return (
        <MoviesData>
            {children}
        </MoviesData>
    )
}
