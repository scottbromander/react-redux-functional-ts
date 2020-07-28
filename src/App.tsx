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

      <Welcome
        name="Jackson Bromander"
        position="Evangelist"
        children={
          <div>
            <h5>Snack Master</h5>
            <p>Jackson is a snack connoisseur. He currently likes Cheetos.</p>
          </div>
        }
      />

      {/* NOTE THAT THIS LINE ERRORS WITH THE SPECIFIC ARGUMENTS ('props') THAT ARE MISSING */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
