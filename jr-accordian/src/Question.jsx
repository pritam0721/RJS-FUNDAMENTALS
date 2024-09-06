import SingleQuestion from './Singlequestion';

const Question = ({ questions, activeId, toglleQuestion }) => {
  return (
    <section className='container'>
      <h1>question</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toglleQuestion={toglleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Question;
