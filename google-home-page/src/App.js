import './App.css';
import { FooterContainer } from './Components/footer/FooterContainer/FooterContainer';
import { HeaderContainer } from './Components/header/HeaderContainer/HeaderContainer';
import NavigationContainer from './Components/Nav/NavigationContainer/NavigationContainer';

function App() {
  return (
    <div className="App">
      <NavigationContainer/>
      <HeaderContainer/>
      <FooterContainer/>    
    </div>
  );
}

export default App;
