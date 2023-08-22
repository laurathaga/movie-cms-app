import { PropsWithChildren, createContext, useState } from "react";

interface Filter {
    type?: string; // eg: movie | serial | cartoon etc
    genre?: string;
    rating?: number;
    published?: string;
}

const initialState: Filter = {
    type: '',
    genre: '',
    rating: 0,
    published: '',
};

export const FilterStateContext = createContext<Filter | string>(initialState);
export const FilterSetterContext = createContext<(arg: Filter) => void>(() => {});

export default function FilterData({ children }: PropsWithChildren) {
    const [currentFilter, setCurrentFilter] = useState<Filter | string>(initialState);

    return (
        <FilterStateContext.Provider value={currentFilter}>
            <FilterSetterContext.Provider value={setCurrentFilter}>
                {children}
            </FilterSetterContext.Provider>
        </FilterStateContext.Provider>
    );
}
