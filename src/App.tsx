import React, { useState, useEffect } from "react";
import "./App.css";
import cats from "./assets/img/cats.jpg";
import chubaka from "./assets/img/chubaka.jpg";
import dogs from "./assets/img/dogs.jpg";
import dyno from "./assets/img/dyno.jpg";
import planets from "./assets/img/planets.jpg";
import useGenerateRandomColor from "./useGenerateRandomColor";

function App() {
  
  const { color, generateColor } = useGenerateRandomColor();
  const [img, setImg] = useState<string[]>([cats, chubaka, dogs, dyno, planets]);
  const shuffleArrImg = img.sort(() => Math.random() - 0.5);
  
 
  const clickMainButton = () => {
    setImg(shuffleArrImg);
    generateColor()
  };
  useEffect(() => {
    setTimeout(() => {
      clickMainButton()
   }, 31200);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
      <header className="elemStyle" style={{backgroundImage: `url(${img[0]})`}}/>
      <nav className="elemStyle" style={{backgroundImage: `url(${img[1]})`}}/>
      <main className="elemStyle" style={{backgroundImage: `url(${img[2]})`}}>
        <button style={{backgroundColor: "#" + color}} onClick={clickMainButton}>Click</button>
      </main>
      <aside className="elemStyle" style={{backgroundImage: `url(${img[3]})`}}/>
      <footer className="elemStyle" style={{backgroundImage: `url(${img[4]})`}}/>
    </div>
    </div>
  );
}

export default App;
