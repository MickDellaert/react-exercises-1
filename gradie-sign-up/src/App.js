import "./App.css";
import { HeaderTitle } from "./components/HeaderTitle/HeaderTitle.jsx";
import { SubHeaderTitle } from "./components/SubHeaderTitle/SubHeaderTitle.jsx";

function App() {
  return (
    <header>
      <div className="login-form-container">
          <HeaderTitle />
          <SubHeaderTitle/>
      </div>
    </header>
  );
}

export default App;
