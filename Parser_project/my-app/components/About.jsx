import { FaLightbulb } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import {FiCode} from "react-icons/fi";
import { FiTerminal } from "react-icons/fi";
function About({ dark }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
          dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'
        }`}>
          The Story Behind
        </h1>
        <p className={`text-xl transition-colors duration-300 ${
          dark ? 'text-[#8b949e]' : 'text-[#656d76]'
        }`}>
          Why I built a tool that already exists a million times over.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Big Card 1 */}
        <div className={`md:col-span-2 border p-8 rounded-2xl transition-all duration-300 group ${
          dark 
            ? 'bg-[#161b22] border-[#30363d] hover:border-[#8A2BE2]' 
            : 'bg-[#f6f8fa] border-[#d0d7de] hover:border-[#8A2BE2]'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${
            dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'
          }`}>
            <span className={`p-2 rounded-lg group-hover:scale-110 transition-transform ${
              dark ? 'bg-[#8A2BE2]/10 text-[#8A2BE2]' : 'bg-[#8A2BE2]/10 text-[#8A2BE2]'
            }`}> 
                            <FaLightbulb className="w-6 h-6" />
                        </span>
            The Problem
          </h2>
          <p className={`text-lg leading-relaxed ${
            dark ? 'text-[#8b949e]' : 'text-[#656d76]'
          }`}>
            As a developer and AI Eng student constantly learning AI/ML and other tech related things, I write and make a lot of notes and documentations. My workflow was exhausting: write Markdown in a basic text editor or vscode, 
            push to GitHub, and open the browser just to see if my headings, tables, and code blocks actually looked good and correct. My notes looked clean and understandable
          </p>
          <p className={`text-lg leading-relaxed mt-4 ${
            dark ? 'text-[#8b949e]' : 'text-[#656d76]'
          }`}>
            I was tired of switching tabs. I wanted to see the <strong className={dark ? 'text-[#c9d1d9]' : 'text-[#1f2328]'}>visual representation</strong> of my code while writing it, without relying on external servers.
          </p>
          
        </div>

        {/* Side Card 1 */}
        <div className={`border p-8 rounded-2xl transition-all duration-300 flex flex-col justify-center items-center text-center ${
          dark 
            ? 'bg-[#161b22] border-[#30363d] hover:border-[#8A2BE2]' 
            : 'bg-white border-[#d0d7de] hover:border-[#8A2BE2] shadow-sm'
        }`}>
          <div className="text-5xl mb-4"><div className="bg-[#aa3bff]/10 p-4 rounded-xl text-[#aa3bff] mb-4 group-hover:scale-110 transition-transform">
                        <FiLock className="w-8 h-8" />
                    </div></div>
          <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>Zero Backend</h3>
          <p className={`text-sm ${dark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>Your files never leave your machine. FileReader and Blob APIs handle everything locally in your browser.</p>
          <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>Future Integration</h3>
             <p className={`text-sm leading-relaxed ${dark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>
                        Planning to integrate an autonomous <strong className="text-[#8A2BE2]">AI Agent</strong> directly into this parser to summarize notes, explain complex code blocks, and auto-generate documentation.
                    </p>
        </div>

        {/* Side Card 2 */}
        <div className={`border p-8 rounded-2xl transition-all duration-300 ${
          dark 
            ? 'bg-[#161b22] border-[#30363d] hover:border-[#8A2BE2]' 
            : 'bg-white border-[#d0d7de] hover:border-[#8A2BE2] shadow-sm'
        }`}>
          <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>
            <span className={dark ? 'text-[#8A2BE2]' : 'text-[#8A2BE2]'}><FiCode className="w-5 h-5" /></span> My Focus
          </h3>
          <p className={`text-sm ${dark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>I didn't focus on flashy UI initially. My goal was 100% functionality, logic, and understanding how Markdown parsing actually works under the hood.</p>
        </div>
       

        {/* Big Card 2 (Quote) */}
        <div className={`md:col-span-2 border p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden group ${
          dark ? 'bg-[#161b22] border-[#30363d] hover:border-[#8A2BE2]' : 'bg-white border-[#d0d7de] hover:border-[#8A2BE2] shadow-sm'
        }`}>
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            dark ? 'bg-gradient-to-r from-[#8A2BE2]/10 to-transparent' : 'bg-gradient-to-r from-[#8A2BE2]/10 to-transparent'
          }`}></div>
          <div className="text-[#8A2BE2] mb-3">
                        <FiTerminal className="w-7 h-7" />
                    </div>
          <blockquote className={`relative z-10 text-2xl font-medium italic ${dark ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>
            "When you need a tool, build it yourself. You'll learn more than just writing code."
          </blockquote>
          <p className={`relative z-10 mt-4 ${dark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>— The Developer-Umar Khan</p>
        </div>

      </div>
    </div>
  );
}
export default About;