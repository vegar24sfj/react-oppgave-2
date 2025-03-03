import "./App.css";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <h1>React Oppgave 2</h1>
      <CookieClicker />
      <CatFacts />
      <Users />
    </div>
  );
};

export default App;