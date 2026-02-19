// Audio player for landing page - plays on sidebar hover
let audioEnabled = true;
let pushStateBound = false;

function initAudioControls() {
  const audio = document.getElementById('backgroundAudio');
  const audioToggle = document.getElementById('audioToggle');
  const audioIcon = document.getElementById('audioIcon');

  if (!audio || !audioToggle || !audioIcon) {
    return;
  }

  audio.volume = 0.5;

  function updateIcon() {
    if (audioEnabled) {
      audioIcon.innerHTML =
        '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="#999"/>';
    } else {
      audioIcon.innerHTML =
        '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="#999"/>';
    }
  }

  function playAudio() {
    if (audioEnabled && audio.paused) {
      audio.muted = false;
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.error('Audio play failed:', err));
      }
    }
  }

  function fadeOutAudio() {
    if (audio && !audio.paused) {
      let currentVolume = audio.volume;
      const fadeInterval = setInterval(() => {
        currentVolume -= 0.1;
        if (currentVolume <= 0) {
          audio.pause();
          audio.volume = 0.5;
          clearInterval(fadeInterval);
        } else {
          audio.volume = currentVolume;
        }
      }, 50);
    }
  }

  function stopAudio() {
    if (audio) {
      audio.pause();
      audio.volume = 0.5;
    }
  }

  if (!audio.dataset.bound) {
    audio.addEventListener('canplaythrough', () => {
      console.log('Audio loaded successfully');
    });
    audio.addEventListener('error', e => {
      console.error('Audio load error:', e, 'Source:', audio.src);
    });
    audio.dataset.bound = 'true';
  }

  if (!audioToggle.dataset.bound) {
    audioToggle.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      updateIcon();
      if (!audioEnabled && !audio.paused) {
        fadeOutAudio();
      }
    });
    audioToggle.dataset.bound = 'true';
  }

  let fadeTimeout;

  function bindHoverListeners(el) {
    if (!el || el.dataset.audioHoverBound) {
      return;
    }

    el.addEventListener('mouseenter', () => {
      clearTimeout(fadeTimeout);
      playAudio();
    });

    el.addEventListener('mouseleave', () => {
      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(fadeOutAudio, 1000);
    });

    el.dataset.audioHoverBound = 'true';
  }

  bindHoverListeners(document.querySelector('hy-drawer'));
  bindHoverListeners(document.querySelector('.sidebar'));

  if (!pushStateBound) {
    const pushStateEl = document.getElementById('_pushState');
    if (pushStateEl) {
      pushStateEl.addEventListener('hy-push-state-start', fadeOutAudio);
      pushStateEl.addEventListener('hy-push-state-ready', stopAudio);
      pushStateEl.addEventListener('hy-push-state-ready', initAudioControls);
      pushStateBound = true;
    }
  }

  updateIcon();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAudioControls);
} else {
  initAudioControls();
}
