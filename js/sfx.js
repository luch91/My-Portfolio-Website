// ============================================================
//  sfx.js — Web Audio API sound effects (no audio files needed)
//  Off by default. Toggle with the ♪ button.
// ============================================================
const SFX = (function () {
  let ctx = null;
  let enabled = false;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  function tone({ frequency = 440, type = 'sine', duration = 0.08, volume = 0.06, attack = 0.005, decay = 0.06 } = {}) {
    if (!enabled) return;
    try {
      const ac  = getCtx();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ac.currentTime);
      gain.gain.setValueAtTime(0, ac.currentTime);
      gain.gain.linearRampToValueAtTime(volume, ac.currentTime + attack);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + duration);
      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + duration + 0.02);
    } catch (_) {}
  }

  return {
    enable()  { enabled = true;  },
    disable() { enabled = false; },
    toggle()  { enabled = !enabled; return enabled; },
    isEnabled() { return enabled; },

    // Typewriter tick — very subtle
    tick() {
      tone({ frequency: 1200, type: 'square', duration: 0.04, volume: 0.025 });
    },

    // Button hover — soft chime
    hover() {
      tone({ frequency: 660, type: 'sine', duration: 0.1, volume: 0.04 });
    },

    // Button click — satisfying low click
    click() {
      tone({ frequency: 220, type: 'triangle', duration: 0.12, volume: 0.07, attack: 0.002, decay: 0.1 });
    },

    // Section enter — soft whoosh (filtered noise burst)
    whoosh() {
      if (!enabled) return;
      try {
        const ac    = getCtx();
        const buf   = ac.createBuffer(1, ac.sampleRate * 0.18, ac.sampleRate);
        const data  = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.15;
        const src   = ac.createBufferSource();
        src.buffer  = buf;
        const filter = ac.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, ac.currentTime);
        filter.frequency.exponentialRampToValueAtTime(200, ac.currentTime + 0.18);
        filter.Q.value = 0.8;
        const gain = ac.createGain();
        gain.gain.setValueAtTime(0.18, ac.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.18);
        src.connect(filter);
        filter.connect(gain);
        gain.connect(ac.destination);
        src.start(ac.currentTime);
      } catch (_) {}
    },

    // Modal open — gentle ding
    open() {
      tone({ frequency: 880, type: 'sine', duration: 0.3, volume: 0.05, attack: 0.01, decay: 0.28 });
    },

    // Modal close
    close() {
      tone({ frequency: 440, type: 'sine', duration: 0.18, volume: 0.04 });
    }
  };
})();

// Wire up the toggle button
document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('sound-toggle');
  const icon = document.getElementById('sound-icon');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const on = SFX.toggle();
    btn.classList.toggle('active', on);
    icon.textContent = on ? '♪' : '♩';
    btn.title = on ? 'Sound on' : 'Sound off';
  });

  // Attach hover/click sfx to interactive elements
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, [role="button"]')) SFX.hover();
  });
  document.addEventListener('click', e => {
    if (e.target.closest('a, button, [role="button"]')) SFX.click();
  });
});
