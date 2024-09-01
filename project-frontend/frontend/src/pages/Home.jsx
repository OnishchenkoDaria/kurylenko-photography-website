import React from "react";
import PostDisplayMain from "../components/blog/PostDisplayMain.jsx";
import HomeHeader from "../components/homepage/HomeHeader.jsx";
import PhotographerExperience from "../components/homepage/PhotographerExperience.jsx";
import PostCreate from "../components/blog/PostCreate.jsx";
import ImageCarousel from "../components/homepage/ImageCarousel.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import PathConstants from "../routes/pathConstants";

const Home = () => {
  return (
    <div className="d-block">
      <HomeHeader />
      <div className="d-flex justify-content-center mt-5">
        <PostCreate />
      </div>
      <ImageCarousel />
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={8}>
          <div className="d-grid gap-2 mx-5">
            <Button variant="success" size="lg">
              <Link to={PathConstants.PAYMENT} className='text-decoration-none text-white'>Buy Photoshoot</Link>
            </Button>
          </div>
        </Col>
      </Row>
      <PostDisplayMain />
      <PhotographerExperience />
    </div>
  );
};
export default Home;
