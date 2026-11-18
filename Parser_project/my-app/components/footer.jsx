function Footer() {
  return (
    <footer className="relative w-full border-t border-[#30363d] bg-[#0d1117] pt-12 pb-8 mt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Brand & Status */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-xl font-bold text-[#f0f6fc] tracking-tight">MD Parser</h2>
            <div className="flex items-center gap-2 text-sm text-[#8b949e]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              All systems on Client-Side. No data leaves your browser.
            </div>
            
            
          </div>

          {/* Right: Links */}
          <div className="flex gap-6 text-sm font-medium text-[#8b949e]">
            <a href="#" className="hover:text-[#8A2BE2] transition-colors duration-300 hover:-translate-y-0.5 transform">GitHub</a>
            <a href="#" className="hover:text-[#8A2BE2] transition-colors duration-300 hover:-translate-y-0.5 transform">LinkedIn</a>
            <a href="#" className="hover:text-[#8A2BE2] transition-colors duration-300 hover:-translate-y-0.5 transform">Portfolio</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#21262d] text-center text-xs text-[#8b949e]">
          © {new Date().getFullYear()} Built with React. No servers, no tracking, just code.
        </div>
      </div>
    </footer>
  );
}
export default Footer;