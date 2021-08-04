import {useEffect} from 'react';
import Main from './components/MainComponent';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display', 'Chilanka']
      }
    });
  }, []);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
