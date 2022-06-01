import { Routes, Route } from "react-router-dom";
import IsAuthenticated from "./components/Auth/IsAuthenticated";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Main from "./components/Main";
import UserMoviesList from "./components/UserMoviesList";
function App() {
  return (
    <div>
      <main>
        <Header />
        <IsAuthenticated />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="list" element={<UserMoviesList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
