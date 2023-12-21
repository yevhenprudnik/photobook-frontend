import { Link } from 'react-router-dom';
import './photo-book.styles.scss';

const PhotoBook = () => {
  return (
    <div className='center'>
      <Link to='/select-template'>Create PhotoBook</Link>
    </div>
  );
};

export default PhotoBook;
