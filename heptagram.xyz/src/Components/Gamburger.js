import React from "react";
import styled from "styled-components";
import HeptagramLogo from "../Assets/full-heptagram-logo.png";

const Gamburger = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Gamburger;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2c2f33;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <img src={HeptagramLogo} alt="Heptagram Logo" className="logo" />
      </a>

      <li className="nav-item second">
        <a href="/" className="nav-link home active">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="https://discord.gg/HSupF99kpq" className="nav-link server">
          Support Server
        </a>
      </li>
      <li className="nav-item">
        <a href="/bot-commands" className="nav-link commands">
          Commands
        </a>
      </li>
      <li className="nav-item">
        <a href="https://api.heptagram.xyz" className="nav-link api">
          API
        </a>
      </li>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2.5rem;
  background: transparent;
  border: none;

  div {
    width: 2.5rem;
    height: 0.3rem;
    background: ${({ open }) => (open ? "white" : "white")};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
