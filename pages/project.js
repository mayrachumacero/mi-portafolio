import Layout from "../components/Layout";
import Link from "next/link";

import { Skills, experiences, projects } from "../profile";

const proyect = () => (
  <Layout>
    {/* Header Card */}
    
    {/* Second section */}

    <section className="row py-2">
      

      <div className="col-md-8 py-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Proyectos</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                  El proyecto esta en su fase de desarrollo en la parte de los circuitos electronicos y diseño del modelo
                  </p>
                  <p>
                  En etapa de diseño, haciendo ajustes para incluir funcionalidades nuevas. Proyecto de grado interdisciplinar e interinstitucional
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/hireme">
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* Porfolio */}
  </Layout>
);

export default proyect;
