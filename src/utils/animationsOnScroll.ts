export const animationsOnScroll = (target: string, classNames: string[]) => {
  const selections = document.querySelectorAll(target);
  const options = {
    rootMargin: '0px',
    threshold: 0.25
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;

      if (entry.intersectionRatio >= 0.25) {
        const className = getRandomFromArray(classNames);
        target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  selections.forEach((selection) => {
    observer.observe(selection);
  });
};

const getRandomFromArray = (arr: string[]) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};
