import Card from 'components/Card';
import { DataType } from 'types/data';

interface IProps {
  data: DataType[];
}

const Cards = ({ data }: IProps) => {
  return (
    <div>
      {!!data.length &&
        data.map(({ id, firstName, lastName, result, average }) => (
          <Card key={id} name={`${firstName} ${lastName}`} result={result} average={average} />
        ))}
    </div>
  );
};

export default Cards;
