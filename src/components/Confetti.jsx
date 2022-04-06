import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
};

export default ConfettiComponent;
