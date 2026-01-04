import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./contexts/GlobalContext";
import Routes from "./routes";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main className="main-content">
          <Routes />
        </main>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}
