import React, { Fragment } from "react";
// router DOM
import { Route, Switch, useLocation } from "react-router-dom";
//components
import Home from "../pages/home/Home";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ScrollToTop from "../scrollRestoration/ScrollToTop";
import Bauschlussreinigung from "../pages/buildings/Bauschlussreinigung/Bauschlussreinigung";
import Bodensanierung from "../pages/buildings/Bodensanierung/Bodensanierung";
import Buildings from "../pages/buildings/Buildings";
import Fassadenreinigung from "../pages/buildings/Fassadenreinigung/Fassadenreinigung";
import Glasreinigung from "../pages/buildings/Glasreinigung/Glasreinigung";
import Graffitientfernung from "../pages/buildings/Graffitientfernung/Graffitientfernung";
import Hallenreinigung from "../pages/buildings/Hallenreinigung/Hallenreinigung";
import Haushaltsreinigung from "../pages/buildings/Haushaltsreinigung/Haushaltsreinigung";
import Schädlingsbekämpfung from "../pages/buildings/Schädlingsbekämpfung/Schädlingsbekämpfung";
import Sonderreinigung from "../pages/buildings/Sonderreinigung/Sonderreinigung";
import Treppenhausreinigung from "../pages/buildings/Treppenhausreinigung/Treppenhausreinigung";
import Unterhaltsreinigung from "../pages/buildings/Unterhaltsreinigung/Unterhaltsreinigung";
import Clinic from "../pages/clinic/Clinic";
import Krankenhausreinigung from "../pages/clinic/krankenhausreinigung/Krankenhausreinigung";
import Pflege from "../pages/clinic/pflege/Pflege";
import Pharmaproduktion from "../pages/clinic/pharmaproduktions/Pharmaproduktions";
import RehaEinrichtungen from "../pages/clinic/rehaeinrichtungen/RehaEinrichtungen";
import Reinraumreinigung from "../pages/clinic/reinraumreinigung/Reinraumreinigung";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/error/NotFound";
import AnlagenreinigungFood from "../pages/industrial/anlagenreinigung/AnlagenreinigungFood";
import AnlagenreinigungNonFood from "../pages/industrial/anlagenreinigungNFood/AnlagenreinigungNonFood";
import Industrial from "../pages/industrial/Industrial";
import Industriekletterarbeiten from "../pages/industrial/industriekletterarbeiten/Industriekletterarbeiten";
import Lüftungsreinigung from "../pages/industrial/lüftungsreinigung/Lüftungsreinigung";
import Overheadreinigung from "../pages/industrial/overheadreinigung/Overheadreinigung";
import Siloreinigung from "../pages/industrial/siloreinigung/Siloreinigung";
import Strahlverfahren from "../pages/industrial/strahlverfahren/Strahlverfahren";
import Agb from "../pages/info/agb/Agb";
import DataProtection from "../pages/info/data-protection/DataProtection";
import Imprint from "../pages/info/imprint/Imprint";
import ÜberUns from "../pages/info/uber/ÜberUns";

// admin
import ProtectRoute from "./ProtectRoute";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Gallery from "../pages/admin/gallery/Gallery";
import Login from "../pages/admin/login/Login";
import Galerie from "../pages/galerie/Galerie";
import Infonews from "../pages/infoNews/Infonews";
import Post from "../pages/post/Post"

const AllRoutes = (props) => {
  const location = useLocation();
  return (
    <Fragment>
      <ScrollToTop />
      <header>{location.pathname.match("/admin") ? null : <Header />}</header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Galerie} />
          <Route exact path="/actualities" component={Infonews} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/buildings" component={Buildings} />
          <Route exact path="/industriels" component={Industrial} />
          <Route exact path="/clinics" component={Clinic} />
          <Route exact path="/final-cleaning" component={Bauschlussreinigung} />
          <Route exact path="/soil-cleaning" component={Bodensanierung} />
          <Route exact path="/facade-cleaning" component={Fassadenreinigung} />
          <Route exact path="/glass-cleaning" component={Glasreinigung} />
          <Route
            exact
            path="/grafeti-cleaning"
            component={Graffitientfernung}
          />
          <Route exact path="/basic-cleaning" component={Sonderreinigung} />
          <Route exact path="/hall-cleaning" component={Hallenreinigung} />
          <Route exact path="/pest-control" component={Schädlingsbekämpfung} />
          <Route
            exact
            path="/maintenance-cleaning"
            component={Unterhaltsreinigung}
          />
          <Route
            exact
            path="/stairwell-cleaning"
            component={Treppenhausreinigung}
          />
          <Route exact path="/house-cleaning" component={Haushaltsreinigung} />
          <Route
            exact
            path="/plant-cleaning"
            component={AnlagenreinigungFood}
          />
          <Route
            exact
            path="/plant-cleaning-non-food"
            component={AnlagenreinigungNonFood}
          />
          <Route
            exact
            path="/industrial-Work"
            component={Industriekletterarbeiten}
          />
          <Route
            exact
            path="/ventilation-cleaning"
            component={Lüftungsreinigung}
          />
          <Route
            exact
            path="/overhead-cleaning"
            component={Overheadreinigung}
          />
          <Route exact path="/blasting-process" component={Strahlverfahren} />
          <Route exact path="/tank-cleaning" component={Siloreinigung} />
          <Route
            exact
            path="/hospital-cleaning"
            component={Krankenhausreinigung}
          />
          <Route exact path="/pharma-cleaning" component={Pharmaproduktion} />
          <Route exact path="/facilities" component={RehaEinrichtungen} />
          <Route exact path="/senior-facilities" component={Pflege} />
          <Route exact path="/room-cleaning" component={Reinraumreinigung} />
          <Route exact path="/about-us" component={ÜberUns} />
          <Route exact path="/data-protection" component={DataProtection} />
          <Route exact path="/imprint" component={Imprint} />
          <Route exact path="/agb" component={Agb} />
          <ProtectRoute exact path={"/admin"} component={Dashboard} />
          <ProtectRoute exact path={"/admin/galerie"} component={Gallery} />
          <Route exact path={"/admin/login"} component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <footer>{location.pathname.match("/admin") ? null : <Footer />}</footer>
    </Fragment>
  );
};

export default AllRoutes;
