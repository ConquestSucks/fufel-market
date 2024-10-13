'use client';
import SearchInputProps from "@/app/types/search";
import { ChangeEvent, FC, useState } from 'react';
import { openSans } from '@/app/ui/fonts';

const SearchInput: FC<SearchInputProps> = ({ placeholder = 'Search' }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Поисковый запрос:", query);
    }

    return (
        <form onSubmit={handleSubmit} className={`${openSans.className} flex gap-x-2 w-full font-semibold justify-center`}>
          <input className="text-background bg-accent rounded-xl placeholder:text-background outline-none w-3/4 box-border p-1"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
          />
          <button type="submit">Find</button>
        </form>
    );
};

export default SearchInput;
