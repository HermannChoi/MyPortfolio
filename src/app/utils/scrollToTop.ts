export const scrollToTop = (num: number) => {
  window.scrollTo({
    top: num,
    behavior: "smooth",
  });
};
