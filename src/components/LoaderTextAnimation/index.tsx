import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface textToColorAssignment {
  [text: string]: string;
}

interface LoaderTextAnimationProps {
  textToColor: textToColorAssignment;
  animationText: string;
  setMessageFinished: Dispatch<SetStateAction<boolean>>;
  setNextStart?: () => void;
  onAnimationComplete?: () => void;
}

const LoaderTextAnimation: React.FC<LoaderTextAnimationProps> = ({
  textToColor,
  animationText,
  setMessageFinished,
  setNextStart,
  onAnimationComplete,
}) => {
  return (
    <motion.div className="flex flex-wrap justify-center gap-x-[5px]">
      {animationText.split(" ").map((word, index: number) => {
        if (Object.keys(textToColor).includes(word))
          return (
            <div key={index} className="overflow-hidden font-semibold">
              <motion.div
                style={{ color: textToColor[word] }}
                initial={{ y: 28 }}
                exit={{
                  // y: -28,
                  opacity: 0,
                  transition: {
                    duration: 0.6,
                    // delay: index * 0.02,
                    // ease: [0.43, 0.13, 0.23, 0.96],
                  },
                }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: 1 + index * 0.14,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                }}
              >
                {word}
              </motion.div>
            </div>
          );
        return (
          <div key={index} className="overflow-hidden font-semibold">
            <motion.div
              initial={{ y: 28 }}
              exit={{
                // y: -28,
                opacity: 0,
                transition: {
                  duration: 0.6,
                  // delay: index * 0.02,
                  // ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              onAnimationComplete={
                word ==
                animationText.split(" ")[animationText.split(" ").length - 1]
                  ? () => {
                      setTimeout(
                        () => setMessageFinished(true),
                        animationText.split(" ").length * 120
                      );
                      if (setNextStart) setTimeout(() => setNextStart(), 1800);
                      if (onAnimationComplete) setTimeout(() => onAnimationComplete(), 1800);
                    }
                  : () => {}
              }
              animate={{
                y: 0,
                transition: {
                  duration: 1.2,
                  delay: 1 + index * 0.14,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
            >
              {word}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default LoaderTextAnimation;
