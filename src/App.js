import Footer from "./components/Footer";
import Header from "./components/Header";
import IsAuthenticated from "./components/IsAuthenticated";
import Principal from "./components/Main";

function App() {
  return (
    <div>
      <main>
        <Header />
        <IsAuthenticated />
        <Principal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
