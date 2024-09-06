import { useState, useEffect } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading.jsx';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isloading, setLoading] = useState(true);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id != id;
    });
    setTours(newTours);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTours(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // ! fetching the date from the api

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left </h2>
          <button
            type='button'
            className='btn'
            onClick={fetchData}
            style={{ marginTop: '2rem' }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};
export default App;
