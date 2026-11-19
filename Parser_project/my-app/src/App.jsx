import { BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import HowToUse from "../components/Htu"
import Toolbar from "../components/toolbar"
import Footer from "../components/footer"

import { useState } from "react"

export default function App() {
  const [dark,set_dark]=useState(false)
  const [marktext,setMarktext]=useState("")
  const [fullscreen,setFullScreen]=useState(false)
  const [textinput,setTextInput]=useState('') 
 
    function handleDownload(){
            console.log('downlaod button clicked')
        if(!textinput) return;
        const blob = new Blob([textinput],{type:'text/markdown'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download =    'untitled.md';
        a.click();
        URL.revokeObjectURL(url);
  }
  
  
  return (
    <BrowserRouter>
            <Navbar dark={dark} set_dark={set_dark} />
             <main className={`pt-11
                 ${dark &&('bg-[#161b22]')}`}> {/* Navbar ke peeche content chupne se bachane ke liye */}
                <Routes>
                    <Route path="/" element={<>
                    <Toolbar marktext={marktext} setMarktext={setMarktext} fullscreen={fullscreen} setFullScreen={setFullScreen} onDownload={handleDownload}/>  
                    <Hero dark={dark} textinput={textinput} setTextInput={setTextInput} marktext={marktext} fullscreen={fullscreen}/>    
                    </>
                } />
                    <Route path="/about" element={<About  dark={dark}/>} />
                    <Route path="/how-to-use" element={<HowToUse dark={dark}/>} />
                </Routes>
                 <Footer/> 
             </main>
            
        </BrowserRouter>
  )}

