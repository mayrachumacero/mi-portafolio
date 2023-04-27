import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Mayra Elizabeth Chumacero Vargas</h1>
            <p>Para mas informacion te dejo enlaces de mis perfiles</p>
            <a href=""> <img src ="contacto.jpg" width ="30px" alt=""/></a>
            <a href="https://www.facebook.com/"> <img src ="facebook.jpg" width ="30px" alt=""/></a>
            <a href="https://wa.me/+59178479171"> <img src ="whatsapp.jpg" width ="45px" alt=""/></a>
            <a href="https://www.instagram.com/"> <img src ="instagram.jpg" width ="30px" alt=""/></a>
            <a href="https://github.com/"> <img src ="github.png" width ="40px" alt=""/></a>
          </div>
        </footer>
      )}
    </div>
  );
};


Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};


export default Layout;
