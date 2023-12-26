import { useEffect, useState, useCallback } from 'react';
import './page.styles.scss';
import { uploadFile } from '../../firebase/firebase';
import { api } from '../../api/api';
import { Link, useParams } from 'react-router-dom';

const Page = () => {
  const [text, setText] = useState('Your text');
  const [imgUrl, setImgUrl] = useState('');
  const [html, setHtml] = useState(``);
  const [htmlOriginal, setHtmlOriginal] = useState('');
  const { templateId, positionPage, photoBookId } = useParams();

  const handleSendPage = async () => {
    try {
      const data = await api.post('/page', {
        position: positionPage,
        type: 'default',
        photobookId: photoBookId,
        templateId,
        replacements: {
          text1: text,
          img1: imgUrl,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGetTemplate = useCallback(async () => {
    try {
      const { data } = await api.get(`/template/${templateId}`);
      setHtml(data.html);
      setHtmlOriginal(data.html);
    } catch (error) {
      console.log(error.message);
    }
  }, [templateId]);

  const handleUploadFile = async (file) => {
    try {
      const img = await uploadFile(file);

      setImgUrl(img);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetTemplate();
  }, [handleGetTemplate]);

  useEffect(() => {
    const updatedHtml = htmlOriginal
      .replace(/img1/g, imgUrl)
      .replace(/text1/g, text);

    setHtml(updatedHtml);
  }, [htmlOriginal, imgUrl, text]);

  return (
    <div className='page-container'>
      <div className='input-container'>
        <input
          type='file'
          id='file-upload'
          className='file-upload-input'
          accept='image/png, image/jpg, image/gif, image/jpeg'
          onChange={(event) => {
            handleUploadFile(event.target.files[0]);
          }}
        />
        <input
          type='text'
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          className='text-input'
          placeholder='Write Text'
        />
      </div>
      <div className='center'>
        <div className='container-for-html'>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
            className='center'
          ></div>
        </div>
        <div className='link-container'>
          <Link
            to={`/select-template/${photoBookId}/${Number(positionPage) + 1}`}
          >
            <button onClick={handleSendPage}>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
