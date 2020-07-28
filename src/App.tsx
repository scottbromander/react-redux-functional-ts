import React from 'react';
import './App.css';
import { Welcome } from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome
        name="Scott Bromander"
        position="Lead Instructor"
        location="Kansas City"
      />

      <Welcome
        name="Rachael Bromander"
        position="Head of Community Engagement"
        location="Kansas City"
      />

      <Welcome name="Jackson Bromander" position="Evangelist" />

      {/* NOTE THAT THIS LINE ERRORS WITH THE SPECIFIC ARGUMENTS ('props') THAT ARE MISSING */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
