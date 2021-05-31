import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Layout from "../components/Layout";

const NEXT_PUBLIC_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGA.initialize(NEXT_PUBLIC_GOOGLE_ANALYTICS);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
