import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.svg';

// Base component for icons with stroke
const IconBase = ({ size = 24, className, children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{children}</svg>
);

// Required icons
const Flag = (props) => <IconBase {...props}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></IconBase>;
const Languages = (props) => <IconBase {...props}><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></IconBase>;
const Settings = (props) => <IconBase {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.75 1.3a2 2 0 0 0 .24 2.15l.77.77a2 2 0 0 1 0 2.73l-.77.77a2 2 0 0 0-.24 2.15l.75 1.3a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.75-1.3a2 2 0 0 0-.24-2.15l-.77-.77a2 2 0 0 1 0-2.73l.77-.77a2 2 0 0 0 .24-2.15l-.75-1.3a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></IconBase>;
const Home = (props) => <IconBase {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></IconBase>;
const Menu = (props) => <IconBase {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconBase>;
const X = (props) => <IconBase {...props}><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></IconBase>;

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isFlagsPage = location.pathname === "/flagsquiz";
  const isScriptsPage = location.pathname === "/scriptsquiz";
  const isSettingsPage = location.pathname === "/settings";
  
  // Base classes for inactive links
  const baseLinkClasses = "flex items-center gap-3 p-3 rounded-xl transition-all duration-300 font-medium text-sm lg:text-base";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo and Name */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img src={logo} alt="GeoTrainr Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-neutral-400 transition-colors">
              GeoTrainr
            </span>
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            
            {/* Flags Link */}
            <Link
              to="/flagsquiz"
              className={`${baseLinkClasses} ${
                isFlagsPage 
                  ? "bg-blue-100 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shadow-sm" 
                  : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Flag className="w-5 h-5" />
              <span>Drapeaux</span>
            </Link>

            {/* Scripts Link */}
            <Link
              to="/scriptsquiz"
              className={`${baseLinkClasses} ${
                isScriptsPage 
                  ? "bg-emerald-100 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm" 
                  : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Languages className="w-5 h-5" />
              <span>Écritures</span>
            </Link>

            <div className="border-l border-gray-300 dark:border-slate-700 h-6 mx-2"></div>

            {/* Settings Link */}
            <Link
              to="/settings"
              className={`${baseLinkClasses} p-2 ${
                isSettingsPage 
                  ? "bg-gray-200 dark:bg-slate-700/50 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-600" 
                  : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-white hover:scale-[1.05]"
              }`}
            >
              <Settings className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile burger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu with animation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-2 p-4 border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/80">
          
          {/* Home Link */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isHomePage 
                ? "bg-indigo-100 dark:bg-indigo-600/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20" 
                : "text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700/50"
            }`}
          >
            <Home className="w-6 h-6" />
            <span>Accueil</span>
          </Link>
          
          {/* Flags Link */}
          <Link
            to="/flagsquiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isFlagsPage 
                ? "bg-blue-100 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" 
                : "text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700/50"
            }`}
          >
            <Flag className="w-6 h-6" />
            <span>Drapeaux</span>
          </Link>
          
          {/* Scripts Link */}
          <Link
            to="/scriptsquiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isScriptsPage 
                ? "bg-emerald-100 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" 
                : "text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700/50"
            }`}
          >
            <Languages className="w-6 h-6" />
            <span>Écritures</span>
          </Link>
          
          {/* Settings Link */}
          <Link
            to="/settings"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isSettingsPage 
                ? "bg-gray-200 dark:bg-slate-700/50 text-gray-900 dark:text-white border border-gray-300 dark:border-slate-600" 
                : "text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700/50"
            }`}
          >
            <Settings className="w-6 h-6" />
            <span>Paramètres</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;