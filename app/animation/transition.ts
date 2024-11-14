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

export const slidingMenu = {
  open: {
    width: "90%",
    height: "88%",
    display: "block",
    transition: { duration: 0.84, type: "spring", ease: "easeInOut" },
  },
  closed: {
    width: "0",
    height: "0",
    display: "none",
    transition: { duration: 0.84, type: "spring", ease: "easeInOut" },
  },
};

export const slidingText = {
  close: {
    display: "none",
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.84,
      type: "linear",
      ease: [0.7, 0, 0.3, 1],
      delay: 0,
    },
  },
  open: {
    display: "flex",
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.84,
      type: "linear",
      ease: [0.7, 0, 0.3, 1],
    },
  },
};
