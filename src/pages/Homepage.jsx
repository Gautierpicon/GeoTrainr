import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  // Fonction pour ouvrir une issue sur GitHub
  const openGitHubIssue = () => {
    window.open('https://github.com/flagfinder/flagfinder/issues/new', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-4 mb-6">
          <img src="../assets/test.jpg" alt="FlagFinder Logo" className="w-16 h-16" />
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight">
            Devenez un Maître de la Géographie
          </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Perfectionnez vos compétences en reconnaissance visuelle et préparez-vous pour le GeoGuessr avec nos défis interactifs !
          </p>

          {/* Game Modes Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="relative group">
              <Link to="/flagsquiz" className="block transform transition-all duration-300 hover:scale-105">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-2 border-blue-100 dark:border-gray-700 hover:border-blue-300">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-gray-700 rounded-2xl">
                    <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Drapeaux du Monde</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Apprenez à identifier les drapeaux nationaux et leurs symboles</p>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">
                    Commencer le défi →
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative group">
              <Link to="/scriptsquiz" className="block transform transition-all duration-300 hover:scale-105">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-2 border-green-100 dark:border-gray-700 hover:border-green-300">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-gray-700 rounded-2xl">
                    <svg className="w-12 h-12 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Systèmes d'Écriture</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Maîtrisez la reconnaissance des alphabets et écritures internationales</p>
                  <div className="text-green-600 dark:text-green-400 font-semibold">
                    Explorer les écritures →
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">Comment ça marche ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4 font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Choisissez un Mode</h3>
                <p className="text-gray-600 dark:text-gray-400">Drapeaux nationaux ou systèmes d'écriture</p>
              </div>
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4 font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Jouez aux Devinettes</h3>
                <p className="text-gray-600 dark:text-gray-400">Identifiez les éléments proposés parmi 4 options</p>
              </div>
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4 font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Améliorez Vos Scores</h3>
                <p className="text-gray-600 dark:text-gray-400">Suivez vos progrès et défiez vos amis <span className="font-bold">bientôt</span> !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-8"> {/* Réduit le padding pour rapprocher le texte du bas */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/test.jpg" alt="FlagFinder Logo" className="w-10 h-10" />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">FlagFinder</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Améliorez vos compétences géographiques grâce à des défis ludiques et éducatifs.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/flagfinder" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  <span className="sr-only">GitHub</span>
                  <img src="../assets/GitHub.png" alt="GitHub logo" className="w-6 h-6"/>
                </a>
                <a href="https://twitter.com/flagfinder" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  <span className="sr-only">Twitter</span>
                  <img src="../assets/X.png" alt="X logo" className="w-6 h-6"/>
                </a>
              </div>
            </div>

            {/* Game Modes */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Modes de Jeu</h4>
              <ul className="space-y-2">
                <li><Link to="/flagsquiz" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Quiz Drapeaux</Link></li>
                <li><Link to="/scriptsquiz" className="text-gray-600 dark:text-gray-400 hover:text-green-600">Quiz Écritures</Link></li>
              </ul>
            </div>

            {/* Report an Issue */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contribuer</h4>
              <button
                onClick={openGitHubIssue}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Signaler un problème
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 FlagFinder. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;