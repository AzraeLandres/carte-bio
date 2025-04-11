import Input from "../atoms/Input";
interface SearchBarProps {
  search: string;
  setSearch: (val: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  search,
  setSearch,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex gap-2 m-3 z-50 absolute left-1/3  w-1/3">
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-yellow font-semibold  text-white rounded-3xl text-md hover:bg-black "
      >
        Rechercher
      </button>
    </div>
  );
}
