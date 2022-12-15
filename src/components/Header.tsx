import styled from 'styled-components';

interface IProps {
  children: string;
}

const Header = ({ children }: IProps) => {
  return (
    <HeaderWrapper>
      <Heading>{children}</Heading>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  border-radius: 12px;
  background: linear-gradient(0.25turn, #3a4966, #3f87a6, #3c8ab8);
  color: #fff;
  text-align: center;

  @media (max-width: 752px) {
    width: 100vw;
    margin: 0 -16px;
    border-radius: 0;
  }
`;

const Heading = styled.h1`
  font-size: 50px;
  color: #fff;

  @media (max-width: 992px) {
    font-size: 32px;
  }
`;
