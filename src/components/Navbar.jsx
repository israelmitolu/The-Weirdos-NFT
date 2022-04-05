import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <Section>
      <Nav>
        <Logo />
        <Menu>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Roadmap</ListItem>
          <ListItem>Showcase</ListItem>
          <ListItem>Team</ListItem>
          <ListItem>Faqs</ListItem>
        </Menu>
        <Button text="View on Github" link="https://github.com/israelmitolu" />
      </Nav>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.navHeight};
  width: 85%;
  margin: auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
export default Navbar;
