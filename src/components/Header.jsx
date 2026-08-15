import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: #1e293b;
  color: white;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 8px;
`;

function Header({ title, subtitle }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </HeaderContainer>
  );
}

export default Header;