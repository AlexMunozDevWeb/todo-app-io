import { useState } from "react";

export default function Header() {

  let mobileDarkModeImg = 'bg-mobile-dark.webp';
  let deskyopDarkModeImg = 'bg-desktop-dark.webp';

  let iconSun = 'icon-sun.svg' 
  let iconMoon = 'icon-moon.svg' 

  // const [darkMode, setDarkMode] = useState(true)

  // const handleChange = () => {
  //   console.log(darkMode);
  //   darkMode ? setDarkMode(false) : setDarkMode(true)  
  //   console.log(darkMode);
  // }

  return (
    <header className="header-wrapper">
      <img 
        src={`/images/${mobileDarkModeImg}`} 
        alt="Imagen desktop dark mode" 
        className="bg-image"
      />

      <div className="container">
        <div className="title-button-wrapper">

          <h1>TODO</h1>
          <button
            // onClick={ () => ( darkMode ? setDarkMode(false) : setDarkMode(true) )}
            // onChange={handleChange}
          >
            <img src={`/images/${iconSun}`} alt="Imagen para cambiar a dark/light mode" />
          </button>

        </div>

        <div className="input-wrapper">
          <input type="checkbox" id="create_task" />
          <input type="text" id="text_todo" placeholder="Crear nuevo todo..." />
        </div>
      </div>
    </header>
  )
}
