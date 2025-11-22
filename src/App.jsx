import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import Sidebar from './components/Sidebar';
import './index.css';
;

function App() {
  return (
    <>
      <Header />
      <Main>
		{/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- Movie List --> */}
          <MovieList />
	  </Main>
	  <Footer />
    </>
  );
}

export default App;
