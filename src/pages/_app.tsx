import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
