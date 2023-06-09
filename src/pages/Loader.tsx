import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderTextAnimation from "../components/LoaderTextAnimation";

const Loader = () => {
  const textToColor = {
    Amazing: "#F92E85",
    Woman: "#FF792E",
    Genuinely: "#F92E85", 
    Loves: "#FF792E", 
    You: "#7C46CE"
  };
  const [firstMessageFinished, setFirstMessageFinished] = useState(false);
  const [secondMessageFinished, setSecondMessageFinished] = useState(false);
  const [secondMessageShowing, setSecondMessageShowing] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute w-full h-screen gradient top-0 left-0 right-0 bottom-0 syneFont text-[white] bg-dark text-[20px] flex flex-col items-center justify-center text-center px-[30px]">
      <AnimatePresence>
        {!firstMessageFinished && (
          <LoaderTextAnimation
            animationText="To The Most Amazing Woman On Planet Earth"
            textToColor={textToColor}
            setMessageFinished={setFirstMessageFinished}
            setNextStart={() => setSecondMessageShowing(true)}
          />
        )}
        {secondMessageShowing && !secondMessageFinished && (
          <LoaderTextAnimation
            animationText="From Someone Who Genuinely Loves You More Than Anyhthing In The World"
            textToColor={textToColor}
            setMessageFinished={setSecondMessageFinished}
            onAnimationComplete={() => navigate("/home")}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
