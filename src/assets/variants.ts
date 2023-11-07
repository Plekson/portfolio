export const fadeInYVariants = {
  initial: {
    y: 50,
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

export const fadeInX200Variants = {
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

export const fadeInX500Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const opacityEffect = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const scaleUp = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};
