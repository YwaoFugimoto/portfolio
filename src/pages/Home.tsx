import { useState } from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.css";
import Window from "../components/Window";
import MyImage from "../assets/images/Pasted image.png";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const windowsData = [
    {
      image: `${MyImage}`,
      text: "Janela 1: Texto da primeira janela",
    },
    {
      image: `${MyImage}`,
      text: "Janela 2: Texto da segunda janela",
    },
    {
      image: `${MyImage}`,
      text: "Janela 3: Texto da terceira janela",
    },
    {
      image: `${MyImage}`,
      text: "Janela 4: Texto da primeira janela",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % windowsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? windowsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <header className="headerMain">
        <h1>Ywao's portfolio</h1>
      </header>
      <div className="fonte app-container d-flex justify-content-center align-items-center">
        <div className="windows-wrapper">
          {windowsData.map((data, index) => {
            const style = {
              transform: `translateX(${(index - currentIndex) * 500}%)`, //controla a distancia de deslocacao
            };

            return (
              <Window
                key={index}
                image={data.image}
                text={data.text}
                style={style}
              />
            );
          })}
        </div>
        <div className="navigation position-absolute d-flex justify-content-between w-100 px-4">
          <button className="btn  rounded-circle" onClick={handlePrev}>
            {`<`}
          </button>
          <button className="btn  rounded-circle" onClick={handleNext}>
            {`>`}
          </button>
        </div>
      </div>
      <footer className="footerMain">Contats:</footer>
    </>
  );
}

export default Home;
