import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import i18n from '../i18n';
import countryDataFr from '../data/fr/flags.json';
import countryDataEn from '../data/en/flags.json';
import Favicon from '../components/Favicon';
import QuizAnswerButtons from '../components/Buttons/QuizAnswerButtons';
import Timer from '../components/Settings/Timer/Timer';
import Loader from '../components/Loader';
import NextQuestionButtons from '../components/Buttons/NextQuestionButtons';

const getCountryData = () => {
  return i18n.language === 'en' ? countryDataEn : countryDataFr;
};

const FlagsQuiz = () => {
  const [continents, setContinents] = useState(Object.keys(getCountryData()));
  const [countriesByContinent, setCountriesByContinent] = useState({});

  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerDuration, setTimerDuration] = useState(10);
  const [timerRunning, setTimerRunning] = useState(false);

  const flagRef = useRef(null);
  const optionsRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const processCountryData = (data) => {
      const conts = Object.keys(data);
      setContinents(conts);

      const processed = Object.entries(data).reduce(
        (acc, [continent, countries]) => {
          acc[continent] = Object.entries(countries).map(([code, name]) => ({
            code,
            name,
            continent,
          }));
          return acc;
        },
        {}
      );
      setCountriesByContinent(processed);
    };

    processCountryData(getCountryData());

    const handleLanguageChanged = () => {
      processCountryData(getCountryData());
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  useEffect(() => {
    setTimerEnabled(localStorage.getItem('quizTimerEnabled') === 'true');
    setTimerDuration(
      parseInt(localStorage.getItem('quizTimerDuration') || '10')
    );

    if (localStorage.getItem('quizTimerEnabled') === 'true') {
      setTimerRunning(true);
    }
  }, []);

  useEffect(() => {
    if (question && flagRef.current) {
      gsap.fromTo(
        flagRef.current,
        {
          scale: 0.7,
          opacity: 0,
          rotationY: -90,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.6,
          ease: 'back.out(1.5)',
        }
      );

      if (timerRef.current) {
        gsap.from(timerRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.out',
        });
      }

      gsap.from(optionsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.3,
      });
    }
  }, [question]);

  const generateQuestion = useCallback(() => {
    if (
      continents.length === 0 ||
      Object.keys(countriesByContinent).length === 0
    )
      return;

    const randomContinent =
      continents[Math.floor(Math.random() * continents.length)];

    const list = countriesByContinent[randomContinent];
    if (!list || list.length < 5) return;

    const correctCountry = list[Math.floor(Math.random() * list.length)];

    const otherCountries = list.filter((c) => c.code !== correctCountry.code);

    for (let i = otherCountries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherCountries[i], otherCountries[j]] = [
        otherCountries[j],
        otherCountries[i],
      ];
    }

    const options = [correctCountry, ...otherCountries.slice(0, 4)];

    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    setQuestion({
      correct: correctCountry,
      continent: randomContinent,
      options,
    });

    setSelected(null);
    setShowFeedback(false);

    if (timerEnabled) {
      setTimerRunning(true);
    }
  }, [continents, countriesByContinent, timerEnabled]);

  useEffect(() => {
    if (continents.length > 0 && Object.keys(countriesByContinent).length > 0) {
      generateQuestion();
    }
  }, [continents, countriesByContinent, generateQuestion]);

  const handleSelect = (option) => {
    if (selected) return;
    setSelected(option);
    setShowFeedback(true);
    setTimerRunning(false);

    if (option.code !== question.correct.code) {
      gsap.to(flagRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
      });
    } else {
      gsap.to(flagRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      });
    }
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
      if (event.key === 'Enter' && showFeedback) {
        generateQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showFeedback, generateQuestion]);

  if (!question) return <Loader />;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-linear-to-b from-indigo-100 to-violet-100 p-4 dark:from-gray-900 dark:to-blue-900">
      <Favicon countryCode={question.correct.code} />

      {timerEnabled && (
        <div ref={timerRef}>
          <Timer
            duration={timerDuration}
            onTimeUp={handleTimeUp}
            isRunning={timerRunning}
            className="mb-4"
          />
        </div>
      )}

      <img
        ref={flagRef}
        src={`https://flagcdn.com/${question.correct.code}.svg`}
        alt={question.correct.name}
        className="mb-6 w-auto lg:h-70 lg:shadow-lg"
      />

      <div className="grid w-full max-w-md grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <div key={option.code} ref={(el) => (optionsRef.current[index] = el)}>
            <QuizAnswerButtons
              isCorrect={option.code === question.correct.code}
              isSelected={selected?.code === option.code}
              showFeedback={showFeedback}
              onClick={() => handleSelect(option)}
              disabled={showFeedback}
            >
              {option.name}
            </QuizAnswerButtons>
          </div>
        ))}
      </div>

      <NextQuestionButtons
        onClick={generateQuestion}
        disabled={!showFeedback}
        variant="flags"
      />
    </div>
  );
};

export default FlagsQuiz;
