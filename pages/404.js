import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Mi portafolio personal">
    <div className="text-center">
      <h1 className="display-1">HOLA</h1>
      <p>
        Para mas Informacion  {" "}
        <Link href="/">
          <a>Atras</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
