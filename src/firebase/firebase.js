import { initializeApp } from 'firebase/app';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { v4 } from 'uuid';

const firebaseConfig = {
  apiKey: 'AIzaSyCGpSt8G0NW0QiED57U5uR6vcXnEE2yuNw',
  authDomain: 'photo-book-e481e.firebaseapp.com',
  projectId: 'photo-book-e481e',
  storageBucket: 'photo-book-e481e.appspot.com',
  messagingSenderId: '1045916392031',
  appId: '1:1045916392031:web:0e245b6c1ef339334e99ea',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadFile = async (file) => {
  if (file === null) return;

  const imageRef = ref(storage, `images/${file.name + v4()}`);

  const snapshot = await uploadBytes(imageRef, file);

  const url = await getDownloadURL(snapshot.ref);

  return url;
};
