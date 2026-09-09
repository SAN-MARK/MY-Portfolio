import React, { useState } from 'react';
import { soundEffects } from '../utils/audio';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    budget: '₹5,000 – ₹10,000',
    timeline: 'Within 2-4 Weeks',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playBeep();

    const formattedMessage = `Hi Sanjeev!\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope & Details:\n${formData.details}`;
    const whatsappUrl = `https://wa.me/918668045519?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playBeep();

    const subject = `Project Proposal from ${formData.name} (${formData.projectType})`;
    const body = `Hi Sanjeev,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope & Details:\n${formData.details}`;
    const mailtoUrl = `mailto:iamheresanjeev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0e0e16] max-w-xl w-full p-6 sm:p-8 rounded-2xl border-4 border-[#040406] relative shadow-[8px_8px_0px_#fbbf24] space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#07070a] border-2 border-[#040406] text-[#9ca3af] hover:text-[#00f0ff] cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#fbbf24] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#e21d24] animate-ping"></span>
            <span>TACTICAL ALLIANCE & MISSION DISPATCH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#f3f4f6] uppercase">
            DISPATCH <span className="text-[#e21d24]">MISSION BRIEF</span>
          </h2>
          <p className="text-xs font-sans text-[#9ca3af]">
            Submit your objectives, timeline, and tactical parameters to initialize collaboration with Sanjeev M.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#07070a] border-2 border-[#040406] text-center space-y-4 shadow-[4px_4px_0px_#fbbf24]">
            <span className="material-symbols-outlined text-5xl text-[#fbbf24]">check_circle</span>
            <h3 className="font-display font-bold text-2xl text-[#f3f4f6]">MISSION BRIEF TRANSMITTED!</h3>
            <p className="text-xs text-[#9ca3af] font-sans leading-relaxed">
              Acknowledged, {formData.name}! Sanjeev has received your tactical brief for <strong>{formData.projectType}</strong>. Priority communications will be dispatched to <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-crimson px-6 py-2.5 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider shadow-[3px_3px_0px_#040406]"
            >
              RETURN TO COMMAND CENTER
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] font-bold uppercase mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Alex Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] placeholder-[#6b7280] focus:outline-none focus:border-[#00f0ff] font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] font-bold uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] placeholder-[#6b7280] focus:outline-none focus:border-[#00f0ff] font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] font-bold uppercase mb-1">
                  Mission Archetype
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] focus:outline-none focus:border-[#00f0ff] font-mono"
                >
                  <option value="Full Stack Web App">Full Stack Web App</option>
                  <option value="UI/UX & Figma Prototype">UI/UX & Figma Prototype</option>
                  <option value="Portfolio / Landing Page">Portfolio / Landing Page</option>
                  <option value="Video Editing & Motion">Video Editing & Motion</option>
                  <option value="Growth Strategy & Audit">Growth Strategy & Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] font-bold uppercase mb-1">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] focus:outline-none focus:border-[#00f0ff] font-mono"
                >
                  <option value="₹2,500 – ₹5,000">₹2,500 – ₹5,000</option>
                  <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                  <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
                  <option value="₹20,000 – ₹35,000">₹20,000 – ₹35,000</option>
                  <option value="₹35,000 – ₹50,000">₹35,000 – ₹50,000</option>
                  <option value="₹50,000+">₹50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#9ca3af] font-bold uppercase mb-1">
                Mission Scope & Objectives
              </label>
              <textarea
                rows={3}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe key features, target deadline, or reference links..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#07070a] border-2 border-[#040406] text-xs text-[#f3f4f6] placeholder-[#6b7280] focus:outline-none focus:border-[#00f0ff] resize-none font-sans"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full sm:w-1/2 btn-crimson py-3.5 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[3px_3px_0px_#040406]"
              >
                <span>VIA SECURE WHATSAPP</span>
                <span className="material-symbols-outlined text-sm">chat</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full sm:w-1/2 py-3.5 rounded-xl bg-[#07070a] border-2 border-[#040406] hover:border-[#00f0ff] text-[#f3f4f6] text-xs font-headline font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[3px_3px_0px_#040406]"
              >
                <span>VIA ENCRYPTED EMAIL</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
