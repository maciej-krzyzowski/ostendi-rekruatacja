import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 32px 16px;

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 752px) {
    max-width: 100%;
    padding: 0 16px 32px;
  }
`;
