import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

const provider = createBrowserRouter(
  createRoutesFromElements(
    <Route path='suggestionsApp' element={<Header />}>
      <Route index element={<Home/>}/>
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
