import Layout from "../components/Layout";
import Link from "next/link";

import { Skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/mayra.jpeg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>PORTAFOLIO PERSONAL</h1>
              <h3>Univ. Mayra Elizabeth Chumacero Vargas</h3>
              <p>
              Hola, soy estudiante universitaria que implica desafios importantes a nivel personal 
              y social. El inicio de mi vida universitaria es la oportunidad para ingresar a una 
              organizacion y a una cultura especial, la cual se ira conociendo y aprendiendo en forma
              gradual. Desde mi prespectiva ser universitaria implica un desafio no solo ante los miedos
              que se me pueden presentar al cursar mi carrera, si no tambien frente a los discursos instalados
              en la sociedad que sostiene que esta instancia educativa de nivel superior y mi mayor desafio es 
              enfrentar dichos miedos y perjuicios al demostrarnos dia a dia que lo complejo no es imposible.
              </p>
              <Link href="/hireme">
                <a className="btn btn-outline-light">Mas Informacion</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

   
  </Layout>
);

export default Index;
