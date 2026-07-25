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
    <section id="contact" className="py-24 relative bg-[#0d0d0d] overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E31E24]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#161616] border-2 border-[#000000] text-xs font-mono text-[#E31E24] font-bold shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-ping"></span>
            <span>LET'S BUILD SOMETHING AMAZING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#F5F5F0] tracking-wider uppercase">
            READY TO <span className="text-[#E31E24]">WORK TOGETHER?</span>
          </h2>

          <p className="text-[#B8B8B0] font-sans text-base max-w-2xl mx-auto">
            Available for freelance projects, UI/UX design, full-stack development, and strategic collaboration.
          </p>

          <div className="w-24 h-1.5 bg-[#E31E24] mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Main Glass Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="bg-[#161616] p-6 sm:p-8 rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] flex items-center justify-center text-[#E31E24]">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <span className="font-mono text-xs text-[#B8B8B0] font-bold uppercase tracking-wider block">
                EMAIL INQUIRIES
              </span>
              <h3 className="font-headline font-bold text-lg text-[#F5F5F0] break-all">
                {PROFILE_DATA.email}
              </h3>
              <p className="text-xs font-sans text-[#B8B8B0]">
                Inquiries, project RFPs, & feedback.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(PROFILE_DATA.email, 'Email')}
              className="w-full py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] text-xs font-mono font-bold text-[#F5F5F0] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#000000]"
            >
              <span className="material-symbols-outlined text-sm">
                {copiedField === 'Email' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedField === 'Email' ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-[#161616] p-6 sm:p-8 rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] flex items-center justify-center text-[#E31E24]">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <span className="font-mono text-xs text-[#B8B8B0] font-bold uppercase tracking-wider block">
                PHONE & WHATSAPP
              </span>
              <h3 className="font-headline font-bold text-lg text-[#F5F5F0]">
                {PROFILE_DATA.phone}
              </h3>
              <p className="text-xs font-sans text-[#B8B8B0]">
                Quick chats & strategic consults.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(PROFILE_DATA.phone, 'Phone')}
              className="w-full py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] text-xs font-mono font-bold text-[#F5F5F0] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#000000]"
            >
              <span className="material-symbols-outlined text-sm">
                {copiedField === 'Phone' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedField === 'Phone' ? 'COPIED TO CLIPBOARD' : 'COPY PHONE'}</span>
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#161616] p-6 sm:p-8 rounded-2xl border-3 border-[#000000] shadow-[5px_5px_0px_#000000] hover:border-[#E31E24] hover:shadow-[6px_6px_0px_#E31E24] transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] flex items-center justify-center text-[#E31E24]">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </div>
              <span className="font-mono text-xs text-[#B8B8B0] font-bold uppercase tracking-wider block">
                LINKEDIN NETWORK
              </span>
              <h3 className="font-headline font-bold text-lg text-[#F5F5F0]">
                3,387+ Followers
              </h3>
              <p className="text-xs font-sans text-[#B8B8B0]">
                Network & professional updates.
              </p>
            </div>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEffects.playClick()}
              className="w-full py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] text-xs font-mono font-bold text-[#F5F5F0] transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000000]"
            >
              <span>CONNECT ON LINKEDIN</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>

        </div>

        {/* Quick Inline Message Form & Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#161616] border-4 border-[#000000] shadow-[6px_6px_0px_#000000] p-8 sm:p-10 rounded-2xl">
          
          {/* Left: Quick Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-3xl text-[#F5F5F0]">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-[#B8B8B0] font-bold">
                Reach Sanjeev directly via WhatsApp (+91 8668045519) or Email (iamheresanjeev@gmail.com).
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] space-y-2 shadow-[3px_3px_0px_#E31E24]">
                <div className="flex items-center gap-2 text-[#E31E24]">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span className="font-mono text-sm font-bold">MESSAGE DISPATCHED!</span>
                </div>
                <p className="text-xs text-[#B8B8B0] font-sans">
                  Thank you for reaching out, {directName}! Sanjeev will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#E31E24] underline pt-2 block font-bold cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={directName}
                    onChange={(e) => setDirectName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-xs text-[#F5F5F0] placeholder-[#B8B8B0] focus:outline-none focus:border-[#E31E24] font-mono"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={directEmail}
                    onChange={(e) => setDirectEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-xs text-[#F5F5F0] placeholder-[#B8B8B0] focus:outline-none focus:border-[#E31E24] font-mono"
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project scope, timeline, or query..."
                  value={directMsg}
                  onChange={(e) => setDirectMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] text-xs text-[#F5F5F0] placeholder-[#B8B8B0] focus:outline-none focus:border-[#E31E24] resize-none font-sans"
                />

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="btn-crimson px-5 py-3 rounded-xl text-xs font-headline font-bold text-[#F5F5F0] tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full sm:w-1/2"
                  >
                    <span>SEND VIA WHATSAPP</span>
                    <span className="material-symbols-outlined text-sm">chat</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="px-5 py-3 rounded-xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] text-[#F5F5F0] text-xs font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer w-full sm:w-1/2 transition-all shadow-[3px_3px_0px_#000000]"
                  >
                    <span>SEND VIA EMAIL</span>
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Social Hotlink Icons Bar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 pt-6 lg:pt-0 lg:border-l-2 border-[#000000]">
            <span className="font-mono text-xs text-[#B8B8B0] font-bold uppercase tracking-widest text-center">
              SANJEEV M'S ONLINE PROFILES
            </span>

            <div className="flex items-center justify-center gap-6">
              {/* LinkedIn Hotlink */}
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundEffects.playClick()}
                className="w-14 h-14 rounded-2xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#000000] flex items-center justify-center group cursor-pointer"
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
                className="w-14 h-14 rounded-2xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#000000] flex items-center justify-center group cursor-pointer"
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
                className="w-14 h-14 rounded-2xl bg-[#0d0d0d] border-2 border-[#000000] hover:border-[#E31E24] p-3 transition-all duration-300 hover:scale-110 shadow-[3px_3px_0px_#000000] flex items-center justify-center group cursor-pointer"
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
              className="text-xs font-mono text-[#E31E24] hover:underline flex items-center gap-1 font-bold cursor-pointer"
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
