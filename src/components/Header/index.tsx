interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <div className="text-center text-[white] syneFont text-[25px] font-semibold mt-[50px]"> {text} </div>;
};

export default Header;
