import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
