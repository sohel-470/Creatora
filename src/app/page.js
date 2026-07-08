import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center w-full max-w-6xl px-12 gap-16">
      
      {/* Left Column: Text & Call to Actions */}
      <div className="flex flex-col gap-6 w-1/2 items-start text-left">
        <h1 className="font-extrabold text-6xl text-slate-900 leading-tight tracking-tight">
          Buy me a coffee
        </h1>
        <p className="text-xl text-slate-700 max-w-lg leading-relaxed">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex gap-5 mt-4">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-base px-8 py-3.5 text-center transition-all shadow-xl shadow-purple-500/30 cursor-pointer">
            Buy me a coffee
          </button>

          <button type="button" className="text-slate-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-xl text-base px-8 py-3.5 text-center transition-all shadow-xl shadow-lime-200/40 cursor-pointer">
            Know more
          </button>
        </div>
      </div>

      {/* Right Column: Hero Illustration */}
      <div className="w-1/2 flex justify-end items-center relative">
         {/* Behind-the-cup glow effect */}
         <div className="absolute bg-pink-300/40 blur-3xl rounded-full w-[26rem] h-[26rem] -z-10"></div>
         
         {/* Clean SVG Coffee Cup Illustration */}
         <svg 
           viewBox="0 0 200 200" 
           fill="none" 
           xmlns="http://www.w3.org/2000/svg" 
           className="w-[30rem] h-[30rem] drop-shadow-2xl animate-float"
         >
            {/* Saucer */}
            <ellipse cx="100" cy="160" rx="70" ry="15" fill="#e2e8f0" />
            <ellipse cx="100" cy="158" rx="60" ry="12" fill="#cbd5e1" />
            
            {/* Cup Body */}
            <path d="M45 70 C45 150, 60 150, 100 150 C140 150, 155 150, 155 70 Z" fill="#ffffff" />
            <path d="M45 70 C45 150, 60 150, 100 150 C140 150, 155 150, 155 70 Z" fill="url(#cupGradient)" opacity="0.6"/>
            
            {/* Cup Lip and Coffee */}
            <ellipse cx="100" cy="70" rx="55" ry="15" fill="#f8fafc" />
            <ellipse cx="100" cy="70" rx="50" ry="12" fill="#e2e8f0" />
            <ellipse cx="100" cy="72" rx="45" ry="9" fill="#94a3b8" /> 
            
            {/* Handle */}
            <path d="M150 90 C180 90, 180 130, 145 130" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" fill="none" />
            
            {/* Animated Steam - Now with rising CSS animation */}
            <g>
              <path d="M85 45 Q75 30 85 15" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" className="animate-steam opacity-0" />
              <path d="M100 50 Q115 25 95 5" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none" className="animate-steam-delay-1 opacity-0" />
              <path d="M115 45 Q125 30 110 15" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-steam-delay-2 opacity-0" />
            </g>
            
            <defs>
              <linearGradient id="cupGradient" x1="45" y1="70" x2="155" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0"/>
                <stop offset="1" stopColor="#94a3b8"/>
              </linearGradient>
            </defs>
         </svg>
      </div>

    </div>
  );
}