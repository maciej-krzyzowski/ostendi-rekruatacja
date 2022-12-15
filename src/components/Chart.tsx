import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { DataType } from 'types/data';

interface IProps {
  data: DataType[];
}

const Chart = ({ data }: IProps) => {
  let labels: Array<string> = [];
  let dataResult: Array<number> = [];
  let dataAverage: Array<number> = [];

  if (data.length) {
    data.forEach(({ firstName, lastName, result, average }) => {
      labels = [...labels, `${firstName} ${lastName}`];
      dataResult = [...dataResult, result];
      dataAverage = [...dataAverage, average];
    });

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  }

  return (
    <Wrapper>
      <Bar
        options={{
          indexAxis: 'y' as const,
          responsive: true,
          aspectRatio: window.innerWidth > 992 ? 1 : 2,
          plugins: {
            legend: {
              position: 'bottom' as const,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: 'Result',
              data: dataResult,
              backgroundColor: '#3a4966',
            },
            {
              label: 'Average',
              data: dataAverage,
              backgroundColor: '#3c8ab8',
            },
          ],
        }}
      />
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  max-width: 100%;

  canvas {
    position: sticky;
    top: 20px;

    @media (max-width: 992px) {
      position: static;
    }
  }
`;
