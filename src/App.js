import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Anime from './components/Anime';
import Movies from './components/Movies';
import Music from './components/Music';

const provider = createBrowserRouter(
  createRoutesFromElements(
    <Route path='suggestionsApp' element={<Header />}>
      <Route index element={<Home/>}/>
      <Route path='Anime' element={<Anime />}/>
      <Route path='Movies' element={<Movies />}/>
      <Route path='Music' element={<Music/>}/>
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
