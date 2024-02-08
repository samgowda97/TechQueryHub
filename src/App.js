import { RouterProvider } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './Components/WelcomeScreen';
import { router } from './library/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <WelcomeScreen/>
    </div>
  );
}

export default App;
