import { useState } from 'react';
import { useEffect } from 'react';
import Jobinfo from './Jobinfo';
import BtnContainer from './BtnContainer';
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setLodaing] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setJobs(result);
    setLodaing(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem} />
      <Jobinfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
