import { useState } from 'react';
import data from './data';
import Question from './Question';

const App = () => {
  const [questions, setQuestion] = useState(data);
  const [activeId, setActiveid] = useState(null);
  const toglleQuestion = (id) => {
     const newId = id === activeId ? null : id;
    setActiveid(newId);
  };
  return (
    <main>
      <Question
        questions={questions}
        activeId={activeId}
        toglleQuestion={toglleQuestion}
      />
    </main>
  );
};
export default App;
