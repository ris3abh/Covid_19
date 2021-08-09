import {useEffect} from 'react';
import Main from './components/MainComponent';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display', 'Noto Serif', 'Noto Sans', 'Montserrat', 'Roboto']
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
