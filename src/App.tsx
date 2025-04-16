import Footer from "./components/Footer";
import Header from "./components/Header";
import MatchPage from "./pages/MatchPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MatchPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
