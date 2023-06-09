import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface SliderImageProps {
  position: number;
}

const SliderImage: React.FC<SliderImageProps> = ({ position }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 10 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 2.5 + 0.17 * position,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
    >
      <LazyLoadImage
        effect="blur"
        src={`/Home/tehilaspictures/t${position}.jpg`}
        className="h-[133px] min-w-[133px] rounded-[10px] object-cover"
      />
    </motion.div>
  );
};

export default SliderImage;
