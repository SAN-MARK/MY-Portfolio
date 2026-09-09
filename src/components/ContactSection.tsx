import React, { useState } from 'react';
import { PROFILE_DATA, SOCIAL_ICONS } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

interface ContactSectionProps {
  onOpenHireModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenHireModal,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [directName, setDirectName] = useState('');
  const [directEmail, setDirectEmail] = useState('');
  const [directMsg, setDirectMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    soundEffects.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playBeep();
    if (!directName || !directEmail || !directMsg) return;

    const formattedMessage = `Hi Sanjeev!\n\nName: ${directName}\nEmail: ${directEmail}\n\nMessage:\n${directMsg}`;
    const whatsappUrl = `https://wa.me/918668045519?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playBeep();
    if (!directName || !directEmail || !directMsg) return;

    const subject = `Portfolio Direct Contact from ${directName}`;
    const body = `Hi Sanjeev,\n\nName: ${directName}\nEmail: ${directEmail}\n\nMessage:\n${directMsg}`;
    const mailtoUrl = `mailto:iamheresanjeev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07070a] overflow-hidden">
      {/* Comic Panel Gutter */}
      <div className="comic-gutter absolute top-0 left-0 right-0" />

      {/* Halftone Pattern Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-15 pointer-events-none" />

      {/* Background Radial Lights */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e21d24]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0f0f18] border-2 border-[#040406] text-xs font-mono text-[#fbbf24] font-bold shadow-[2px_2px_0px_#040406]">
            <span className="w-2 h-2 rounded-full bg-[#e21d24] animate-ping"></span>
            <span>ASSEMBLE // INITIATE DIRECT FREQUENCY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#f3f4f6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            READY TO <span className="crimson-text">ASSEMBLE?</span>
          </h2>

          <p className="text-[#9ca3af] font-sans text-base max-w-2xl mx-auto">
            Available for mission-critical client projects, UI/UX architecture, full-stack development, and high-impact collaboration.
          </p>

          <div className="w-24 h-1.5 bg-[#e21d24] mx-auto rounded-full mt-2 shadow-[0_0_10px_rgba(226,29,36,0.6)]" />
        </div>

        {/* 3 Main Comic Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="comic-card p-6 sm:p-8 rounded-2xl border-3 border-[#040406] space-y-4 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#07070a] border-2 border-[#040406] shadow-[2px_2px_0px_#fbbf24] flex items-center justify-center text-[#fbbf24]">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <span className="font-mono text-xs text-[#9ca3af] font-bold uppercase tracking-wider block">
                DIRECT SECURE COMMS
              </span>
              <h3 className="font-headline font-bold text-lg text-[#f3f4f6] break-all group-hover:text-[#00f0ff] transition-colors">
                {PROFILE_DATA.email}
              </h3>
              <p className="text-xs font-sans text-[#9ca3af]">
                Priority inquiries, mission briefs, & RFPs.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(PROFILE_DATA.email, 'Email')}
              className="w-full py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] hover:border-[#00f0ff] text-xs font-mono font-bold text-[#f3f4f6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#040406] relative z-10"
            >
              <span className="material-symbols-outlined text-sm text-[#fbbf24]">
                {copiedField === 'Email' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedField === 'Email' ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="comic-card p-6 sm:p-8 rounded-2xl border-3 border-[#040406] space-y-4 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#07070a] border-2 border-[#040406] shadow-[2px_2px_0px_#e21d24] flex items-center justify-center text-[#e21d24]">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <span className="font-mono text-xs text-[#9ca3af] font-bold uppercase tracking-wider block">
                SIGNAL HOTLINE
              </span>
              <h3 className="font-headline font-bold text-lg text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors">
                {PROFILE_DATA.phone}
              </h3>
              <p className="text-xs font-sans text-[#9ca3af]">
                Direct voice dispatch & WhatsApp briefing.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(PROFILE_DATA.phone, 'Phone')}
              className="w-full py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] hover:border-[#00f0ff] text-xs font-mono font-bold text-[#f3f4f6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#040406] relative z-10"
            >
              <span className="material-symbols-outlined text-sm text-[#e21d24]">
                {copiedField === 'Phone' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedField === 'Phone' ? 'COPIED TO CLIPBOARD' : 'COPY PHONE'}</span>
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="comic-card p-6 sm:p-8 rounded-2xl border-3 border-[#040406] space-y-4 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#07070a] border-2 border-[#040406] shadow-[2px_2px_0px_#00f0ff] flex items-center justify-center text-[#00f0ff]">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </div>
              <span className="font-mono text-xs text-[#9ca3af] font-bold uppercase tracking-wider block">
                ALLIED ALLIANCE
              </span>
              <h3 className="font-headline font-bold text-lg text-[#f3f4f6] group-hover:text-[#00f0ff] transition-colors">
                4,800+ Strong
              </h3>
              <p className="text-xs font-sans text-[#9ca3af]">
                Professional network & tactical briefings.
              </p>
            </div>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEffects.playClick()}
              className="w-full py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] hover:border-[#00f0ff] text-xs font-mono font-bold text-[#f3f4f6] transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#040406] relative z-10"
            >
              <span>CONNECT ON LINKEDIN</span>
              <span className="material-symbols-outlined text-sm text-[#00f0ff]">open_in_new</span>
            </a>
          </div>

        </div>

        {/* Quick Inline Message Form & Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center comic-card border-4 border-[#040406] p-8 sm:p-10 rounded-2xl relative overflow-hidden">
          
          {/* Left: Quick Form */}
          <div className="lg:col-span-7 space-y-4 relative z-10">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-3xl text-[#f3f4f6]">
                Transmit a Direct Dispatch
              </h3>
              <p className="text-xs font-mono text-[#9ca3af] font-bold">
                Reach Sanjeev directly via WhatsApp (+91 8668045519) or Email (iamheresanjeev@gmail.com).
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#07070a] border-2 border-[#040406] space-y-2 shadow-[3px_3px_0px_#fbbf24]">
                <div className="flex items-center gap-2 text-[#fbbf24]">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span className="font-mono text-sm font-bold">DISPATCH TRANSMITTED!</span>
                </div>
                <p className="text-xs text-[#9ca3af] font-sans">
                  Transmission acknowledged, {directName}! Sanjeev will respond on secure frequency shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#00f0ff] underline pt-2 block font-bold cursor-pointer"
                >
                  Transmit another dispatch
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Codename / Name"
                    value={directName}
                    onChange={(e) => setDirectName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] placeholder-[#9ca3af] focus:outline-none focus:border-[#00f0ff] font-mono"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Secure Email"
                    value={directEmail}
                    onChange={(e) => setDirectEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] placeholder-[#9ca3af] focus:outline-none focus:border-[#00f0ff] font-mono"
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="State your mission parameters, timeline, or inquiries..."
                  value={directMsg}
                  onChange={(e) => setDirectMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] placeholder-[#9ca3af] focus:outline-none focus:border-[#00f0ff] resize-none font-sans"
                />

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn-crimson px-5 py-3 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full sm:w-1/2 shadow-[3px_3px_0px_#040406]"
                  >
                    <span>TRANSMIT VIA WHATSAPP</span>
                    <span className="material-symbols-outlined text-sm">chat</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="px-5 py-3 rounded-xl bg-[#07070a] border-2 border-[#040406] hover:border-[#fbbf24] text-[#f3f4f6] text-xs font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full sm:w-1/2 transition-all shadow-[3px_3px_0px_#040406]"
                  >
                    <span>TRANSMIT VIA EMAIL</span>
                    <span className="material-symbols-outlined text-sm text-[#fbbf24]">mail</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Social Hotlink Icons Bar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 pt-6 lg:pt-0 lg:border-l-2 border-[#040406] relative z-10">
            <span className="font-mono text-xs text-[#9ca3af] font-bold uppercase tracking-widest text-center">
              GLOBAL BROADCAST FREQUENCIES
            </span>

            <div className="flex items-center justify-center gap-4 sm:gap-5 flex-wrap">
              {/* YouTube Hotlink */}
              <a
                href={PROFILE_DATA.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-13 h-13 rounded-2xl bg-[#07070a] border-2 border-[#040406] hover:border-[#e21d24] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#040406] flex items-center justify-center text-[#e21d24] group cursor-pointer"
                title="YouTube: Unknown BCA Guy"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn Hotlink */}
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-13 h-13 rounded-2xl bg-[#07070a] border-2 border-[#040406] hover:border-[#00f0ff] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#040406] flex items-center justify-center group cursor-pointer"
                title="LinkedIn (4,800+ Followers)"
              >
                <img
                  src={SOCIAL_ICONS.linkedin}
                  alt="LinkedIn"
                  className="w-full h-full object-contain filter group-hover:brightness-125"
                  referrerPolicy="no-referrer"
                />
              </a>

              {/* GitHub Hotlink */}
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-13 h-13 rounded-2xl bg-[#07070a] border-2 border-[#040406] hover:border-[#fbbf24] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#040406] flex items-center justify-center group cursor-pointer"
                title="GitHub"
              >
                <img
                  src={SOCIAL_ICONS.github}
                  alt="GitHub"
                  className="w-full h-full object-contain filter group-hover:brightness-125"
                  referrerPolicy="no-referrer"
                />
              </a>

              {/* Figma Hotlink */}
              <a
                href={PROFILE_DATA.figmaUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-13 h-13 rounded-2xl bg-[#07070a] border-2 border-[#040406] hover:border-[#e21d24] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#040406] flex items-center justify-center group cursor-pointer"
                title="Figma"
              >
                <img
                  src={SOCIAL_ICONS.figma}
                  alt="Figma"
                  className="w-full h-full object-contain filter group-hover:brightness-125"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            <button
              onClick={onOpenHireModal}
              className="text-xs font-mono text-[#fbbf24] hover:text-[#00f0ff] flex items-center gap-1 font-bold cursor-pointer transition-colors"
            >
              <span>Schedule Tactical Strategy Call</span>
              <span className="material-symbols-outlined text-sm">calendar_month</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
