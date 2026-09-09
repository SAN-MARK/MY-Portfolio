export interface NavLinkItem {
  id: string;
  label: string;
  fullLabel: string;
  num: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'hero', label: 'ORIGIN', fullLabel: 'ORIGIN STORY', num: '01' },
  { id: 'numbers', label: 'POWER STATS', fullLabel: 'POWER STATS', num: '02' },
  { id: 'work', label: 'MISSIONS', fullLabel: 'MISSIONS COMPLETED', num: '03' },
  { id: 'featured', label: 'SIGNATURE', fullLabel: 'SIGNATURE MISSION', num: '04' },
  { id: 'skills', label: 'ARSENAL', fullLabel: 'ABILITIES & ARSENAL', num: '05' },
  { id: 'courses', label: 'TRAINING ARC', fullLabel: 'TRAINING ARC', num: '06' },
  { id: 'github', label: 'THE VAULT', fullLabel: 'THE VAULT', num: '07' },
  { id: 'achievements', label: 'VICTORIES', fullLabel: 'VICTORIES & MEDALS', num: '08' },
  { id: 'experience', label: 'MISSION LOG', fullLabel: 'MISSION LOG', num: '09' },
  { id: 'youtube', label: 'COMMS', fullLabel: 'COMMS CHANNEL', num: '10' },
  { id: 'contact', label: 'ASSEMBLE', fullLabel: 'ASSEMBLE THE TEAM', num: '11' },
];
