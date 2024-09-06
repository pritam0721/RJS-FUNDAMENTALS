import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeId, toglleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article className='question'>
      <header>
        <h5> {title}</h5>
        <button
          type='button'
          className='question-btn'
          onClick={() => toglleQuestion(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;

// ! for multipale selection at a time
// const [showInfo, setInfo] = useState(false);
//   return (
//     <article className='question'>
//       <header>
//         <h5> {title}</h5>
//         <button
//           type='button'
//           className='question-btn'
//           onClick={() => setInfo(!showInfo)}
//         >
//           {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       {showInfo && <p>{info}</p>}
//     </article>
//   );
// };
// export default SingleQuestion;
