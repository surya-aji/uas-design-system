import styled from "styled-components";

export const Navbar = styled.section`
  margin-right: 10%;
`;

export const Navbar_menu = styled.ul`
  overflow: hidden;
  color: #fff;
  list-style: none;
  float: left;
  padding: 0;
  width: 650px;
  margin: 0 0 0;
  background: #1abc9c;
  -webkit-box-shadow: 1px 1px 1px 0px rgba(204, 204, 204, 0.55);
  -moz-box-shadow: 1px 1px 1px 0px rgba(204, 204, 204, 0.55);
  box-shadow: 1px 1px 1px 0px rgba(204, 204, 204, 0.55);
`;

export const Navbar_list = styled.li`
margin: 0;
float: left;
`;

export const Navbar_a = styled.a`
padding: 25px;
display: block;
font-weight: 600;
font-size: 16px;
color: #fff;
text-transform: uppercase;
transition: all 0.5s ease;
text-decoration: none;
`;







export default Navbar;