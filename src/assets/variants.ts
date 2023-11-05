export const fadeInYVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.05 * index,
    },
  }),
};

export const fadeInXVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
