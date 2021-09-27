import Body from "./components/body";
import Footer from "./components/footer";
import Mid from "./components/mid";
import Navbar from "./components/navbar";
import "./styles/output.css";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Mid />
      <Footer />
    </div>
  );
}

export default App;
