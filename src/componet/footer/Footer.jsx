import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from './express-logo.png'; 
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
          <img src={logo} alt="Upfront Courier Logo" className="logo-img" />
            <p className="footer-description">
              We are a representative logistics operator providing a full range of services in the sphere of customs cargo and transportation worldwide.
            </p>
          </Col>

          <Col md={2}>
            <h5 style={{color:'orangered', fontWeight:800}}>Product</h5>
            <ul className="footer-list">
              <li>Track Shipment</li>
              <li>Inventory Control</li>
              <li>Pick with your mobile device</li>
              <li>Analytics and forecasting</li>
              <li>Marketplace</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 style={{color:'orangered', fontWeight:800}}>Integrations</h5>
            <ul className="footer-list">
              <li>Shipping integrations</li>
              <li>Ecommerce integrations</li>
              <li>Marketplace integrations</li>
              <li>All integrations</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 style={{color:'orangered', fontWeight:800}}>Company</h5>
            <ul className="footer-list">
              <li>About</li>
              <li>Contact Us</li>
              {/* <li>API & developer</li> */}
              <li>Careers</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 style={{color:'orangered', fontWeight:800}}>Resources</h5>
            <ul className="footer-list">
              <li>Inventory management</li>
              <li>Shipping guide</li>
              <li>Warehouse management</li>
              <li>Blog</li>
              <li>Customer stories</li>
              {/* <li>Webinars</li> */}
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={6}>
            <p className="footer-copyright">
              © ExpressWings Courier. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="footer-contact">
            <p>Support@expresswings.com</p>
            <FontAwesomeIcon icon={faEnvelope} className="footer-email-icon" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
