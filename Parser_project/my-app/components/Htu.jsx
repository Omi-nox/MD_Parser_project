function HowToUse({ dark }  ) {
  const steps = [
    { num: "01", title: "Upload or Type", desc: "Drag & drop your existing .md file, or start typing directly into the dark editor." },
    { num: "02", title: "Live Magic", desc: "As you type, the parser instantly converts it to HTML and highlights your code." },
    { num: "03", title: "Download", desc: "Click download to save the file back to your computer. No sign-ups, no limits." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
       <div className="text-center mb-16">
        <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
          dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'
        }`}>How It Works</h1>
        <p className={`transition-colors duration-300 ${
          dark ? 'text-[#8b949e]' : 'text-[#656d76]'
        }`}>Three simple steps. Zero distractions.</p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Connecting Line */}
        <div className={`hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-transparent -translate-y-1/2 z-0 ${
          dark ? 'via-[#8A2BE2]' : 'via-[#8A2BE2]'
        }`}></div>

        {steps.map((step, idx) => (
          <div 
            key={idx}
            className={`relative z-10 border p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 ${
              dark 
                ? 'bg-[#0d1117] border-[#30363d] hover:shadow-[0_10px_30px_rgba(138,43,226,0.15)] hover:border-[#8A2BE2]' 
                : 'bg-white border-[#d0d7de] hover:shadow-[0_10px_30px_rgba(138,43,226,0.15)] hover:border-[#8A2BE2]'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-all duration-300 ${
              dark 
                ? 'bg-[#161b22] border-[#30363d] text-[#8A2BE2] group-hover:bg-[#8A2BE2] group-hover:text-white group-hover:border-[#8A2BE2]' 
                : 'bg-[#f6f8fa] border-[#d0d7de] text-[#8A2BE2] group-hover:bg-[#8A2BE2] group-hover:text-white group-hover:border-[#8A2BE2]'
            } border`}>
              {step.num}
            </div>
            <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>{step.title}</h3>
            <p className={`leading-relaxed text-sm ${dark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="mt-20">
        <h3 className={`text-2xl font-bold text-center mb-8 ${dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>Packed with Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['GitHub Flavored MD', 'Syntax Highlighting', 'XSS Protected', '100% Clent Side'].map((feat, i) => (
             <div key={i} className={`border py-4 px-2 text-center rounded-lg text-sm font-medium transition-colors cursor-default ${
               dark 
                 ? 'bg-[#161b22] border-[#30363d] text-[#c9d1d9] hover:text-[#8A2BE2] hover:border-[#8A2BE2]' 
                 : 'bg-white border-[#d0d7de] text-[#1f2328] hover:text-[#8A2BE2] hover:border-[#8A2BE2]'
             }`}>
               {feat}
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HowToUse;