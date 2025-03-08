import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg'

import X from '../assets/logos/X.png';
import GitHub from '../assets/logos/GitHub.png';
import BlueSky from '../assets/logos/BlueSky.png'

const Homepage = () => {
  const openGitHubIssue = () => {
    window.open('https://github.com/Gautierpicon/FlagFinder/issues/new', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
  {/* Hero Section */}
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
    <div className="max-w-4xl mx-auto">
      {/* Logo */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <img src={logo} alt="FlagFinder Logo" className="w-24 h-24 sm:w-32 sm:h-32"/>
        <h1 className="md:text-left text-center text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight">
          Devenez un Maître de la Géographie
        </h1>
      </div>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">
        Perfectionnez vos compétences en reconnaissance visuelle et entrainez-vous pour <a href="https://www.geoguessr.com/" className='underline'>GeoGuessr</a> !
      </p>

      {/* Game Modes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
        <div className="relative group">
          <Link to="/flagsquiz" className="block transform transition-all duration-300 hover:scale-105">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-blue-100 dark:border-gray-700 hover:border-blue-300">
              <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-gray-700 rounded-2xl">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">Drapeaux</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">Apprenez à identifier les drapeaux nationaux (254) des États américains (50), ainsi que les drapeaux de l'UE et de l'ONU.</p>
              <div className="text-blue-600 dark:text-blue-400 font-semibold">
                Commencer le défi →
              </div>
            </div>
          </Link>
        </div>

        <div className="relative group">
          <Link to="/scriptsquiz" className="block transform transition-all duration-300 hover:scale-105">
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-green-100 dark:border-gray-700 hover:border-green-300">
              <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-gray-700 rounded-2xl">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">Systèmes d'Écriture</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">Maîtrisez la reconnaissance des alphabets, y compris les systèmes d'écriture latins, cyrilliques, arabes, asiatiques, et bien d'autres.</p>
              <div className="text-green-600 dark:text-green-400 font-semibold">
                Commencer le défi →
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-800 dark:text-gray-200">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-4 sm:p-6">
            <div className="text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl mb-3 sm:mb-4 font-bold">1</div>
            <h3 className="text-lg sm:text-xl text-gray-600 dark:text-gray-200 font-semibold mb-2 sm:mb-3">Choisissez un Mode</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200">Vous avez le choix entre <Link to="/flagsquiz" className='hover:underline'>Drapeau</Link> et <Link to="/scriptsquiz" className='hover:underline'>Écritures</Link></p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl mb-3 sm:mb-4 font-bold">2</div>
            <h3 className="text-lg sm:text-xl text-gray-600 dark:text-gray-200 font-semibold mb-2 sm:mb-3">Jouez</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200">Identifiez l'élément proposé parmi les options</p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl mb-3 sm:mb-4 font-bold">3</div>
            <h3 className="text-lg sm:text-xl text-gray-600 dark:text-gray-200 font-semibold mb-2 sm:mb-3">Améliorez votre Niveau</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200">Changez la difficultée en ajoutant du temps</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gradient-to-b from-green-50 to-emerald-50 dark:from-emerald-900 dark:to-emerald-900 border-t border-gray-200 dark:border-gray-700">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
        {/* About Section */}
        <div className="mb-8 md:w-1/3">
  <div className="flex items-center space-x-3 mb-4">
    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">GeoTrainr</h4>
  </div>
  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mb-4">
  Perfectionnez vos compétences en reconnaissance visuelle et entrainez-vous pour <a href="https://www.geoguessr.com/" className='underline'>GeoGuessr</a> !
  </p>
  <div className="flex justify-start gap-4">
  <div className="flex flex-col items-center gap-1">
    <a href="https://github.com/Gautierpicon/FlagFinder/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
      <img src={GitHub} alt="GitHub logo" className="w-6 h-6"/>
      <span className="text-xs text-gray-600 dark:text-gray-200">GitHub</span>
    </a>
  </div>
  <div className="flex flex-col items-center gap-1">
    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
      <img src={X} alt="X logo" className="w-6 h-6"/>
      <span className="text-xs text-gray-600 dark:text-gray-200">Twitter</span>
    </a>
  </div>
  <div className="flex flex-col items-center gap-1">
    <a href="https://bsky.app/profile/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
      <img src={BlueSky} alt="BlueSky logo" className="w-6 h-6"/>
      <span className="text-xs text-gray-600 dark:text-gray-200">BlueSky</span>
    </a>
  </div>
</div>

</div>

        {/* Game Modes */}
        <div className="mb-8 md:w-1/3 md:border-l md:border-gray-300 dark:md:border-gray-500 md:pl-8">
          <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Crédits</h4>
          <ul className="space-y-2">
            <li><a href="https://www.geoguessr.com/" target="_blank" className="hover:underline text-sm sm:text-base text-gray-600 dark:text-gray-200">GeoGuessr</a></li>
            <li><a href="https://flagpedia.net/" target="_blank" className="hover:underline text-sm sm:text-base text-gray-600 dark:text-gray-200">flagpedia.net</a></li>
          </ul>
        </div>

        {/* Report an Issue */}
        <div className="mb-8 md:w-1/3 md:border-l md:border-gray-300 dark:md:border-gray-500 md:pl-8">
          <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">Un bug à nous partager ?</h4>
          <button
            onClick={openGitHubIssue}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Signaler un problème
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-500 flex justify-center items-center gap-2">
        <img src={logo} alt="GeoTrainr Logo" className="w-8 h-8" />
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 m-0">
          {new Date().getFullYear()} - GeoTrainr.
        </p>
      </div>
    </div>
  </footer>
</div>
  );
};

export default Homepage;