import { useState } from "react";

const Flags = () => {
  const [countryCode, setCountryCode] = useState("fr");

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        placeholder="Code pays (ex: fr, us, jp)"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value.toLowerCase())}
        className="border rounded-md p-2 mb-4"
      />
      <img
        src={`https://flagcdn.com/${countryCode}.svg`}
        alt={`Drapeau du pays avec le code ${countryCode}`}
        className="w-40 h-auto border shadow-lg"
        onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Not+Found")}
      />
    </div>
  );
};

export default Flags;