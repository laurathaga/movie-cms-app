import { PropsWithChildren } from "react";
import MoviesData from "./MovieContext";
import FilterData from "./FilterContext";

export default function MainProvider({ children }: PropsWithChildren) {
    return (
        <MoviesData>
            <FilterData>
                {children}
            </FilterData>
        </MoviesData>
    )
}
