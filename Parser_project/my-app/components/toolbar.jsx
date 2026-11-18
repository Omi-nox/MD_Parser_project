import {FaRegWindowMaximize , FaRegWindowMinimize} from "react-icons/fa"
import {FiUpload , FiDownload} from "react-icons/fi"

function Toolbar({ onUpload, onDownload , fullscreen ,setFullScreen,marktext ,setMarktext}) {
   function onUpload(e){
    const file=e.target.files[0];
    if(!file) return;
    const read=new FileReader();
    read.onload=(e)=>{
        const text=e.target.result;
        // console.log("fuckyou",text)

        setMarktext(text);
        e.target.value = '';
    };
    read.readAsText(file);
    }
    return (
        <div className="flex gap-3 p-3  bg-[#161b22]">
            <label className="px-3 py-2 flex gap-2 items-center bg-[#1f2937] hover:bg-[#374151] text-[#f1f5f9] border border-[#374151] rounded-md shadow transition-colors cursor-pointer ">
                 <span >Upload</span>
                <FiUpload/>
                <input type="file" accept=".md" onChange={onUpload} className="hidden" />
            </label>
           <span className="px-3 py-2 flex gap-2 items-center bg-[#1f2937] hover:bg-[#374151] text-[#f1f5f9] border border-[#374151] rounded-md shadow transition-colors cursor-pointer ">
             <button onClick={onDownload}>
             <span>Download</span>   
             </button>
               <FiDownload/>


           </span>
           <span className="px-3 py-2 md:flex hidden  gap-2 items-center bg-[#1f2937] hover:bg-[#374151] text-[#f1f5f9] border border-[#374151] rounded-md shadow transition-colors cursor-pointer ">
             <button onClick={()=>setFullScreen(!fullscreen)}>
               <span>{fullscreen ? "Minimize" : "Maximize"}</span>
             </button>
               <FaRegWindowMaximize/>

           </span>

            
        </div>
    );
}

export default Toolbar;