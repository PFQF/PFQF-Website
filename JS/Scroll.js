document.addEventListener('DOMContentLoaded', function () {
  const observe = document.querySelectorAll('.Forpic');

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback);

  observe.forEach(element => {
    observer.observe(element);
  });
});



