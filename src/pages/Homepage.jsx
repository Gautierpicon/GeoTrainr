import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const IconBase = ({ size = 24, className, children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{children}</svg>
);

const Flag = (props) => <IconBase {...props}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></IconBase>;
const Languages = (props) => <IconBase {...props}><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></IconBase>;
const Map = (props) => <IconBase {...props}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" x2="8" y1="2" y2="18"/><line x1="16" x2="16" y1="6" y2="22"/></IconBase>;
const ArrowRight = (props) => <IconBase {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></IconBase>;
const Github = (props) => <IconBase {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></IconBase>;
const Twitter = (props) => <IconBase {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></IconBase>;
const MessageCircle = (props) => <IconBase {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></IconBase>;
const AlertCircle = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></IconBase>;
const ExternalLink = (props) => <IconBase {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></IconBase>;
const Globe = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></IconBase>;
const Bluesky = (props) => <IconBase {...props}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 530" stroke="currentColor" stroke-width="40" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/></svg></IconBase>;

const Homepage = () => {
  const [_hoveredCard, setHoveredCard] = useState(null);

  const openGitHubIssue = () => {
    window.open('https://github.com/Gautierpicon/GeoTrainr/issues/new', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-slate-200 selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden relative">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-position-[24px_24px]"></div>
        {/* Central glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 dark:bg-blue-600/20 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-10 pb-20 sm:pt-20 sm:pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Maîtrisez la <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-600 to-blue-800 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">Géographie</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Perfectionnez votre reconnaissance visuelle. 
            Identifiez drapeaux et alphabets pour devenir imbattable sur <a href="https://www.geoguessr.com/" target="_blank" className="text-gray-900 dark:text-white font-medium decoration-blue-600 dark:decoration-blue-500/30 underline decoration-2 underline-offset-4">GeoGuessr</a>.
          </p>

          {/* Game Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 max-w-5xl mx-auto">
            
            {/* Flags Card */}
            <Link 
              to="/flagsquiz"
              onMouseEnter={() => setHoveredCard('flags')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 -translate-y-4">
                <Flag size={120} />
              </div>
              <div className="relative z-10 flex flex-col h-full items-start text-left">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors border border-blue-200 dark:border-blue-500/20">
                  <Flag className="text-blue-600 dark:text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Drapeaux</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-8 grow">
                  Testez vos connaissances sur 254 drapeaux nationaux, l'UE, l'ONU et les 50 états américains.
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Commencer <ArrowRight size={18} />
                </div>
              </div>
              {/* Background Gradient Animation */}
              <div className={`absolute inset-0 bg-linear-to-br from-blue-500/10 dark:from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </Link>

            {/* Scripts Card */}
            <Link 
              to="/scriptsquiz"
              onMouseEnter={() => setHoveredCard('scripts')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-900/20 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 -translate-y-4">
                <Languages size={120} />
              </div>
              <div className="relative z-10 flex flex-col h-full items-start text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20 transition-colors border border-emerald-200 dark:border-emerald-500/20">
                  <Languages className="text-emerald-600 dark:text-emerald-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Systèmes d'Écriture</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-8 grow">
                  Distinguez le Cyrillique du Grec, l'Arabe du Persan. Maîtrisez les alphabets du monde.
                </p>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Commencer <ArrowRight size={18} />
                </div>
              </div>
              <div className={`absolute inset-0 bg-linear-to-br from-emerald-500/10 dark:from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </Link>

          </div>
        </div>

        {/* How it Works - Minimalist Steps */}
        <div className="mt-32 border-t border-gray-200 dark:border-slate-800/50 pt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Comment ça marche ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Map, title: "Choisissez", desc: "Drapeaux ou Alphabets", color: "text-blue-600 dark:text-blue-400" },
                    { icon: Globe, title: "Jouez", desc: "Identifiez l'élément correct", color: "text-purple-600 dark:text-purple-400" },
                    { icon: AlertCircle, title: "Progressez", desc: "Mode chrono pour le défi", color: "text-pink-600 dark:text-pink-400" }
                ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-900/30 border border-gray-200 dark:border-slate-800/50">
                        <step.icon className={`w-10 h-10 mb-4 ${step.color}`} />
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                        <p className="text-gray-600 dark:text-slate-400">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </main>

      {/* Modern Footer */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-slate-800 bg-gray-100/50 dark:bg-slate-950/50 backdrop-blur-md pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={logo} alt="GeoTrainr Logo" className="w-7 h-7" />
                <span className="font-bold text-lg text-gray-900 dark:text-white">GeoTrainr</span>
              </div>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                L'outil d'entraînement ultime pour les passionnés de géographie et les joueurs compétitifs.
              </p>
              <div className="flex gap-4 pt-2">
                 <a href="https://github.com/Gautierpicon/GeoTrainr/" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors border border-gray-300 dark:border-slate-700 group">
                    <Github className="w-5 h-5 text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white" /> 
                 </a>
                 <a href="https://twitter.com/vu_zip" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors border border-gray-300 dark:border-slate-700 group">
                    <Twitter className="w-5 h-5 text-gray-600 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400" /> 
                 </a>
                 <a href="https://bsky.app/profile/vu-zip.bsky.social" target="_blank" rel="noreferrer" className="bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors border border-gray-300 dark:border-slate-700 group">
                    <Bluesky className="w-5 h-5 text-gray-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" /> 
                 </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6">Ressources</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-400">
                <li>
                  <a href="https://www.geoguessr.com/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ExternalLink size={14} /> GeoGuessr
                  </a>
                </li>
                <li>
                  <a href="https://flagpedia.net/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                    <ExternalLink size={14} /> Flagpedia.net
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-6">Contribution</h4>
                <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">Un bug ? Une suggestion ? Le projet est open-source.</p>
                <button 
                    onClick={openGitHubIssue}
                    className="cursor-pointer flex items-center gap-2 bg-emerald-100 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-600/20 px-4 py-2 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-600/20 transition-all text-sm font-medium"
                >
                    <MessageCircle size={16} /> Signaler un problème
                </button>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-slate-500">
            <p>&copy; {new Date().getFullYear()} GeoTrainr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;