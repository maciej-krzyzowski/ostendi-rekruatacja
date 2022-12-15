import styled from 'styled-components';

interface IProps {
  name: string;
  result: number;
  average: number;
}

const Card = ({ name, result, average }: IProps) => {
  return (
    <CardWrapper>
      <CardRow>
        <span>Name:</span>
        {name}
      </CardRow>
      <CardRow>
        <span>Result:</span>
        {result}
      </CardRow>
      <CardRow>
        <span>Average:</span>
        {average}
      </CardRow>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  border: 1px solid #3a4966;
  border-radius: 10px;

  &:first-child {
    margin-top: 0;
  }
`;

const CardRow = styled.div`
  display: flex;
  padding: 5px 12px;

  span {
    display: inline-block;
    width: 100px;
  }
`;
