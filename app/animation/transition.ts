import { delay, easeInOut } from "framer-motion";

export const boxAnimation = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.8,
      staggerChildren: 0.6,
    },
  },
};

export const textAnimation = {
  hidden: { x: 500 },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.1, -0.05, 0.9],
    },
  },
};

export const iconAnimation = {
  hidden: { y: 100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.68,
      ease: easeInOut,
    },
  },
};
