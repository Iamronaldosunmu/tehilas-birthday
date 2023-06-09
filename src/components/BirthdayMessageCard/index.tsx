import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BirthdayMessageCardProps {
  text: string;
  image: string;
  name: string;
}

const BirthdayMessageCard: React.FC<BirthdayMessageCardProps> = ({
  text,
  image,
  name,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.8 });
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.95,
        transition: { duration: 2, delay: 1 },
      }}
      ref={cardRef}
      className="w-full max-w-[400px] mx-auto bg-[#303236] pt-[25px] py-[20px] px-[20px] rounded-[10px] text-[14px] syneFont font-semibold text-[white] text-center"
    >
      <div>
        {text.split("\n").map((text: string) => (
          <p className="mt-[5px]">{text}</p>
        ))}
      </div>
      <div className="mt-[35px] flex flex-col items-center">
        <img src={image} className="w-[40px] h-[40px] rounded-full" />
        <p className="mt-[15px]">- {name}</p>
      </div>
    </motion.div>
  );
};

export default BirthdayMessageCard;
