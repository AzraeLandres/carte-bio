import { useState } from "react";
import SearchBar from "../molecules/Searchbar";
import MapView from "../organisms/MapView";
import { Place } from "../../interfaces/Place";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Place[]>([]);

  const fetchPlaces = async (query: string) => {
    try {
      const res = await fetch(
        `https://opendata.agencebio.org/api/gouv/operateurs?q=${query}`
      );
      const data = await res.json();
      const withCoords = data.items.filter((item: any) =>
        item.adressesOperateurs?.some((a: any) => a.lat && a.long)
      );
      setResults(withCoords);
    } catch (error) {
      console.error("Erreur API Agence Bio :", error);
    }
  };

  return (
    <div className="h-screen w-full relative">
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={() => fetchPlaces(search)}
      />
      <MapView places={results} />
    </div>
  );
}
