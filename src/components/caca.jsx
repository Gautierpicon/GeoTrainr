import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isFlagsPage = location.pathname === "/flagsquiz";
  const isScriptsPage = location.pathname === "/scriptsquiz";
  const isSettingsPage = location.pathname === "/settings";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo et Titre */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 transition-opacity hover:opacity-80"
        >
          <svg width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" className="fill-blue-600 dark:fill-blue-500"/>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM25 5C24.5802 5 24.1633 5.01294 23.7499 5.03843L23.75 10.669L12.5 20L6.85602 16.5746C5.66497 19.1352 5 21.9899 5 25C5 32.9077 9.58927 39.7435 16.2497 42.9893L16.25 36.7675L11.3485 31.8663L9.94016 24.8246L11.8963 20.9122L18.9925 23.75H27.3341L28.7927 33.9598L23.3078 44.9294C23.8657 44.9762 24.4301 45 25 45C32.0558 45 38.2581 41.3463 41.8184 35.8277L37.82 22.5H34.1537L31.1309 14.9431L34.5152 8.17449L40.1249 11.9137C36.4576 7.67892 31.0417 5 25 5Z"
              className="fill-green-500 dark:fill-green-400"
            />
          </svg>
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">GeoTrainr</span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/flagsquiz"
            className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
              isFlagsPage 
                ? "bg-indigo-600 dark:bg-indigo-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Drapeaux</span>
          </Link>

          <Link
            to="/scriptsquiz"
            className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
              isScriptsPage 
                ? "bg-green-600 dark:bg-green-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            <span>Écritures</span>
          </Link>

          <div className="border-l border-gray-200 dark:border-gray-700 h-8 ml-4"></div>

          <Link
            to="/settings"
            className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
              isSettingsPage 
                ? "bg-gray-700 dark:bg-gray-600 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <svg
              className={`w-6 h-6 transform transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden px-6 pb-4 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-2">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              isHomePage 
                ? "bg-blue-600 dark:bg-blue-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            } transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.031-.028.061-.056.091-.086L12 5.43z" />
            </svg>
            <span>Accueil</span>
          </Link>

          <Link
            to="/flagsquiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              isFlagsPage 
                ? "bg-indigo-600 dark:bg-indigo-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            } transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Drapeaux</span>
          </Link>

          <Link
            to="/scriptsquiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              isScriptsPage 
                ? "bg-green-600 dark:bg-green-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            } transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            <span>Écritures</span>
          </Link>

          <Link
            to="/settings"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-lg ${
              isSettingsPage 
                ? "bg-gray-700 dark:bg-gray-600 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            } transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>Paramètres</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;