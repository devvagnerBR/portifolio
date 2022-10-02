import React from "react";
import styles from '../src/App.module.css'
import Routers_ from "./Routers/Routers_";
function App() {
  return (
    <div className={`${styles.animeLeft} ${styles.App} `}>
      <Routers_ />
    </div>
  );
}

export default App;

