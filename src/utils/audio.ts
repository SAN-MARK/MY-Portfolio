class SoundEffects {
  private audioCtx: AudioContext | null = null;
  public enabled: boolean = false;
  private bgmAudio: HTMLAudioElement | null = null;
  private bgmOscillators: OscillatorNode[] = [];
  private bgmGainNodes: GainNode[] = [];
  private bgmInterval: number | null = null;
  private isBgmPlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Default HTML5 Audio element for attached BGM track
      this.bgmAudio = new Audio('/bgm.mp3');
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.5;
    }
  }

  public setBgmSource(url: string) {
    if (typeof window !== 'undefined') {
      if (this.bgmAudio) {
        this.bgmAudio.pause();
      }
      this.bgmAudio = new Audio(url);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.5;
      if (this.isBgmPlaying) {
        this.bgmAudio.play().catch(() => {
          this.startSynthwaveBGM();
        });
      }
    }
  }

  private init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch {
      // Ignore audio policy errors
    }
  }

  playBeep() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(1200, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch {
      // Ignore audio policy errors
    }
  }

  // Start continuous BGM music
  startBGM() {
    this.enabled = true;
    this.isBgmPlaying = true;

    if (this.bgmAudio) {
      this.bgmAudio.currentTime = 0;
      this.bgmAudio
        .play()
        .then(() => {
          // BGM audio file playing successfully
        })
        .catch(() => {
          // Fallback to Vice Neon Web Audio Synthwave BGM loop
          this.startSynthwaveBGM();
        });
    } else {
      this.startSynthwaveBGM();
    }
  }

  // Stop/Pause BGM music immediately
  stopBGM() {
    this.enabled = false;
    this.isBgmPlaying = false;

    if (this.bgmAudio) {
      this.bgmAudio.pause();
    }

    this.stopSynthwaveBGM();
  }

  // Vice Neon Cyberpunk Synthwave Ambient Loop Generator using Web Audio API
  private startSynthwaveBGM() {
    try {
      this.init();
      if (!this.audioCtx) return;

      this.stopSynthwaveBGM(); // Reset previous loops if active

      const now = this.audioCtx.currentTime;
      const masterGain = this.audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.1, now);
      masterGain.connect(this.audioCtx.destination);
      this.bgmGainNodes.push(masterGain);

      // Warm Synth Pad (A Minor chord: A2, C3, E3, G3, B3)
      const padNotes = [110, 130.81, 164.81, 196.0, 246.94];
      padNotes.forEach((freq) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(550, this.audioCtx.currentTime);

        gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start();
        this.bgmOscillators.push(osc);
      });

      // Synth Arpeggio Loop (160 BPM pulsating vice-neon synth arp)
      const arpScale = [220, 261.63, 329.63, 392.0, 440.0, 523.25, 659.25, 523.25];
      let step = 0;

      this.bgmInterval = window.setInterval(() => {
        if (!this.isBgmPlaying || !this.audioCtx) return;
        try {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          const filter = this.audioCtx.createBiquadFilter();

          const freq = arpScale[step % arpScale.length];
          step++;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1200, this.audioCtx.currentTime);

          const time = this.audioCtx.currentTime;
          gain.gain.setValueAtTime(0.035, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(masterGain);

          osc.start(time);
          osc.stop(time + 0.22);
        } catch {
          // ignore error
        }
      }, 190);
    } catch {
      // ignore
    }
  }

  private stopSynthwaveBGM() {
    if (this.bgmInterval !== null) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }

    this.bgmOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    this.bgmOscillators = [];

    this.bgmGainNodes.forEach((gain) => {
      try {
        gain.disconnect();
      } catch {
        // ignore
      }
    });
    this.bgmGainNodes = [];
  }
}

export const soundEffects = new SoundEffects();

