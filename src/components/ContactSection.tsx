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

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playBeep();
    if (!directName || !directEmail || !directMsg) return;

    const formattedMessage = `Hi Sanjeev!\n\nName: ${directName}\nEmail: ${directEmail}\n\nMessage:\n${directMsg}`;
    const whatsappUrl = `https://wa.me/918668045519?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Neon Lights */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4d80]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1a1a2e] border border-[#ff4d80]/50 text-xs font-mono text-[#ff4d80]">
            <span className="w-2 h-2 rounded-full bg-[#ff4d80] animate-ping"></span>
            <span>LET'S BUILD SOMETHING AMAZING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-headline font-black text-white tracking-tight uppercase">
            READY TO <span className="neon-pink-text">WORK TOGETHER?</span>
          </h2>

          <p className="text-gray-300 font-sans text-base max-w-2xl mx-auto">
            Available for freelance projects, UI/UX design, full-stack development, and strategic collaboration.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#ff4d80] via-[#abc7ff] to-[#00fbfb] mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Main Glass Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#3a4a49]/60 hover:border-[#ff4d80] transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#ff4d80]/40 flex items-center justify-center text-[#ff4d80]">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                EMAIL INQUIRIES
              </span>
              <h3 className="font-headline font-bold text-lg text-white break-all">
                {PROFILE_DATA.email}
              </h3>
              <p className="text-xs font-sans text-gray-400">
                Inquiries, project RFPs, & feedback.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(PROFILE_DATA.email, 'Email')}
              className="w-full py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] hover:border-[#ff4d80] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">
                {copiedField === 'Email' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedField === 'Email' ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#3a4a49]/60 hover:border-[#00fbfb] transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#00fbfb]/40 flex items-center justify-center text-[#00fbfb]">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                PHONE & WHATSAPP
              </span>
              <h3 className="font-headline font-bold text-lg text-white">
                {PROFILE_DATA.phone}
              </h3>
              <p className="text-xs font-sans text-gray-400">
                Quick chats & strategic consults.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(PROFILE_DATA.phone, 'Phone')}
              className="w-full py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] hover:border-[#00fbfb] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">
                {copiedField === 'Phone' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedField === 'Phone' ? 'COPIED TO CLIPBOARD' : 'COPY PHONE'}</span>
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#3a4a49]/60 hover:border-[#abc7ff] transition-all duration-300 space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#abc7ff]/40 flex items-center justify-center text-[#abc7ff]">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                LINKEDIN NETWORK
              </span>
              <h3 className="font-headline font-bold text-lg text-white">
                3,387+ Followers
              </h3>
              <p className="text-xs font-sans text-gray-400">
                Network & professional updates.
              </p>
            </div>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEffects.playClick()}
              className="w-full py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] hover:border-[#abc7ff] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>CONNECT ON LINKEDIN</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

        </div>

        {/* Quick Inline Message Form & Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1a1a2e]/80 border border-[#3a4a49]/80 p-8 sm:p-10 rounded-2xl backdrop-blur-md">
          
          {/* Left: Quick Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <h3 className="font-headline font-bold text-2xl text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-gray-400">
                Directly connects to Sanjeev's WhatsApp (+91 8668045519) with your message.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#00fbfb]/10 border border-[#00fbfb] space-y-2">
                <div className="flex items-center gap-2 text-[#00fbfb]">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span className="font-mono text-sm font-bold">MESSAGE DISPATCHED!</span>
                </div>
                <p className="text-xs text-gray-300 font-sans">
                  Thank you for reaching out, {directName}! Sanjeev will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#00fbfb] underline pt-2 block"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleDirectSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={directName}
                    onChange={(e) => setDirectName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4d80]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={directEmail}
                    onChange={(e) => setDirectEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4d80]"
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project scope, timeline, or query..."
                  value={directMsg}
                  onChange={(e) => setDirectMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4d80] resize-none"
                />

                <button
                  type="submit"
                  className="btn-gradient px-6 py-3 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shadow-[0_0_15px_rgba(0,251,251,0.3)] hover:shadow-[0_0_20px_rgba(0,251,251,0.5)]"
                >
                  <span>SEND VIA WHATSAPP</span>
                  <span className="material-symbols-outlined text-sm">chat</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Social Hotlink Icons Bar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 pt-6 lg:pt-0 lg:border-l border-[#3a4a49]/60">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest text-center">
              SANJEEV M'S ONLINE PROFILES
            </span>

            <div className="flex items-center justify-center gap-6">
              {/* LinkedIn Hotlink */}
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-[#3a4a49] hover:border-[#00fbfb] p-3 transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
                title="LinkedIn"
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
                className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-[#3a4a49] hover:border-[#ff4d80] p-3 transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
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
                className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-[#3a4a49] hover:border-[#abc7ff] p-3 transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
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
              className="text-xs font-mono text-[#00fbfb] hover:underline flex items-center gap-1"
            >
              <span>Schedule 1-on-1 Strategy Call</span>
              <span className="material-symbols-outlined text-sm">calendar_month</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
