import { useEffect, useState } from "react";
import { Colors } from "../enums/Colors";

const useSnakeColor = () => {
  const [snakeColor, setSnakeColor] = useState<Colors>(Colors.Green);

  // TODO: EPILEPSIA MODE to implement in future

  // useEffect(() => {
  //   setInterval(() => {
  //     setSnakeColor(
  //       Object.values(Colors)[
  //         Math.floor(Math.random() * Object.keys(Colors).length)
  //       ]
  //     );
  //   }, 150);
  // }, []);

  return { snakeColor, setSnakeColor };
};

export default useSnakeColor;
