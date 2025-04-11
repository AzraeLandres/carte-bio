interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-white placeholder:text-gray-500 placeholder:italic placeholder:text-sm focus:outline-yellow"
      placeholder="Rechercher une initiative solidaire..."
    />
  );
}
