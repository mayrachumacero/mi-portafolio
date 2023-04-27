import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Portfolio</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/aboutme">
                <a className="nav-link active" aria-current="page">
                  Acerca de mi
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills">
                <a className="nav-link active" aria-current="page">
                 Habilidades 
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/project">
                <a className="nav-link active" aria-current="page">
                  Proyectos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/experience">
                <a className="nav-link active" aria-current="page">
                  Experiencia Laboral
                </a>
              </Link>
            </li><li className="nav-item">
              <Link href="/education">
                <a className="nav-link active" aria-current="page">
                  Educacion
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link active" aria-current="page">
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
