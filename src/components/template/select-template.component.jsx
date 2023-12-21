import { useState } from 'react';
import { api } from '../../api/api';
import { Link } from 'react-router-dom';

const SelectTemplate = () => {
  const [templates, setTemplates] = useState([]);

  const handleGetTemplate = async () => {
    try {
      const { data } = await api.get('/template/');
      setTemplates(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useState(() => {
    handleGetTemplate();
  });

  return (
    <div className='grid-container'>
      {templates.map((element, index) => (
        <div key={index} className='grid-item'>
          <Link to={`/create-page/${element.id}`}>
            <button>{element.id}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SelectTemplate;
