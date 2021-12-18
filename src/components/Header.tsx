import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container py-3">
          <Link href="/">
            <a className="navbar-brand">Aesthetics in Jewelry</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="navbar-text">
              Let&apos;s find you some amazing jewelry!
            </span>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" aria-current="page">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/exceptionals">
                  <a className="nav-link" aria-current="page">
                    Exceptionals
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/birthstones">
                  <a className="nav-link" aria-current="page">
                    Birthstones
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services">
                  <a className="nav-link" aria-current="page">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/visit">
                  <a className="nav-link" aria-current="page">
                    Visit Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
