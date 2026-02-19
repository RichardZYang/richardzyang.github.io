// Audio player for landing page - plays on sidebar hover
const audio = document.getElementById('backgroundAudio');
if (audio) {
  audio.volume = 0.5;
  
  // Debug: Log when audio element is ready
  audio.addEventListener('canplaythrough', () => {
    console.log('Audio loaded successfully');
  });
  
  audio.addEventListener('error', (e) => {
    console.error('Audio load error:', e, 'Source:', audio.src);
  });
  
  // Function to play audio
  function playAudio() {
    if (audio.paused) {
      audio.muted = false;
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log('Audio playing'))
          .catch(err => console.error('Audio play failed:', err));
      }
    }
  }
  
  // Fade out audio
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
  
  // Stop audio on navigation
  function stopAudio() {
    if (audio) {
      audio.pause();
      audio.volume = 0.5;
    }
  }
  
  // Listen for push-state navigation (link clicks)
  const pushStateEl = document.getElementById('_pushState');
  if (pushStateEl) {
    pushStateEl.addEventListener('hy-push-state-start', fadeOutAudio);
    pushStateEl.addEventListener('hy-push-state-ready', stopAudio);
  }
  
  // Listen for hover on sidebar/drawer with debounce
  let fadeTimeout;
  
  function setupHoverListeners() {
    const drawerEl = document.querySelector('hy-drawer');
    const sidebarEl = document.querySelector('.sidebar');
    
    console.log('Setting up hover listeners - drawer:', !!drawerEl, 'sidebar:', !!sidebarEl);
    
    if (drawerEl) {
      drawerEl.addEventListener('mouseenter', () => {
        console.log('Drawer hover - playing audio');
        clearTimeout(fadeTimeout);
        playAudio();
      });
      drawerEl.addEventListener('mouseleave', () => {
        console.log('Drawer leave - scheduling fade');
        clearTimeout(fadeTimeout);
        fadeTimeout = setTimeout(fadeOutAudio, 1000);
      });
    }
    
    if (sidebarEl) {
      sidebarEl.addEventListener('mouseenter', () => {
        console.log('Sidebar hover - playing audio');
        clearTimeout(fadeTimeout);
        playAudio();
      });
      sidebarEl.addEventListener('mouseleave', () => {
        console.log('Sidebar leave - scheduling fade');
        clearTimeout(fadeTimeout);
        fadeTimeout = setTimeout(fadeOutAudio, 1000);
      });
    }
  }
  
  // Setup with delay and also try on DOMContentLoaded
  setTimeout(setupHoverListeners, 100);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHoverListeners);
  }
} else {
  console.error('Audio element not found');
}
