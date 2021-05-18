import React from 'react'
import './App.scss';
import TextProfile from './components/text-profile/text-profile';
import VisualProfile from './components/visual-profile/visual-profile';
function App() {
  return (
    <div className="App">
      <TextProfile />
      <VisualProfile/>
    </div>
  );
}

export default App;
