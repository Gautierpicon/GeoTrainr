import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl w-full text-center mt-10">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">Bienvenue sur FlagFinder</h1>
        
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Explorez et testez vos connaissances en géographie à travers des quiz interactifs de drapeaux et d'écritures du monde entier.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link to="/flagsquiz" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-blue-500 mb-4">
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Quiz de Drapeaux</h2>
              <p className="text-gray-600 dark:text-gray-400">Testez vos connaissances sur les drapeaux de différents pays du monde.</p>
            </div>
          </Link>
          
          <Link to="/scriptsquiz" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-16 text-green-500 mb-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Quiz d'Écritures</h2>
              <p className="text-gray-600 dark:text-gray-400">Découvrez les différents systèmes d'écriture utilisés dans le monde entier.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;