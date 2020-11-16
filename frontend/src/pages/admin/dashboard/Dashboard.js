import React from "react";
import { Container } from "react-bootstrap";
import Blog from "../blog/Blog";
import AdminNavbar from "../navbar/AdminNavbar";


const Dashboard = () => {

  return (
    <Container fluid className="p-0">
        <AdminNavbar/>
        <Blog/>
    </Container>
  );
};

export default Dashboard;
