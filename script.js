 document.body.classList.add('fade-out');

  window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');

    // Hide loader
    const loader = document.getElementById('page-loader');
    loader.classList.add('hidden');
  });

  // Handle navigation with fade + loader
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
      const url = this.getAttribute('href');
      if (!url || url.startsWith('#') || url.startsWith('javascript')) return;

      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');

      // Show loader
      const loader = document.getElementById('page-loader');
      loader.classList.remove('hidden');

setTimeout(() => {
  window.location.href = url;
}, 1000); // was 400ms, now 1000ms (1s)
 // Delay must match fade duration
    });
  });


  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Load theme preference from local storage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save preference
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
