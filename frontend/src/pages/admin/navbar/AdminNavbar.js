import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "../../../assets/images/home.png";
import cameraIcon from "../../../assets/images/camera.svg";
import logoutIcon from "../../../assets/images/logout.png";
import blogging from "../../../assets/images/post.png";
import AuthContext from "../../../context/auth/authContext";
import "./navbar.css";

const AdminNavbar = () => {
  const authContext = useContext(AuthContext);

  const { logout, isAuthenticated } = authContext;

  const Onlogout = () => {
    logout();
  };

  const checkAuthentication = (jsx) => {
    if (isAuthenticated) {
      return jsx;
    }
  };

  return (
    <Container fluid className="p-0">
      <Navbar className="nav-border" expand="lg">
        <Link to="/">
          <img className="home-dashboard" src={HomeIcon} alt="home icon" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {checkAuthentication(
            <Nav className="ml-5">
              <Link className="nav-link mr-2" to="/admin">
                <img className="navIcon" src={blogging} alt="camera icon" />
              </Link>

              <Link className="nav-link" to="/admin/galerie">
                <img className="navIcon" src={cameraIcon} alt="camera icon" />
              </Link>
            </Nav>
          )}

          <Nav className="ml-auto">
            {checkAuthentication(
              <Link
                to="/admin/login"
                className="nav-link"
                onClick={() => Onlogout()}
              >
                <img className="logout" src={logoutIcon} alt="logout icon" />
                <span className="ausloggen">ausloggen </span>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default AdminNavbar;
