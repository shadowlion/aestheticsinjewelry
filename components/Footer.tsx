import Nav from "react-bootstrap/Nav";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6">
            <h2>Come Visit Us!</h2>
            <a
              href="https://www.google.com/maps/place/410+W+Chestnut+St,+Louisville,+KY+40202/@38.2488751,-85.7606713,17z/data=!3m1!4b1!4m5!3m4!1s0x886972afaf855dd3:0x7fda89111b43c510!8m2!3d38.2488751!4d-85.7584826"
              target="_blank"
              rel="noreferrer"
            >
              <address>
                410 West Chestnut Street
                <br />
                Suite 634
                <br />
                Louisville, KY 40202
              </address>
            </a>

            <address>
              M-F: 10:00am - 4:00pm
              <br />
              Sat: 10:00am - 3:00pm
              <br />
              Sun: Closed
              <br />
            </address>
          </div>
          <div className="col-md-6">
            <h2>Or Contact Us Here:</h2>
            <ContactForm />
          </div>
        </div>
        <hr />
        <Nav className="flex-column flex-md-row justify-content-md-center">
          <Nav.Item>
            <span className="nav-link">
              <a href="tel:5025892728">(502) 589-2728</a>
            </span>
          </Nav.Item>
          <Nav.Item>
            <span className="nav-link">
              <a href="mailto:info@aestheticsinjewelry.com">
                info@aestheticsinjewelry.com
              </a>
            </span>
          </Nav.Item>
          <Nav.Item>
            <span className="nav-link">Fax: (502) 589-0209</span>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://www.youtube.com/channel/UCnsJN9wV4YbptB8NmlXFVaQ"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              Youtube
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://www.facebook.com/aestheticsinjewelry/"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              Facebook
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://www.instagram.com/aestheticsinjewel/"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              Instagram
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://g.page/aestheticsinjewelry"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              Our Business Page
            </a>
          </Nav.Item>
        </Nav>
        <hr />
        <div className="text-center">
          &#169; {new Date().getFullYear()} Aesthetics in Jewelry
        </div>
      </div>
    </footer>
  );
};

export default Footer;
