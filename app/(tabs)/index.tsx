import { faAnglesRight, faBars, faRedo, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../css/home_page.css';
import Equation from './Modules/Equation';
import MenuButton from './Modules/MenuOption';

export default function HomeScreen() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [eqIsOpen, setEqIsOpen] = useState(false);

  return (
    <>
      <header>
        <h1 className="Principal_title">K<sup>_</sup><sub>Graph</sub></h1>
        <div id="menu" className={menuIsOpen ? 'open' : ''}>
          <button
            className="menuBtn"
            type="button"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div id="menuItems" className={menuIsOpen ? 'show' : 'hide'}>
            <MenuButton goto={"kevin"}>Kevination</MenuButton>
            <MenuButton goto={"graphs"}>Graphs</MenuButton>
            <MenuButton goto={"settings"}>Settings</MenuButton>
          </div>
        </div>
      </header>
      <div id="home">
        <div id="equations" className={eqIsOpen ? 'eq__open' : ''}>
          <div className="eq__header">
            <div className="button__panel">
              <button
                className="actionBtn"
                type="button"
                style={{
                  borderRadius: "5px 0 0 5px"
                }}
                onClick={() => console.log('Undo')}
              >
                <FontAwesomeIcon icon={faUndo} />
              </button>

              <button
                className="actionBtn"
                type="button"
                style={{
                  borderRadius: "0 5px 5px 0"
                }}
                onClick={() => console.log('Redo')}
              >
                <FontAwesomeIcon icon={faRedo} />
              </button>
            </div>
            <button
              type="button"
              className="openBtn"
              onClick={() => setEqIsOpen(!eqIsOpen)}
            ><FontAwesomeIcon icon={faAnglesRight} /></button>
          </div>
          <div className="eq__body">
            <Equation id='1'></Equation>
          </div>
        </div>
        <div id="image-container"></div>
      </div>
    </>
  );
}
