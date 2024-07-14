import "components/Footer/footer.scss";
import { Link } from "react-router-dom";
import { socialFooterLinks } from "constants/header";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="commonSection">
          <div className="container">
            <div className="footerData">
              <div className="footerDataName">
                <h2>Yogesh Senthilkumar</h2>
                <p>
                  A Frontend focused Web Developer building the Frontend of
                  Websites and Web Applications that leads to the success of the
                  overall product
                </p>
              </div>
              <div className="footerDataIcons">
                <span>Social</span>
                <ul>
                  {socialFooterLinks.map((item, index) => (
                    <li className="socialIconsList" key={index}>
                      <Link to={item?.linkTo} target="_blank">
                        <img src={item?.image} alt="socialFooterIcons" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyRights">
          <span>© Copyright 2024 . Made by Yogesh Senthilkumar</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
