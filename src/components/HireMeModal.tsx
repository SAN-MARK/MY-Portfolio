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
    budget: '$1,000 - $3,000',
    timeline: 'Within 2-4 Weeks',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playBeep();

    const formattedMessage = `Hi Sanjeev!\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope & Details:\n${formData.details}`;
    const whatsappUrl = `https://wa.me/918668045519?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-card max-w-xl w-full p-6 sm:p-8 rounded-2xl border border-[#ff4d80] relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-gray-400 hover:text-white"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00fbfb] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00fbfb] animate-ping"></span>
            <span>STRATEGIC COLLABORATION</span>
          </div>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white uppercase">
            START A <span className="neon-pink-text">PROJECT</span>
          </h2>
          <p className="text-xs font-sans text-gray-300">
            Fill out the scope brief below to discuss availability, milestones, and deliverables.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#00fbfb]/10 border border-[#00fbfb] text-center space-y-4">
            <span className="material-symbols-outlined text-5xl text-[#00fbfb]">check_circle</span>
            <h3 className="font-headline font-bold text-xl text-white">PROPOSAL TRANSMITTED!</h3>
            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              Thank you, {formData.name}! Sanjeev has received your brief for <strong>{formData.projectType}</strong>. You'll receive a detailed response and meeting link at <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-gradient px-6 py-2.5 rounded-xl text-xs font-headline font-bold text-white uppercase tracking-wider"
            >
              RETURN TO PORTFOLIO
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Alex Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4d80]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4d80]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white focus:outline-none focus:border-[#ff4d80]"
                >
                  <option value="Full Stack Web App">Full Stack Web App</option>
                  <option value="UI/UX & Figma Prototype">UI/UX & Figma Prototype</option>
                  <option value="Portfolio / Landing Page">Portfolio / Landing Page</option>
                  <option value="Video Editing & Motion">Video Editing & Motion</option>
                  <option value="Growth Strategy & Audit">Growth Strategy & Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white focus:outline-none focus:border-[#ff4d80]"
                >
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1">
                Project Scope & Vision
              </label>
              <textarea
                rows={3}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe key features, target deadline, or reference links..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#3a4a49] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff4d80] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-gradient py-3.5 rounded-xl text-xs font-headline font-bold text-white tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,251,251,0.3)] hover:shadow-[0_0_20px_rgba(0,251,251,0.5)]"
            >
              <span>SEND PROPOSAL VIA WHATSAPP</span>
              <span className="material-symbols-outlined text-sm">chat</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
