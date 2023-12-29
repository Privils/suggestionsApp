import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
<<<<<<< HEAD
import Anime from './components/Anime';
import Movies from './components/Movies';
import Music from './components/Music';
=======
import Music from './components/Music';
import Anime from './components/Anime';
import Movies from './components/Movies'
>>>>>>> f0ac748138905d4f21236b15d199a5cbab5a4198

const provider = createBrowserRouter(
  createRoutesFromElements(
    <Route path='suggestionsApp' element={<Header />}>
      <Route index element={<Home/>}/>
<<<<<<< HEAD
      <Route path='Anime' element={<Anime />}/>
      <Route path='Movies' element={<Movies />}/>
      <Route path='Music' element={<Music/>}/>
=======
      <Route path='Music' element={<Music />}/>
      <Route path='Anime' element={<Anime />}/>
>>>>>>> f0ac748138905d4f21236b15d199a5cbab5a4198
    </Route>
  )
)
function App() {
  return (
<>
<RouterProvider router={provider}/>
</>
  );
}

export default App;
