import './App.css'
import Experience from './view/Experience';
import Profile from './view/Profile'
import Skill from './view/Skill';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Profile/>
      <Skill/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
