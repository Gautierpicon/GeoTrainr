import React, { useState, useEffect } from "react";
import languageData from "../data/languages.json";
import QuizAnswerButtons from "../components/Buttons/QuizAnswerButtons";
import Timer from "../components/Settings/Timer/Timer";
import Loader from "../components/Loader";
import NextQuestionButtons from "../components/Buttons/NextQuestionButtons";

const languages = [];
Object.entries(languageData).forEach(([region, regionLanguages]) => {
  Object.entries(regionLanguages).forEach(([code, data]) => {
    languages.push({
      code,
      group: region,
      name: data.name,
      sentences: data.sentences,
    });
  });
});

const ScriptsQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerDuration, setTimerDuration] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    setTimerEnabled(localStorage.getItem('quizTimerEnabled') === 'true');
    const savedDuration = parseInt(localStorage.getItem('quizTimerDuration') || '30');
    setTimerDuration(savedDuration);
    
    if (localStorage.getItem('quizTimerEnabled') === 'true') {
      setTimerRunning(true);
    }
  }, []);

  const generateQuestion = () => {
    const correctLang = languages[Math.floor(Math.random() * languages.length)];
    const sentence =
      correctLang.sentences[
        Math.floor(Math.random() * correctLang.sentences.length)
      ];

    const sameGroupLangs = languages.filter(
      (l) => l.group === correctLang.group && l.code !== correctLang.code
    );

    for (let i = sameGroupLangs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sameGroupLangs[i], sameGroupLangs[j]] = [sameGroupLangs[j], sameGroupLangs[i]];
    }

    const wrongOptions = sameGroupLangs.slice(0, 4);

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
    
    if (timerEnabled) {
      setTimerRunning(true);
    }
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    setShowFeedback(true);
    setTimerRunning(false);
  };
  
  const handleTimeUp = () => {
    if (!selected) {
      setSelected(question.correct);
      setShowFeedback(true);
      setTimerRunning(false);
    }
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

  if (!question) return <Loader />;

  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-[calc(100vh-4.5rem)] bg-gradient-to-b from-green-50 to-emerald-50 dark:from-emerald-950 dark:to-green-900">
      {timerEnabled && (
        <Timer 
          duration={timerDuration}
          onTimeUp={handleTimeUp}
          isRunning={timerRunning}
          className="mb-4"
        />
      )}
      
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

      <NextQuestionButtons 
        onClick={generateQuestion}
        disabled={!showFeedback}
        variant="scripts"
      />
    </div>
  );
};

export default ScriptsQuiz;