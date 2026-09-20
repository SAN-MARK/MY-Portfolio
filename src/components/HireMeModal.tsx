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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#1A1F26] max-w-xl w-full p-6 sm:p-8 rounded-[16px] border border-[#2A3038] relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-[8px] bg-[#252B33] border border-[#2A3038] text-[#B8B5AD] hover:text-[#F5F3EE] cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold block">
            Initiate Collaboration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F3EE]">
            Start a <span className="italic font-normal text-[#C9A961]">Project</span>
          </h2>
          <p className="text-xs font-sans text-[#B8B5AD]">
            Submit your objectives, timeline, and project parameters to begin a collaboration with Sanjeev M.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-[12px] bg-[#252B33] border border-[#2A3038] text-center space-y-4">
            <span className="material-symbols-outlined text-4xl text-[#C9A961]">check_circle</span>
            <h3 className="font-serif font-bold text-2xl text-[#F5F3EE]">Message Transmitted</h3>
            <p className="text-xs text-[#B8B5AD] font-sans leading-relaxed">
              Thank you, {formData.name}! Sanjeev has received your project proposal for <strong>{formData.projectType}</strong>. Priority communications will be dispatched to <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-gold-primary"
            >
              Return to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans text-[#B8B5AD] font-semibold uppercase mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Alex Vance"
                  className="unified-input w-full"
                />
              </div>

              <div>
                <label className="block text-xs font-sans text-[#B8B5AD] font-semibold uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="unified-input w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans text-[#B8B5AD] font-semibold uppercase mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="unified-input w-full"
                >
                  <option value="Full Stack Web App">Full Stack Web App</option>
                  <option value="UI/UX & Figma Prototype">UI/UX & Figma Prototype</option>
                  <option value="Portfolio / Landing Page">Portfolio / Landing Page</option>
                  <option value="Video Editing & Motion">Video Editing & Motion</option>
                  <option value="Growth Strategy & Audit">Growth Strategy & Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans text-[#B8B5AD] font-semibold uppercase mb-1">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="unified-input w-full"
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
              <label className="block text-xs font-sans text-[#B8B5AD] font-semibold uppercase mb-1">
                Project Scope & Objectives
              </label>
              <textarea
                rows={3}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe key features, target deadline, or reference links..."
                className="unified-input w-full resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="btn-gold-primary w-full sm:w-1/2 flex items-center justify-center gap-2"
              >
                <span>Via WhatsApp</span>
                <span className="material-symbols-outlined text-sm">chat</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="btn-gold-secondary w-full sm:w-1/2 flex items-center justify-center gap-2"
              >
                <span>Via Email</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
