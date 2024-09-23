'use client';
import SearchInputProps from "@/app/types/search";
import { ChangeEvent, FC, useState } from 'react';

const SearchInput: FC<SearchInputProps> = ({ placeholder = 'Search...' }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Поисковый запрос:", query);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-x-2">
          <input className="text-background bg-accent rounded-xl placeholder:text-background"
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
