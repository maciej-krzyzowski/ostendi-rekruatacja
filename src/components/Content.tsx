import styled from 'styled-components';
import Cards from 'components/Cards';
import Chart from 'components/Chart';
import { DataType } from 'types/data';

interface IProps {
  data: DataType[];
}

const Content = ({ data }: IProps) => {
  return (
    <Wrapper>
      <Cards data={data} />
      <Chart data={data} />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 100px;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: 100%;
    gap: 50px;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 450px;
    height: 100%;
    width: 1px;
    background-color: #3a4966;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;
