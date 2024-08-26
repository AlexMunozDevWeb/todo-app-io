import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  .header-wrapper{
    display: flex;
    position: relative;

    height: auto;width: 100%;
    padding: 50px 0 85px 0;

    .bg-image{
      position: absolute;
      width: 100%;height: 100%;
  
      top: 0;
      object-fit: cover;
      z-index: -1;
    }
    .title-button-wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      > h1{
        color: var(--very-light-gray);
        height: 31px;
        letter-spacing: 10px;
      }

      > button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        height: fit-content;
      }

    }
  }
`;

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
    <StyledHeader>
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
    </StyledHeader>
  )
}
