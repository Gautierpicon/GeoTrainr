import React, { useState, useEffect } from "react";
import languageData from "../data/languages.json";
import QuizAnswerButtons from "../components/QuizAnswerButtons";

// On parcourt les groupes (régions) et on aplatit la structure en un tableau
const languages = [];
Object.entries(languageData).forEach(([region, regionLanguages]) => {
  Object.entries(regionLanguages).forEach(([code, data]) => {
    languages.push({
      code,
      group: region, // on utilise la clé du groupe comme identifiant de groupe
      name: data.name,
      sentences: data.sentences,
    });
  });
});

const LanguagesQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const generateQuestion = () => {
    // Choisir une langue aléatoire pour la question
    const correctLang = languages[Math.floor(Math.random() * languages.length)];
    const sentence =
      correctLang.sentences[
        Math.floor(Math.random() * correctLang.sentences.length)
      ];

    // Filtrer uniquement les langues du même groupe (région) que la langue correcte, hors elle-même
    const sameGroupLangs = languages.filter(
      (l) => l.group === correctLang.group && l.code !== correctLang.code
    );

    // Mélanger les langues du même groupe
    for (let i = sameGroupLangs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sameGroupLangs[i], sameGroupLangs[j]] = [sameGroupLangs[j], sameGroupLangs[i]];
    }

    // Choisir 4 mauvaises réponses (si disponibles)
    const wrongOptions = sameGroupLangs.slice(0, 4);

    // Combiner la bonne réponse et les mauvaises réponses, puis mélanger
    const options = [correctLang, ...wrongOptions];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    setQuestion({
      correct: correctLang,
      sentence,
      options,
    });
    setSelected(null);
    setShowFeedback(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    setShowFeedback(true);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && showFeedback) {
        generateQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showFeedback]);

  if (!question) return <div>Chargement...</div>;

  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-[calc(100vh-4.75rem)] bg-gradient-to-b from-green-50 to-emerald-50 dark:from-emerald-950 dark:to-green-900">
      <div className="md:text-3xl text-2xl mb-8 md:w-3xl w-full font-bold text-center text-black dark:text-white">
        {question.sentence}
      </div>

      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {question.options.map((option) => (
          <QuizAnswerButtons
            key={option.code}
            isCorrect={option.code === question.correct.code}
            isSelected={selected?.code === option.code}
            showFeedback={showFeedback}
            onClick={() => handleSelect(option)}
            disabled={showFeedback}
          >
            {option.name}
          </QuizAnswerButtons>
        ))}
      </div>

      <button
        onClick={generateQuestion}
        className={`mt-6 py-2 px-4 rounded text-white transition-all duration-300 cursor-pointer
          ${showFeedback ? "bg-green-700 hover:bg-green-800 dark:bg-emerald-700 dark:hover:bg-emerald-800" : "bg-gray-400 dark:bg-gray-400 cursor-not-allowed"}
        `}
        disabled={!showFeedback}
      >
        Prochaine question
      </button>
    </div>
  );
};

export default LanguagesQuiz;