import Footer from "./components/Footer";
import Header from "./components/Header";
import IsAuthenticated from "./components/IsAuthenticated";
import Principal from "./components/Main";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <main>
        <Header />
        <IsAuthenticated />
        <Search />
        <Principal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
