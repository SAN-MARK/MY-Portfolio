import React, { useState } from 'react';

interface VVIAppScreenProps {
  screenIndex: number;
  onSelectScreen?: (index: number) => void;
  figmaUrl?: string;
}

export const VVIAppScreen: React.FC<VVIAppScreenProps> = ({
  screenIndex,
  onSelectScreen,
  figmaUrl = 'https://www.figma.com/proto/Rs6ctoMQsLBJvjQPXk4Unp?node-id=0-1&t=cPjENYqQ66Twwfnb-6',
}) => {
  const [username, setUsername] = useState('Ruturaj');
  const [password, setPassword] = useState('••••••••');
  const [fullName, setFullName] = useState('Ruturaj');
  const [rollNumber, setRollNumber] = useState('VVI2024105');
  const [department, setDepartment] = useState('Computer Applications');
  const [teamName, setTeamName] = useState('');
  const [registered, setRegistered] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      {/* iPhone Device Frame */}
      <div className="w-[280px] sm:w-[320px] h-[560px] sm:h-[600px] bg-[#111] rounded-[42px] border-[10px] border-[#222] shadow-[0_0_40px_rgba(250,204,21,0.25)] flex flex-col overflow-hidden relative select-none font-sans">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b]/80 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#00fbfb]" />
          </div>
        </div>

        {/* SCREEN 01: VVI LOGIN */}
        {screenIndex === 0 && (
          <div className="w-full h-full bg-white text-black flex flex-col items-center pt-10 px-6 pb-6 relative overflow-y-auto">
            
            {/* Top Yellow Geometric Background Vectors */}
            <div className="absolute top-0 left-0 w-28 h-48 bg-[#facc15] [clip-path:polygon(0_0,100%_0,0_100%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-28 h-48 bg-[#facc15] [clip-path:polygon(0_0,100%_0,100%_100%)] pointer-events-none" />

            {/* VVI Circular Header Logo */}
            <div className="relative z-10 flex flex-col items-center mt-2">
              <div className="w-20 h-20 rounded-full border-2 border-black flex flex-col items-center justify-center p-1 text-center shadow-sm bg-white/90">
                <span className="text-[7px] font-bold uppercase tracking-tighter leading-tight text-black text-center">
                  VFX VECTOR INSTITUTION
                </span>
                <span className="text-xl font-serif font-black text-[#b48608] my-0.5 tracking-wide">
                  VVI
                </span>
                <div className="w-8 h-[1px] bg-black" />
              </div>
            </div>

            {/* Login Title */}
            <div className="mt-8 text-center z-10">
              <h3 className="text-base font-serif font-black uppercase tracking-wider text-black">
                LOGIN
              </h3>
              <div className="w-20 h-1 bg-[#facc15] mx-auto mt-1 rounded-full" />
            </div>

            {/* Form Inputs */}
            <div className="w-full mt-6 space-y-4 z-10 text-left">
              <div className="border-b border-black/60 pb-1 flex items-center justify-between">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full bg-transparent text-xs font-serif text-black outline-none placeholder-gray-500"
                />
                <span className="material-symbols-outlined text-sm text-black">person</span>
              </div>

              <div>
                <div className="border-b border-black/60 pb-1 flex items-center justify-between">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full bg-transparent text-xs font-serif text-black outline-none placeholder-gray-500"
                  />
                  <span className="material-symbols-outlined text-sm text-black">lock</span>
                </div>
                <div className="text-[9px] font-serif text-gray-600 mt-1 cursor-pointer hover:underline">
                  Forgot Password?
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={() => onSelectScreen && onSelectScreen(1)}
                className="w-full py-2 mt-4 rounded-full bg-[#facc15] text-black font-serif font-bold text-xs shadow-md hover:bg-[#eab308] active:scale-95 transition-all text-center"
              >
                Login
              </button>

              {/* Or Divider */}
              <div className="text-center text-[10px] font-serif text-gray-500 my-2">Or</div>

              {/* Social Login Options */}
              <div className="flex items-center justify-center gap-4 pt-1">
                {/* Google */}
                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center p-1 bg-white shadow-xs">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.23v3.15C3.21 21.32 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.23C.44 8.15 0 9.99 0 12s.44 3.85 1.23 5.42l4.05-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.21 2.68 1.23 6.58l4.05 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className="w-6 h-6 rounded-full bg-[#0a66c2] text-white font-bold text-[10px] flex items-center justify-center font-sans">
                  in
                </div>
                {/* Microsoft */}
                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center p-1 bg-white">
                  <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                    <div className="bg-[#f25022]" />
                    <div className="bg-[#7fba00]" />
                    <div className="bg-[#00a4ef]" />
                    <div className="bg-[#ffb900]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 02: UPCOMING EVENTS */}
        {screenIndex === 1 && (
          <div className="w-full h-full bg-[#3a3a3a] text-white flex flex-col pt-8 relative overflow-hidden">
            {/* Header */}
            <div className="bg-[#facc15] px-4 py-3 text-black flex items-center gap-2 shadow-md">
              <button
                onClick={() => onSelectScreen && onSelectScreen(0)}
                className="text-black hover:opacity-75"
              >
                <span className="material-symbols-outlined text-lg block">arrow_back</span>
              </button>
              <h3 className="font-sans font-black text-base tracking-tight">
                Upcoming Events
              </h3>
            </div>

            {/* Event List */}
            <div className="p-3 space-y-3 overflow-y-auto flex-1">
              
              {/* Event 1 */}
              <div className="bg-[#262626] rounded-2xl p-3 border border-[#444] shadow-md relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-gray-200">Sports Day</h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                      <span className="material-symbols-outlined text-[11px] text-gray-300">location_on</span>
                      <span>College Ground</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5">
                      <span className="material-symbols-outlined text-[11px] text-red-500">schedule</span>
                      <span>9:00 AM</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#facc15] text-black font-mono font-bold text-[9px]">
                    Jun 15
                  </span>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => onSelectScreen && onSelectScreen(2)}
                    className="px-3 py-1 rounded-full bg-[#22c55e] text-black font-sans font-bold text-[10px] shadow-sm hover:bg-[#16a34a] active:scale-95 transition-all"
                  >
                    Pre-Register
                  </button>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-[#262626] rounded-2xl p-3 border border-[#444] shadow-md relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-gray-200">Brain Code Hackathon</h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                      <span className="material-symbols-outlined text-[11px] text-gray-300">location_on</span>
                      <span>Seminar Hall</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5">
                      <span className="material-symbols-outlined text-[11px] text-red-500">schedule</span>
                      <span>10:00 AM</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#facc15] text-black font-mono font-bold text-[9px]">
                    AUG 5
                  </span>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => onSelectScreen && onSelectScreen(2)}
                    className="px-3 py-1 rounded-full bg-[#22c55e] text-black font-sans font-bold text-[10px] shadow-sm hover:bg-[#16a34a] active:scale-95 transition-all"
                  >
                    Pre-Register
                  </button>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-[#262626] rounded-2xl p-3 border border-[#444] shadow-md relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-gray-200">Teachers Day</h4>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                      <span className="material-symbols-outlined text-[11px] text-gray-300">location_on</span>
                      <span>Auditorium</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-0.5">
                      <span className="material-symbols-outlined text-[11px] text-red-500">schedule</span>
                      <span>11:00 AM</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#facc15] text-black font-mono font-bold text-[9px]">
                    Jun 15
                  </span>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => onSelectScreen && onSelectScreen(2)}
                    className="px-3 py-1 rounded-full bg-[#22c55e] text-black font-sans font-bold text-[10px] shadow-sm hover:bg-[#16a34a] active:scale-95 transition-all"
                  >
                    Pre-Register
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SCREEN 03: PRE-REGISTER FORM */}
        {screenIndex === 2 && (
          <div className="w-full h-full bg-[#3a3a3a] text-white flex flex-col pt-8 relative overflow-y-auto">
            {/* Header */}
            <div className="bg-[#facc15] px-4 py-3 text-black flex items-center gap-2 shadow-md">
              <button
                onClick={() => onSelectScreen && onSelectScreen(1)}
                className="text-black hover:opacity-75"
              >
                <span className="material-symbols-outlined text-lg block">arrow_back</span>
              </button>
              <h3 className="font-serif font-black text-base tracking-tight">
                Pre-Register
              </h3>
            </div>

            <div className="p-4 space-y-4 flex-1">
              {/* Event Card Header */}
              <div className="bg-[#262626] rounded-2xl p-3 border border-[#444] space-y-1">
                <h4 className="font-serif text-base font-bold text-white">Sports Day</h4>
                <div className="flex items-center gap-1 text-[10px] text-gray-300 font-serif">
                  <span className="material-symbols-outlined text-[12px] text-red-500">location_on</span>
                  <span>College Ground</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-300 font-serif">
                  <span className="material-symbols-outlined text-[12px] text-gray-400">calendar_month</span>
                  <span>July 15, 2026 • 9:00 AM</span>
                </div>
              </div>

              {/* Form Controls */}
              <div className="space-y-3 font-serif">
                <div>
                  <label className="text-[10px] text-gray-300 block mb-1">Full name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#262626] border border-[#444] text-xs text-white outline-none focus:border-[#facc15]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-gray-300 block mb-1">Roll number</label>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#262626] border border-[#444] text-xs text-white outline-none focus:border-[#facc15]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-gray-300 block mb-1">Department</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#262626] border border-[#444] text-xs text-white outline-none focus:border-[#facc15]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-gray-300 block mb-1">Team name (optional)</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter team name"
                    className="w-full px-3 py-2 rounded-xl bg-[#262626] border border-[#444] text-xs text-white outline-none focus:border-[#facc15] placeholder-gray-500"
                  />
                </div>

                {/* Submit Action */}
                <button
                  onClick={() => setRegistered(true)}
                  className="w-full py-2.5 rounded-2xl bg-[#facc15] text-black font-serif font-bold text-xs shadow-lg hover:bg-[#eab308] active:scale-95 transition-all text-center mt-2"
                >
                  {registered ? '✓ Registration Submitted!' : 'Confirm Registration'}
                </button>

                <p className="text-[9px] text-gray-400 text-center font-serif leading-tight">
                  You will receive a confirmation notification once registered
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
