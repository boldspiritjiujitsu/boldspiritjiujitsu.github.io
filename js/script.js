window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');

      if (entry.isIntersecting) {
        document.querySelectorAll(".side-nav__item--active").forEach((z) => {
          z.classList.remove("side-nav__item--active");
        });
        document.querySelector(`nav a[href="#${id}"]`).classList.add("side-nav__item--active");
      }
    });
  }, {rootMargin: '0px 0px -80% 0px'});

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
  
});