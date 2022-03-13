import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Laoder from './components/uz/Laoder';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true)
        await axios.get("http://localhost:5000/api/post")
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPost()
  }, [])

  return (
    <div>
      {
        loading ?
          <Laoder />
          :
          <AppRouter />
      }
    </div>
  );
}

export default App;
