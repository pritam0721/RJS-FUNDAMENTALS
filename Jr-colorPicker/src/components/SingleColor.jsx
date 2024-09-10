import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        toast.success('Successfully copied');
      } catch (error) {
        toast.error('Failed to copy from the clipboard');
      }
    } else {
      toast.error('clipboard access not available');
    }
  };
  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
