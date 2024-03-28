import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/Header";
import UserAcca from "./components/UserAcca";
import ChooseUs from "./components/ChooseUs";
import Skills from "./components/Skills";
import Placement from "./components/Placement";
import Journey from "./components/Journey";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <UserAcca />
      <ChooseUs />
      <Skills />
      <Placement />
      <Journey />
    </>
  );
}

export default App;