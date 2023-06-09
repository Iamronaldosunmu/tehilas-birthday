import { motion, useInView } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface MessageParagraphProps {
    text: string;
    index: number;
}

const MessageParagraph: React.FC<MessageParagraphProps> = ({ text, index }) => {
    const paragraphRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(paragraphRef, { once: true, amount: 0.8 });


  return (
    // <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="syneFont flex flex-wrap gap-x-[5px]">
    //   {text.split(" ").map((word: string, index: number) => (
    //     <div className="font-semibold flex">
    //       {word.split("").map((letter: string, index: number) => (
    //         <div key={index} className="overflow-hidden ">
    //           <motion.div
    //             initial={{ y: 20 }}
    //             exit={{
    //               // y: -28,
    //               opacity: 0,
    //               transition: {
    //                 duration: 0.6,
    //                 // delay: index * 0.02,
    //                 // ease: [0.43, 0.13, 0.23, 0.96],
    //               },
    //             }}
    //             animate={{
    //               y: 0,
    //               transition: {
    //                 duration: 1.2,
    //                 delay: 1 + index * 0.14,
    //                 ease: [0.43, 0.13, 0.23, 0.96],
    //               },
    //             }}
    //           >
    //             {letter}
    //           </motion.div>
    //         </div>
    //       ))}
    //     </div>
    //   ))}
    // </motion.div>
      <motion.div ref={paragraphRef} initial={{opacity: 0, scale: 0.95}} animate={{opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95, transition: {duration: 2, delay: index <= 2 ?  2 + (index * 1.3) :    1 ,}}} className="text-center syneFont flex flex-wrap gap-x-[5px] font-semibold">{text}</motion.div>
  );
};

export default MessageParagraph;
//     <div key={index} className="overflow-hidden font-semibold">
//   <motion.div
//     initial={{ y: 28 }}
//     exit={{
//       // y: -28,
//       opacity: 0,
//       transition: {
//         duration: 0.6,
//         // delay: index * 0.02,
//         // ease: [0.43, 0.13, 0.23, 0.96],
//       },
//     }}
//     animate={{
//       y: 0,
//       transition: {
//         duration: 1.2,
//         delay: 1 + index * 0.14,
//         ease: [0.43, 0.13, 0.23, 0.96],
//       },
//     }}
//   >
//     {word}
//   </motion.div>
// </div>
