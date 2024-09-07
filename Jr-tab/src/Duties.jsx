import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        console.log(uuidv4());
        return (
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            {duty}
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
