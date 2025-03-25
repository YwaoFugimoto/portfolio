import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface Props {
  image: string;
  text: string;
  style: React.CSSProperties;
}

const Window = ({ image, text, style }: Props) => {
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate("/project1");
  };

  return (
    <>
      <div
        style={style}
        className="window-container rounded shadow-sm p-4 bg-white"
      >
        <img src={image} alt="Content" className="window-image"></img>
        <p className="window-text text-center">{text}</p>
        <Button onClick={changeRoute}></Button>
      </div>
    </>
  );
};

export default Window;
