interface BirthdayMessageCardProps {
    text: string;
    image: string;
    name: string;
}

const BirthdayMessageCard : React.FC<BirthdayMessageCardProps> = ({text, image, name}) => {
  return (
    <div className="w-full max-w-[400px] mx-auto bg-[#303236] pt-[25px] py-[20px] px-[20px] rounded-[10px] text-[14px] syneFont font-semibold text-[white] text-center">
      <div>
        {text.split("\n").map((text: string) => (<p className="mt-[5px]">{text}</p>))}
          </div>
          <div className="mt-[35px] flex flex-col items-center">
              <img src={image} className="w-[40px] h-[40px] rounded-full" />
              <p className="mt-[15px]">
                  - {name}
              </p>
          </div>
    </div>
  );
};

export default BirthdayMessageCard;
