import { StoreDemo } from "./views/storedemo";
import { SingleItem } from "./views/singleitem";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Details } from "./views/details";
import { Favorites } from "./views/favorites";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BackToTop from "./components/backToTop";
import PropTypes from "prop-types";

// Define BackToTopWrapper fuera del componente App
function BackToTopWrapper({ children }) {
  const location = useLocation();
  return <BackToTop location={location}>{children}</BackToTop>;
}

BackToTopWrapper.propTypes = {
  children: PropTypes.node
};

const App = () => {
  const basename = import.meta.env.VITE_BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <BackToTopWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:type/:id" element={<Details />} />
            <Route path="/demo" element={<StoreDemo />} />
            <Route path="/single/:theid" element={<SingleItem />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </BackToTopWrapper>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);