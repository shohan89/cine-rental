import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import './index.css';
;

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* <!-- Sidebar --> */}
          <Sidebar />

          {/* <!-- Content --> */}
          
        </div>
      </main>
    </>
  );
}

export default App;
