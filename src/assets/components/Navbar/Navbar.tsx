import "./Navbar.scss";
import IconLink from "../IconLink/IconLink";
import { linksImage } from "../../data/links";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Plekson</span>
      <div className="navbar__links">
        {linksImage.map((link) => (
          <IconLink key={link.name} linkImage={link.image} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
