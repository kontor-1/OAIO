import "./style/App.css";
import Routes from "./components/app/Routes";
import Footer from "./components/UI/footer";
import Logo from "./components/UI/logo";
// import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className='app-header'>
        <Logo />
      </div>
      <div className='app-body'>
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
