import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
