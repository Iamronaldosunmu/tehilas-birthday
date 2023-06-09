import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.8 });
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.95,
        transition: { duration: 2, delay: 1 },
      }}
      ref={headerRef}
      className="text-center text-[white] syneFont text-[25px] font-semibold mt-[50px]"
    >
      {" "}
      {text}{" "}
    </motion.div>
  );
};

export default Header;
