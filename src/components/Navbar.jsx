import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import logo from '../assets/logo.svg'

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isFlagsPage = location.pathname === "/flagsquiz";
  const isScriptsPage = location.pathname === "/scriptsquiz";
  const isSettingsPage = location.pathname === "/settings";
    
  return (
    <nav className="bg-gray-50 dark:bg-black shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo et Nom */}
        <Link
          to="/"
          className="flex items-center space-x-3 cursor-pointer transition-opacity duration-200 group"
        >
          <img src={logo} alt="GeoTrainr Logo" className="size-10"/>
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:underline">
            GeoTrainr
          </span>
        </Link>

        {/* Liens de navigation pour desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/flagsquiz"
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isFlagsPage 
                ? "bg-indigo-600 dark:bg-indigo-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:scale-[1.02]"
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
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isScriptsPage 
                ? "bg-green-600 dark:bg-green-500 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 hover:scale-[1.02]"
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

          <div className="border-l border-gray-200 h-8 ml-4"></div>

          <Link
            to="/settings"
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isSettingsPage 
                ? "bg-gray-700 dark:bg-gray-600 text-white" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-[1.06]"
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

        {/* Bouton du menu burger pour mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="text-gray-800 dark:text-gray-200 hover:opacity-80 p-2 focus:outline-none transition-opacity duration-200"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

      {/* Menu de navigation mobile avec animation */}
      <div
        className={`md:hidden px-6 pb-4 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-2">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isHomePage 
                ? "bg-blue-500 text-white dark:text-black" 
                : "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-blue-500/10 dark:hover:bg-blue-400/10"
            }`}
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
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isFlagsPage 
                ? "bg-indigo-500 text-white dark:text-black" 
                : "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-indigo-500/10 dark:hover:bg-indigo-400/10"
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
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isScriptsPage 
                ? "bg-green-500 text-white dark:text-black" 
                : "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-green-500/10 dark:hover:bg-green-400/10"
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
          <Link
            to="/settings"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 ${
              isSettingsPage 
                ? "bg-gray-600 dark:bg-gray-400 text-white dark:text-black" 
                : "bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-500/10 dark:hover:bg-gray-400/10"
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
            <span>Paramètres</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;