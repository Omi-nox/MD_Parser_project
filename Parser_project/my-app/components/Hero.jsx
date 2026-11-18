import {marked} from 'marked';
import DOMPurify from 'dompurify';
import { useState,useRef,useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-markdown';

import 'prismjs/themes/prism-okaidia.css';

// import 'prismjs/themes/prism-tomorrow.css';
import 'github-markdown-css/github-markdown.css';
import {markedHighlight} from 'marked-highlight';

marked.use(markedHighlight({
    emptyLangClass: 'language-plaintext',
    langPrefix: 'language-',
    highlight(code, lang) {
        const language = Prism.languages[lang] ? lang : 'plaintext';
        return Prism.highlight(code, Prism.languages[language], language);
    }
}));
function Hero({dark,textinput,setTextInput,marktext,fullscreen}){
   
    
    const previewRef = useRef(null);

    function handlechange(e){
        const user_text=e.target.value;
       
        setTextInput(user_text);
      
        
      
    
       
    }
    useEffect(()=>{
        if(marktext.length>0){
            setTextInput(marktext);
           
        }
    },[marktext])
    
  
    useEffect(()=>{
        if(previewRef.current){
            previewRef.current.querySelectorAll('pre code').forEach(block => {
                Prism.highlightElement(block);
            });
        }
    }, [textinput])
      
     const markdown=marked.parse(textinput);
     const clean=DOMPurify.sanitize(markdown);
    return(
       <section className={`min-h-screen flex sm:pt-5 p-2`}>
        <div className={`max-w-6xl   sm:mx-auto grid grid-cols-1  gap-5 ${fullscreen?('2xl:grid-cols-1'):('md:grid-cols-2 ')}    md:gap-10 w-full   mb-10`}>
            <div className="border-1 border-[#2d3748] rounded-lg bg-[#b5c6e0]/10  h-[650px]   w-full ">
               <textarea name="text" id="text" placeholder="type your markdown code here" className="w-full h-full bg-[#111827] 
               border border-[#1f2937] text-[#f1f5f9] px-2 py-1 rounded-lg focus:outline-none focus:border-[#6366f1]
               transition-colors placeholder:text-[#FFD700]  placeholder:text-opacity-100 resize-none font-mono '" value={textinput} onChange={handlechange} ></textarea>
               
                
            </div>
            <div className={`border-1  border-[#2d3748] ${dark?('bg-[#1a202c]'):('bg-[#f6f8fa]')} 
            rounded-lg  h-[650px]  w-full  overflow-auto p-2 ${dark?('text-[#f1f5f9]'):('text-[#111827]')}  `}>
                 <div  ref={previewRef}     className={`markdown-body ${dark ? 'dark-preview' : ''} p-2`} dangerouslySetInnerHTML={{ __html: clean }} />
              
            </div>
        </div>
 
       </section>
    )
}
export default Hero;