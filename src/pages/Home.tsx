import { motion } from "framer-motion";
import SliderImage from "../components/SliderImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [time, setTime] = useState("")
  const [twelveHourSuffix, setTwelveHourSuffix] = useState("");
  const navigate = useNavigate();

  const updateTime = () => {
    let currentTime = new Date().toTimeString().slice(0, 5);
    let hour = currentTime.slice(0, 2)
    if (parseInt(hour) > 12) {
      currentTime = (parseInt(hour) - 12).toString() + currentTime.slice(2);
      setTwelveHourSuffix("PM");
    }
    else if (hour == "00") {
      currentTime = "12" + currentTime.slice(2);
    }
    else {
      setTwelveHourSuffix("AM");
    }
    setTime(currentTime);
  }

  //Start the slider animation
  useEffect(() => {
    setTimeout(() => {
      setAnimationStarted(true);
    }, 2800);

    updateTime();
    setInterval(() => updateTime(), 1000);
  }, []);

  const [changingPage, setChangingPage] = useState(false);
  return (
    <>
      {changingPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          onAnimationComplete={() => navigate("/message")}
          className="bg-[#121212] min-h-screen absolute top-0 left-0 right-0 bottom-0 flex flex-col overflow-hidden z-[20]"
        ></motion.div>
      )}
      <main className="bg-[#121212] min-h-screen absolute top-0 left-0 right-0 bottom-0 flex flex-col overflow-hidden">
        <div>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
            className="px-[20px] text-[15px] pt-[16px] flex items-center justify-between syneFont font-semibold text-[white]"
          >
            <p className="">Tehila's 18th</p>
            <div className="py-[5px] px-[15px] relative overflow-hidden rounded-[5px]">
              <div className="z-10 relative">June 10</div>
              <img
                className="absolute -top-[40px] scale-150 left-0 right-0 bottom-0 z-0"
                src="/Home/blurredBackground.png"
              />
            </div>
            <p>
              {/* 12:00 AM */}
              {`${time} ${twelveHourSuffix}`}
            </p>
          </motion.nav>
          <section className="mt-[40px] px-[20px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 1.4, duration: 0.5 },
              }}
              className="w-full h-[283px] rounded-[22px] overflow-hidden relative "
            >
              <img
                className="w-full h-full absolute top-0 right-0 left-0 bottom-0"
                src="/Home/blurredBackground.png"
              />
              <div className="relative z-10 text-[white] max-w-[250px] mx-auto">
                <img
                  className="z-10 absolute w-[54px] -top-[70px] left-[calc(50%-27px)]"
                  src="/Home/telegramemojis/partying-face-telegram-min.gif"
                />
                <img
                  className="z-10 absolute w-[34px] -top-[40px] left-[10px] -rotate-[11deg]"
                  src="/Home/telegramemojis/smiling-face-with-hearts-telegram-min.gif"
                />
                <img
                  className="z-10 absolute w-[34px] -top-[40px] right-[10px] rotate-[11deg]"
                  src="/Home/telegramemojis/smiling-face-with-heart-eyes-telegram-min.gif"
                />
                <img
                  className="z-10 absolute w-[34px] top-[20px] left-0 -rotate-[21deg]"
                  src="/Home/telegramemojis/star-struck-telegram-min.gif"
                />
                <img
                  className="z-10 absolute w-[34px] top-[20px] right-0 rotate-[21deg]"
                  src="/Home/telegramemojis/smiling-face-telegram.webp"
                />
                <img
                  className="z-10 absolute w-[60px] -bottom-[70px] left-[calc(50%-30px)]"
                  src="/Home/telegramemojis/red-heart-telegram-min.gif"
                />
                <p className="font-semibold syneFont text-[22px] text-center mt-[89px] leading-[26px]">
                  {" "}
                  Happy Birthday <br /> Tehila!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(): void => {
                    setChangingPage(true);
                  }}
                  className="bg-[#132042] h-[44px] w-[98px] mx-auto mt-[19px] rounded-[7px] flex items-center justify-center gap-x-[7px] cursor-pointer"
                >
                  <img
                    className="h-[20px] w-[20px]"
                    src="/Home/startIcon.svg"
                  />
                  <p className="text-[18px] syneFont font-semibold">Start</p>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
        <motion.section className="w-full h-full flex items-center px-[20px] gap-[15px]">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: animationStarted ? -1476 : 0,
              transition: {
                duration: 25,
                repeat: Infinity,
                spring: 0,
                ease: "linear",
              },
            }}
            className="flex gap-[15px]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (position: number, index: number) => (
                <SliderImage key={index} position={position} />
              )
            )}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: animationStarted ? -1476 : 0,
              transition: {
                duration: 25,
                repeat: Infinity,
                spring: 0,
                ease: "linear",
              },
            }}
            className="flex gap-[15px]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (position: number, index: number) => (
                <SliderImage position={position} key={index} />
              )
            )}
          </motion.div>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
