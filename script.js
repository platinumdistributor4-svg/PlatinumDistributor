document.addEventListener("DOMContentLoaded", () => {
  const revealables = [
    ...document.querySelectorAll(".hero"),
    ...document.querySelectorAll(".section"),
    ...document.querySelectorAll(".feature-card"),
    ...document.querySelectorAll(".rate-card"),
    ...document.querySelectorAll(".step-card"),
  ];

  revealables.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealables.forEach((el) => observer.observe(el));
});

