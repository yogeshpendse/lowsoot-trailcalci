import { useState } from "react";
const Navbar = () => {
  const [state, setState] = useState(true);
  const handleclick = (state) => {
    setState(!state);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a className="navbar__brand" href="https://www.lowsoot.com">
          Lowsoot {JSON.stringify(state)}
        </a>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a className="navbar__dlink" href="https://www.lowsoot.com/about">
              about
            </a>
          </li>
          <li className="navbar__link">
            <a className="navbar__dlink" href="https://www.lowsoot.com/blog">
              blog
            </a>
          </li>
          <li className="navbar__link">
            <a
              className="navbar__dlink"
              href="https://www.lowsoot.com/business-carbon-neutrality-as-a-service"
            >
              SaaS
            </a>
          </li>
        </ul>
        <div className="navbar__togglebox">
          <button onClick={() => handleclick(state)} className="navbar__toggle">
            {state ? (
              <>
                <i className="bi bi-list"></i>{" "}
              </>
            ) : (
              <>
                <i className="bi bi-x"></i>
              </>
            )}
          </button>
        </div>
      </div>
      <div
        className={
          state ? "navbar__dropdown" : "navbar__dropdown navbar__dropdown--open"
        }
      >
        <ul className="navbar__dlinks">
          <li>
            <a className="navbar__dlink" href="https://www.lowsoot.com/about">
              about
            </a>
          </li>
          <li>
            <a className="navbar__dlink" href="https://www.lowsoot.com/blog">
              blog
            </a>
          </li>
          <li>
            <a
              className="navbar__dlink"
              href="https://www.lowsoot.com/business-carbon-neutrality-as-a-service"
            >
              SaaS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
