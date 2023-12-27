import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Music from './components/Music';
import Anime from './components/Anime';
import Movies from './components/Movies'

const provider = createBrowserRouter(
  createRoutesFromElements(
    <Route path='suggestionsApp' element={<Header />}>
      <Route index element={<Home/>}/>
      <Route path='Music' element={<Music />}/>
      <Route path='Anime' element={<Anime />}/>
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
