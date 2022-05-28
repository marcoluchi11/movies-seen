import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Principal from "./components/Main";

function App() {
  return (
    <div>
      <main>
        <Header />
        <Login />
        <Principal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
