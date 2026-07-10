// import './App.css'; // Make sure to import your CSS file

const NotFound = () => {
  return (
    <div className="font-body bg-zinc-900 text-gray-200 min-h-screen flex flex-col justify-between relative overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[0.45] contrast-[1.10]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      
      {/* Smoke Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6 md:px-12 flex justify-start items-center">
        <div className="font-logo italic text-3xl md:text-4xl tracking-tighter font-black text-white flex flex-col leading-none">
          <span className="text-orange-500 transform -skew-x-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">NITRO</span>
          <span className="text-gray-100 transform -skew-x-12 tracking-wide mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">THRUST</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 md:px-6 max-w-4xl mx-auto -mt-12">
        
        <h1 className="font-display font-black text-8xl sm:text-9xl md:text-[13rem] italic tracking-tight uppercase leading-none grunge-text drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] select-none">
          404
        </h1>

        <h2 className="font-display font-bold italic text-2xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase mt-4 mb-2 drop-shadow-md">
          Wrong Turn! Race Aborted.
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl font-light leading-relaxed drop-shadow">
          Look's like you've spun off the track!<br className="hidden sm:inline" /> 
          The page you're searching for has been left in the dust.
        </p>

        {/* Buttons */}
        <div className="w-full max-w-md mt-8 space-y-3 px-4">
          <a href="/" className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-display font-bold italic uppercase tracking-wider py-3.5 px-6 rounded-md border border-orange-400/40 shadow-[0_4px_15px_rgba(234,88,12,0.4)] transition-all duration-200 transform hover:-translate-y-0.5">
            <svg className="w-5 h-5 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24">
              <path d="M12.37 3.37a1 1 0 0 0-1.42 0L3.37 10.95a1 1 0 0 0 0 1.42l7.58 7.58a1 1 0 0 0 1.42 0l7.58-7.58a1 1 0 0 0 0-1.42l-7.58-7.58zm-1.06 3.54v3.54H7.77l3.54-3.54zm4.95 4.95h-3.54V8.32l3.54 3.54zm-4.95 1.41v3.54l-3.54-3.54h3.54zm1.41 0h3.54l-3.54 3.54v-3.54z"/>
            </svg>
             Home<span className="font-body text-xs font-normal not-italic text-orange-100 ml-1 opacity-80"></span>
          </a>

          <button onClick={() => window.history.back()} className="flex items-center justify-center w-full bg-gradient-to-r from-blue-900/90 to-indigo-950/90 hover:from-blue-850 hover:to-indigo-900 text-sky-200 font-display font-bold italic uppercase tracking-wider py-3.5 px-6 rounded-md border border-sky-500/30 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-200 transform hover:-translate-y-0.5">
            Previous Page <span className="font-body text-xs font-normal not-italic text-sky-300/70 ml-1"></span>
          </button>
        </div>

        {/* Search Bar */}
        

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 font-mono gap-2 bg-gradient-to-t from-black/50 to-transparent">
        <div>SYSTEM STATUS: COOLDOWN MODE</div>
        <div>&copy; 2026 NITRO THRUST. ALL RIGHTS RESERVED.</div>
      </footer>

    </div>
  );
};

export default NotFound;