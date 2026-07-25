import { soundEffects } from './audio';

export interface ResumeDownloadState {
  isDownloading: boolean;
  progress: number;
  completed: boolean;
}

/**
 * Generates an styled PDF/text file representation of Sanjeev M's official resume
 * and triggers a browser download.
 */
export function generateResumeBlob(): Blob {
  const resumeText = `================================================================================
                               SANJEEV M
                CREATIVE MULTIMEDIA & UI/UX ENTHUSIAST
================================================================================
Phone: +91 8668045519
Email: iamheresanjeev@gmail.com
Address: Sithalapakkam, Chengalpattu / Chennai, Tamil Nadu
LinkedIn: https://www.linkedin.com/in/sanjeeveditor2008/
GitHub: https://github.com/SAN-MARK
Figma Workspace: https://www.figma.com/files/team/1575329476930413989/recents-and-sharing

--------------------------------------------------------------------------------
ABOUT ME
--------------------------------------------------------------------------------
BCA (Multimedia) student with hands-on experience in video editing, Figma UI/UX 
design, and social media marketing. Completed a real-world internship, deployed 
a live student portal, and won 3rd place at Brain Code 2026. Seeking creative, 
media, or IT internship opportunities.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
* Bachelor of Computer Application (BCA) | 2025 - 2028
  PERI College of Arts and Science | Mannivakkam, Chennai

* Higher Secondary Education | 2023 - 2025
  C.S.I Corley Hr Sec School | Tambaram, Chennai

--------------------------------------------------------------------------------
INTERNSHIP & WORK EXPERIENCE
--------------------------------------------------------------------------------
* Marpu Foundation | Video Editing / Poster Design / Social Media Marketing
  Duration: Dec 2025 - Jan 2026
  - Managed social media content creation and posting across multiple platforms.
  - Designed high-converting campaign graphics and foundation posters.
  - Supported online community growth through strategic visual story posting.

* Novitech R&D Solutions | FSD & UI/UX Masterclass Intern
  Duration: 2026 (In Progress)
  - Full-stack web architecture and user interface prototyping.

--------------------------------------------------------------------------------
KEY PROJECTS
--------------------------------------------------------------------------------
1. PCAS Student Portal (UI/UX Design & Development)
   - Designed and deployed a live academic dashboard for college students.
   - Key Features: Attendance tracking, class timetable, staff directory, upcoming events.
   - Tools: Figma, Vibe Code, HTML/CSS | Live: pcasstudentportal.figma.site

2. Vector Arts Academy App (VVI) (UI/UX Design)
   - Complete student internship & campus event tracking application in Figma.
   - Features 15+ interactive mobile screens: student login portal, roll number SSO, 
     upcoming event pre-registration, and supervisor approval logs.
   - Live Figma Prototype: https://www.figma.com/proto/Rs6ctoMQsLBJvjQPXk4Unp

3. FindBack Full Stack Web Application (In Process)
   - Secure end-to-end lost & found tracking platform with RBAC user authorization,
     Sheet.best API integration, and identity verification logs.

--------------------------------------------------------------------------------
ACHIEVEMENTS
--------------------------------------------------------------------------------
* Brain Code 2026 — 3rd Place (Web Designing)
  Secured 3rd place in inter-collegiate web designing competition among 
  multiple colleges as a first-year student.

--------------------------------------------------------------------------------
TECHNICAL SKILLS & LEARNING
--------------------------------------------------------------------------------
* Primary Skills: UI/UX Design, Figma Prototyping, Frontend Development (React/JS),
  Video Editing (Capcut, Premiere Pro), MS Office (Word, Excel), Communication
* Active Learning: N8N Automation, Full Stack Development, Digital Marketing, JavaScript
* Tools: Figma, Vercel, Git & GitHub, Canva, Google AI Studio

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
* Generative AI Mastermind - Outskill (June 2026)
* Python and Machine Learning Workshop - Approtech R&D Solutions (March 2026)
* FSD & UI/UX Internship Masterclass - Novitech R&D (2026)

================================================================================
           Generated via Sanjeev M's Portfolio Ecosystem
================================================================================`;

  return new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
}

export function downloadResumeFile(onProgress?: (progress: number) => void, onComplete?: () => void) {
  soundEffects.playBeep();

  let step = 0;
  const interval = setInterval(() => {
    step += 25;
    if (onProgress) onProgress(step);

    if (step >= 100) {
      clearInterval(interval);
      soundEffects.playClick();

      // Trigger actual download
      const blob = generateResumeBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SANJEEV_M_RESUME.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (onComplete) onComplete();
    }
  }, 150);
}
