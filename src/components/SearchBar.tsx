import { useState, ChangeEvent } from "react"


interface Props {
    onSearch: (query: string) => void;
}


export default function SearchBar({onSearch}: Props) {

    const [search, setSearch] = useState("");

    const handleChange =(e: ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
    };

    return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Buscar posts..."
        value={search}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />
    </div>
    )
}
