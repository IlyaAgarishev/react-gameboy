import React from "react";

interface ISnake {
  color: string;
}

const Square: React.FC<ISnake> = ({ color }) => {
  return <div style={{ background: color }} />;
};

export default Square;
