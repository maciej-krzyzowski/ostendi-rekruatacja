import { useState } from 'react';
import Content from 'components/Content';
import { useEffect } from 'react';
import DataLoader from 'components/DataLoader';
import DataError from 'components/DataError';

const Home = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/data')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  }, []);

  if (loader) return <DataLoader />;
  if (!loader && data.length) return <Content data={data} />;
  return <DataError />;
};

export default Home;
