import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
const Map = (props) => (
  <IconBase {...props}>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" x2="8" y1="2" y2="18" />
    <line x1="16" x2="16" y1="6" y2="22" />
  </IconBase>
);
const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconBase>
);
const Github = (props) => (
  <IconBase {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </IconBase>
);
const Twitter = (props) => (
  <IconBase {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </IconBase>
);
const MessageCircle = (props) => (
  <IconBase {...props}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </IconBase>
);
const AlertCircle = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </IconBase>
);
const ExternalLink = (props) => (
  <IconBase {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </IconBase>
);
const Globe = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </IconBase>
);

const Homepage = () => {
  const { t } = useTranslation();
  const [_hoveredCard, setHoveredCard] = useState(null);

  const openGitHubIssue = () => {
    window.open(
      'https://github.com/Gautierpicon/GeoTrainr/issues/new',
      '_blank'
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gray-50 font-sans text-gray-900 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-slate-200">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-position-[24px_24px]"></div>
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 opacity-50 blur-[120px] dark:bg-blue-600/20"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 pt-10 pb-20 sm:pt-20 sm:pb-32">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-8 sm:text-left">
            <img
              src={logo}
              alt="GeoTrainr Logo"
              className="h-24 w-24 shrink-0 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                {t('homepage.title')}{' '}
                <span className="bg-linear-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
                  {t('homepage.titleHighlight')}
                </span>
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg dark:text-slate-400">
                {t('homepage.description')}{' '}
                <a
                  href="https://www.geoguessr.com/"
                  target="_blank"
                  className="font-medium text-gray-900 underline decoration-blue-600 decoration-2 underline-offset-4 dark:text-white dark:decoration-blue-500/30"
                >
                  GeoGuessr
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
            <Link
              to="/flagsquiz"
              onMouseEnter={() => setHoveredCard('flags')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-500/50 dark:hover:shadow-blue-900/20"
            >
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 transform p-8 opacity-5 transition-opacity duration-500 group-hover:opacity-10 dark:opacity-10 dark:group-hover:opacity-20">
                <Flag size={120} />
              </div>
              <div className="relative z-10 flex h-full flex-col items-start text-left">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-100 transition-colors group-hover:bg-blue-200 dark:border-blue-500/20 dark:bg-blue-500/10 dark:group-hover:bg-blue-500/20">
                  <Flag
                    className="text-blue-600 dark:text-blue-400"
                    size={28}
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {t('homepage.flags.title')}
                </h3>
                <p className="mb-8 grow text-gray-600 dark:text-slate-400">
                  {t('homepage.flags.description')}
                </p>
                <div className="flex items-center gap-2 font-semibold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400">
                  {t('homepage.flags.start')} <ArrowRight size={18} />
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-600/10`}
              ></div>
            </Link>

            <Link
              to="/scriptsquiz"
              onMouseEnter={() => setHoveredCard('scripts')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-emerald-500/50 dark:hover:shadow-emerald-900/20"
            >
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 transform p-8 opacity-5 transition-opacity duration-500 group-hover:opacity-10 dark:opacity-10 dark:group-hover:opacity-20">
                <Languages size={120} />
              </div>
              <div className="relative z-10 flex h-full flex-col items-start text-left">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-100 transition-colors group-hover:bg-emerald-200 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20">
                  <Languages
                    className="text-emerald-600 dark:text-emerald-400"
                    size={28}
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {t('homepage.scripts.title')}
                </h3>
                <p className="mb-8 grow text-gray-600 dark:text-slate-400">
                  {t('homepage.scripts.description')}
                </p>
                <div className="flex items-center gap-2 font-semibold text-emerald-600 transition-transform group-hover:translate-x-2 dark:text-emerald-400">
                  {t('homepage.scripts.start')} <ArrowRight size={18} />
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-emerald-600/10`}
              ></div>
            </Link>
          </div>
        </div>

        <div className="mt-32 border-t border-gray-200 pt-20 dark:border-slate-800/50">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {t('homepage.howItWorks.title')}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Map,
                title: t('homepage.howItWorks.steps.choose.title'),
                desc: t('homepage.howItWorks.steps.choose.desc'),
                color: 'text-blue-600 dark:text-blue-400',
              },
              {
                icon: Globe,
                title: t('homepage.howItWorks.steps.play.title'),
                desc: t('homepage.howItWorks.steps.play.desc'),
                color: 'text-purple-600 dark:text-purple-400',
              },
              {
                icon: AlertCircle,
                title: t('homepage.howItWorks.steps.progress.title'),
                desc: t('homepage.howItWorks.steps.progress.desc'),
                color: 'text-pink-600 dark:text-pink-400',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-slate-800/50 dark:bg-slate-900/30"
              >
                <step.icon className={`mb-4 h-10 w-10 ${step.color}`} />
                <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-gray-200 bg-gray-100/50 pt-16 pb-8 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={logo} alt="GeoTrainr Logo" className="h-7 w-7" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  GeoTrainr
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                {t('footer.description')}
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Gautierpicon/GeoTrainr/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-gray-300 bg-gray-200 p-2 transition-colors hover:bg-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  <Github className="h-5 w-5 text-gray-600 group-hover:text-gray-900 dark:text-slate-400 dark:group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com/vu_zip"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-gray-300 bg-gray-200 p-2 transition-colors hover:bg-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  <Twitter className="h-5 w-5 text-gray-600 group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-400" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-gray-900 dark:text-white">
                {t('footer.resources')}
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-400">
                <li>
                  <a
                    href="https://www.geoguessr.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={14} /> GeoGuessr
                  </a>
                </li>
                <li>
                  <a
                    href="https://flagpedia.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={14} /> Flagpedia.net
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-gray-900 dark:text-white">
                {t('footer.contribution')}
              </h4>
              <p className="mb-4 text-sm text-gray-600 dark:text-slate-400">
                {t('footer.contributionDesc')}
              </p>
              <button
                onClick={openGitHubIssue}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 transition-all hover:bg-emerald-200 dark:border-emerald-600/20 dark:bg-emerald-600/10 dark:text-emerald-400 dark:hover:bg-emerald-600/20"
              >
                <MessageCircle size={16} /> {t('footer.reportIssue')}
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-gray-500 md:flex-row dark:border-slate-800 dark:text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} GeoTrainr.{' '}
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
