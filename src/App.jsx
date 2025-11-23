import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Sidebar from './components/Sidebar';
import { MovieContext } from "./context";
import './index.css';
;

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  return (
    <>
    <MovieContext.Provider value={{ cartDetails, setCartDetails }}>
        <Header />
        <Main>
      {/* <!-- Sidebar --> */}
            <Sidebar />
            {/* <!-- Movie List --> */}
            <MovieList />
      </Main>
      <Footer />
    </MovieContext.Provider>
    </>
  );
}

export default App;
