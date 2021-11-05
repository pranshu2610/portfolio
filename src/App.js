import React, {useState} from 'react'
import './App.scss';
import DarkMode from './components/darkmode/darkmode';
import TextProfile from './components/text-profile/text-profile';
import VisualProfile from './components/visual-profile/visual-profile';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  return (
    <div className={`App ${!isDarkMode?'darkmodebg':''}`}>
      <TextProfile />
      <VisualProfile darkmode={isDarkMode}/>
      <DarkMode
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  );
}

export default App;
