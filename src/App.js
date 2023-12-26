import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/auth/authentication.component';
import PhotoBook from './components/photo-book/photo-book.component';
import SelectTemplate from './components/template/select-template.component';
import Page from './components/page/page.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='photo-book' element={<PhotoBook />} />
        <Route
          path='select-template/:photoBookId/:positionPage/'
          element={<SelectTemplate />}
        />
        <Route
          path='create-page/:photoBookId/:positionPage/:templateId/'
          element={<Page />}
        />
      </Route>
    </Routes>
  );
}

export default App;
