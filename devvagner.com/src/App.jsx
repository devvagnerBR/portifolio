import styles from '../src/GlobalStyle.module.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routers from './Routes/Routers';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routers />
    </div>
  );
}

export default App;
