import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg';

const IconBase = ({ size = 24, className, children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

const Flag = (props) => (
  <IconBase {...props}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" x2="4" y1="22" y2="15" />
  </IconBase>
);
const Languages = (props) => (
  <IconBase {...props}>
    <path d="M4 7V4h16v3" />
    <path d="M9 20h6" />
    <path d="M12 4v16" />
  </IconBase>
);
const Settings = (props) => (
  <IconBase {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.75 1.3a2 2 0 0 0 .24 2.15l.77.77a2 2 0 0 1 0 2.73l-.77.77a2 2 0 0 0-.24 2.15l.75 1.3a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.75-1.3a2 2 0 0 0-.24-2.15l-.77-.77a2 2 0 0 1 0-2.73l.77-.77a2 2 0 0 0 .24-2.15l-.75-1.3a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
);
const Home = (props) => (
  <IconBase {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </IconBase>
);
const Menu = (props) => (
  <IconBase {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </IconBase>
);
const X = (props) => (
  <IconBase {...props}>
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </IconBase>
);

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';
  const isFlagsPage = location.pathname === '/flagsquiz';
  const isScriptsPage = location.pathname === '/scriptsquiz';
  const isSettingsPage = location.pathname === '/settings';

  const baseLinkClasses =
    'flex items-center gap-3 p-3 rounded-xl transition-all duration-300 font-medium text-sm lg:text-base';

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/95">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex cursor-pointer items-center gap-3">
            <img src={logo} alt="GeoTrainr Logo" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-neutral-400 dark:text-white">
              GeoTrainr
            </span>
          </Link>

          <div className="hidden items-center space-x-2 md:flex lg:space-x-4">
            <Link
              to="/flagsquiz"
              className={`${baseLinkClasses} ${
                isFlagsPage
                  ? 'border border-blue-200 bg-blue-100 text-blue-700 shadow-sm dark:border-blue-500/20 dark:bg-blue-600/10 dark:text-blue-400'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white'
              }`}
            >
              <Flag className="h-5 w-5" />
              <span>{t('navbar.flags')}</span>
            </Link>

            <Link
              to="/scriptsquiz"
              className={`${baseLinkClasses} ${
                isScriptsPage
                  ? 'border border-emerald-200 bg-emerald-100 text-emerald-700 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-600/10 dark:text-emerald-400'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white'
              }`}
            >
              <Languages className="h-5 w-5" />
              <span>{t('navbar.scripts')}</span>
            </Link>

            <div className="mx-2 h-6 border-l border-gray-300 dark:border-slate-700"></div>

            <Link
              to="/settings"
              className={`${baseLinkClasses} p-2 ${
                isSettingsPage
                  ? 'border border-gray-300 bg-gray-200 text-gray-900 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white'
                  : 'text-gray-600 hover:scale-[1.05] hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white'
              }`}
            >
              <Settings className="h-6 w-6" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="rounded-lg border border-gray-200 bg-gray-100 p-2 text-gray-700 transition-colors hover:text-gray-900 focus:outline-none dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col space-y-2 border-t border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isHomePage
                ? 'border border-indigo-200 bg-indigo-100 text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-600/10 dark:text-indigo-400'
                : 'text-gray-700 hover:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700/50'
            }`}
          >
            <Home className="h-6 w-6" />
            <span>{t('navbar.home')}</span>
          </Link>

          <Link
            to="/flagsquiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isFlagsPage
                ? 'border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-500/20 dark:bg-blue-600/10 dark:text-blue-400'
                : 'text-gray-700 hover:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700/50'
            }`}
          >
            <Flag className="h-6 w-6" />
            <span>{t('navbar.flags')}</span>
          </Link>

          <Link
            to="/scriptsquiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isScriptsPage
                ? 'border border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-600/10 dark:text-emerald-400'
                : 'text-gray-700 hover:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700/50'
            }`}
          >
            <Languages className="h-6 w-6" />
            <span>{t('navbar.scripts')}</span>
          </Link>

          <Link
            to="/settings"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`${baseLinkClasses} ${
              isSettingsPage
                ? 'border border-gray-300 bg-gray-200 text-gray-900 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white'
                : 'text-gray-700 hover:bg-gray-200 dark:text-slate-300 dark:hover:bg-slate-700/50'
            }`}
          >
            <Settings className="h-6 w-6" />
            <span>{t('navbar.settings')}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
