import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import "./App.css";
import Campaigns from "./components/Campaigns/Campaigns";
import Blogs from "./components/Blogs/Blogs";
import Brands from "./components/Brands/Brands";
import CampaignSingle from "./components/CampaignSingle/CampaignSingle";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
    </>
  );
}

export default App;
