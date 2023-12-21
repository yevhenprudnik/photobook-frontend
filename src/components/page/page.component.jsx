import { useEffect, useState } from 'react';
import './page.styles.scss';
import { uploadFile } from '../../firebase/firebase';
import { api } from '../../api/api';
import { useParams } from 'react-router-dom';

const Page = () => {
  const [text, setText] = useState('Your text');
  const [imgUrl, setImgUrl] = useState('');
  const [html, setHtml] = useState(``);
  const [htmlOriginal, setHtmlOriginal] = useState('');
  const { id } = useParams();

  console.log(id);
  const handleGetTemplate = async () => {
    try {
      const { data } = await api.get(`/template/${id}`);
      setHtml(data.html);
      setHtmlOriginal(data.html);
    } catch (error) {
      console.log(error.message);
    }
  };
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
  }, []);

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
      </div>
    </div>
  );
};

export default Page;
