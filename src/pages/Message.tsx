import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import BirthdayMessageCard from "../components/BirthdayMessageCard";
import Header from "../components/Header";
import MessageParagraph from "../components/MessageParagraph";

const Message = () => {
  const messageSongRef = useRef<HTMLAudioElement>(null);
  const playlistSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(playlistSectionRef, { once: true, amount: 0.8 });

  useEffect(() => {
    messageSongRef.current?.play();
  });

  const paragraphs = [
    "On the 28th of September 2022, at exactly 6:30 pm, at the Covenant University Library, God brought someone truly incredible into my life - you, Tehila.",
    `I remember the first time I set my eyes on you, my heart stopped instantly and the only thought that my brain could fathom at that moment was "Jesus Christ, she is Gorgeous!"`,
    `And then, I sat down and started speaking to you and I was amazed at how beautifully well you articulated your thoughts, how soothing and calm your voice sounded, and how effortlessly funny you were.`,
    `I couldn't help but get lost in those dreamy eyes of yours, I wanted to tell you how pretty I thought they were. I wanted to tell you how wonderful I thought your smile was. I wanted to tell you how perfect I thought your skin was. I wanted to tell you how absolutely amazing I thought you were! But I couldn't because it would have ruined my aesthetic😤`,
    `But now, I am so happy that I don't have to put up a front with you. I don't have to hide how absolutely obsessed I am with you anymore. You're perfect Tehila and I love you more than anything in the world. It's been eight absolutely beautiful months of knowing you and I want nothing else but to have this for the rest of my life.`,
    `Over the past few months, spending time getting to know you has been my favorite activity. We've spent lots of hours on calls and even more time in person laughing, smiling, and sometimes even crying together. Our conversations mean the world to me! I love holding your hand while gazing deeply into your beautiful eyes and telling you "I love you".`,
    `I love rubbing your lap gently whenever I say something all sappy and lovey dovey. I love it when I lose eye contact with you because of how helplessly shy you make me. I love how warm and intimate our hugs are. I love how I enjoy talking to you so much that I constantly lose track of my line of thought from time to time.`,
    `I love how you laugh so much at your own jokes before even telling them, it's the cutest thing ever😂. In your mind, you're probably the funniest person ever🤣. I love how adorable you look when you're thinking of a question to ask me whenever there's a bit of silence. I love how soothing and calm your voice sounds whenever you hum.`,
    `I love the fact that you don't keep grudges and you are very quick to apologize when you know that you're wrong. I love how you always tell me that you're going to dance for me knowing fully well that you're a terrible dancer. I love the fact that you have the voice of an angel. I've only ever heard you sing once - at a word study meeting last semester - but you sounded heavenly!`,
    `I love how smart, creative, and talented you are! Your ability to organize your thoughts and bring to life everything going on in that beautiful mind of yours is extremely impressive! I love reading the poems and pieces that you write from time to time, they are really incredible! And I am constantly in awe of the things that the lord is using you to do with Youtube. God picked the best person for the job.`,
    `I love how supportive you are! You constantly push me to do better and you make me want to be a better person - both for you and for God. And emotionally speaking, you're the best person that I could possibly have in my corner. You're a great listener and you always find a way to make my gloomy days so much brighter. Your words of wisdom and your insightful pieces of advice always help me in more ways than I could ever express.`,
    `I love the fact that you're really good at communication, our conversations are always so beautiful! I love the fact that we can talk about really deep and emotional aspects of our lives and that you're never afraid of being vulnerable with me. I love the fact that you've told me things that you haven't uttered to another soul on the planet. I love the fact that we connect on a level that most people can only ever dream of.`,
  ];

  return (
    <main className="bg-[#121212] w-full min-h-screen pt-[30px] px-[30px] pb-[70px]">
      <audio ref={messageSongRef} src="/Message/message_song.mp3" />
      <figure className="w-full max-w-[400px]  mx-auto relative rounded-md overflow-hidden shadow-md ">
        <motion.img
          initial={{ scale: 1 }}
          animate={{
            scale: 1.12,
            transition: {
              duration: 1.6,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.6,
            },
          }}
          className="w-full "
          src="/Message/messagePicture.png"
        />
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            width: 0,
            transition: {
              duration: 1.6,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.6,
            },
          }}
          className="absolute w-full h-full top-0 right-0 bg-[#121212] z-10"
        ></motion.div>
      </figure>
      <article className="flex flex-col mt-[40px] gap-[40px] text-[white] text-[15px]">
        {paragraphs.map((text: string, index: number) => (
          <MessageParagraph text={text} index={index} key={index} />
        ))}
      </article>
      <section>
        <Header text="Birthday Messages From My Friends🥳" />
        <div className="mt-[30px] flex flex-col gap-[60px]">
          <BirthdayMessageCard
            name="Tobi"
            image="/Message/Friends/mosh.png"
            text={`Happy Birthday Tehila!🎉 \nI want to use this medium to thank you for being a part of Ronald's life because ever since he met you, has been his happiest for real! \nAnd also incase you're wondering how the podcast recording went, I tried my best😂😂😂 \nWishing you the very best in all you do🥳`}
          />
          <BirthdayMessageCard
            name="Samuel"
            image="/Message/Friends/samuel.png"
            text={`Happy birthday "T❤️"😂. \n Wishing you all the best this new year, with more blessing, wisdom and grace on all sides in all you do. \n So happy for your presence in my boy's life and being a part of him coming to Christ, after all the other forces that  had tried (really what a man can do a woman will do better😭😭). \n The way you make the boy so happy is so cute, the eagerness and joy to leave class to see you, never have i seen it before😭 \n Anyhoo, hope you have a very wonderful and amazing day. \n Continue being a Woman of Christ that you are, and cheers to more years of knowing you🥂 \n WELCOME TO ADULTHOOD!!😤`}
          />
          <BirthdayMessageCard
            name="Dire"
            image="/Message/Friends/dire.png"
            text={`Happy 18th Birthday Tehila🥳, \nI wish you all the best today and pray that you'll see many more years and that God will grant you your heart's desires🫶🏽 \nThankyou for always been there for Ronald, if not for you I don't think Ronald would have any social life😂 because back then he was all work and no play😂😭... I'm grateful you came to the rescue😂🫶🏽 \nAnd as you grow older, I pray that you'll continually help thousands and thousands of people like the same way you helped my boy \nI hope you enjoy your day, CHEERS!🥳✨ \nHAPPY 18TH BIRTHDAY! 🥳🥳🥳🫶🏽`}
          />
        </div>
      </section>
      <motion.section
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.95,
          transition: { duration: 2, delay: 1 },
        }}
        ref={playlistSectionRef}
      >
        <Header text="Birthday Playlist🥰" />
        <article className="text-center mt-[10px] text-[white] syneFont font-semibold">
          A compilation of my favorite songs that truly express how I feel about
          the most incredible person in my life. <br />
          18 carefully curated songs to celebrate the 18th birthday of the love
          of my life. Enjoy!{" "}
        </article>
        <figure className="w-[260px] h-[260px] mx-auto rounded-[15px] overflow-hidden relative mt-[20px]">
          <img
            className="w-full h-full object-cover"
            src="/Message/messagePicture.png"
          />
          <div className="w-full h-full text-[white] absolute top-0 left-0 flex items-center justify-center text-[30px] font-bold">
            <img src="/theart.png" className="w-[100px]" />
          </div>
          <div className="w-full h-full top-0 right-0 absolute bg-gradient-to-b from-[rgba(0,0,0,0.1)]  to-[rgba(0,0,0,0.6)]"></div>
          <a
            target="_blank"
            href="https://open.spotify.com/playlist/5R3537CDDok8Ks0jdsZbCe?si=ebd66835f34f4602"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => messageSongRef.current?.pause()}
              className="w-[55px] h-[55px] rounded-full absolute z-10 bg-[#1fc65b] bottom-[15px] left-[15px] flex items-center justify-center"
            >
              <img
                src="/spotify-play.png"
                className="w-[20px] relative left-[2px]"
              />
            </motion.div>
          </a>{" "}
          <p className=" absolute bottom-[27px] left-[85px] text-[20px] font-semibold text-[white] syneFont">
            Play On Spotify
          </p>
        </figure>
      </motion.section>
    </main>
  );
};

export default Message;
