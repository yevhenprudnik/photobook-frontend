import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/auth/authentication.component';
import PhotoBook from './components/photo-book/photo-book.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='photo-book' element={<PhotoBook />} />
      </Route>
    </Routes>
  );
}

export default App;
