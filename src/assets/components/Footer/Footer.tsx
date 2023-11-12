import { linksImage } from "../../data/links";
import IconLink from "../IconLink/IconLink";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__links">
        {linksImage.map((link) => (
          <IconLink key={link.name} linkImage={link.image} url={link.url} />
        ))}
      </div>
      <div className="footer__copyright">
        <h6>Piotr Lubecki</h6>
        <h6>Copyright &copy; {year}. All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
