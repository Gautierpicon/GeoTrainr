import React, { useState, useEffect } from "react";
import countryData from "../countries.json"; // Importation du JSON local
import Favicon from "./Favicon";

const countries = Object.entries(countryData).map(([code, name]) => ({
  code,
  name
}));

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);

  const generateQuestion = () => {
    const correctCountry = countries[Math.floor(Math.random() * countries.length)];

    const otherCountries = countries.filter((c) => c.code !== correctCountry.code);
    for (let i = otherCountries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherCountries[i], otherCountries[j]] = [otherCountries[j], otherCountries[i]];
    }

    let options = [correctCountry, ...otherCountries.slice(0, 4)];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    setQuestion({ correct: correctCountry, options });
    setSelected(null);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
  };

  if (!question) return <div>Chargement...</div>;

  return (
    <div className="flex flex-col items-center p-4">
      {/* Mettre à jour la favicon et le titre de la page */}
      <Favicon countryCode={question.correct.code} />

      <img
        src={`https://flagcdn.com/${question.correct.code}.svg`}
        alt={`${question.correct.name}`}
        className="w-96 h-auto mb-6 shadow-lg corner"
      />
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {question.options.map((option) => {
          let bgColor = "bg-gray-200";
          if (selected) {
            if (option.code === question.correct.code) {
              bgColor = "bg-green-300";
            } else if (selected.code === option.code) {
              bgColor = "bg-red-300";
            }
          }
          return (
            <button
              key={option.code}
              onClick={() => handleSelect(option)}
              className={`py-2 px-4 rounded shadow ${bgColor} hover:bg-gray-300`}
            >
              {option.name}
            </button>
          );
        })}
      </div>
      {selected && (
        <button
          onClick={generateQuestion}
          className="mt-6 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Nouvelle question
        </button>
      )}
    </div>
  );
};

export default Quiz;