import { Link } from 'react-router-dom';
import { useState } from 'react';
import './photo-book.styles.scss';
import { api } from '../../api/api';

const PhotoBook = () => {
  const [photoBookName, setPhotoBookName] = useState('');
  const [photoBookId, setPhotoBookId] = useState();

  const handleCreatePhotoBook = async () => {
    try {
      const { data } = await api.post('/photobook', {
        name: photoBookName,
      });
      setPhotoBookId(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='center'>
      <div className='input-section'>
        <label>Write name of the photo book:</label>
        <input
          id='photoBookName'
          type='text'
          value={photoBookName}
          onChange={(event) => {
            setPhotoBookName(event.target.value);
          }}
          className='text-input'
          placeholder='Write Text'
        />
      </div>
      <div className='button-section'>
        <button
          onClick={handleCreatePhotoBook}
          disabled={!photoBookName.trim()}
        >
          Create PhotoBook
        </button>
      </div>
      <Link to={photoBookId ? `/select-template/${photoBookId}/${1}` : '#'}>
        Select Template
      </Link>
    </div>
  );
};

export default PhotoBook;
