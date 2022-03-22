import "./style.scss";
import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Governance from "./Governance/Governance";
import Asset from "./Asset-Token/Asset";
import Stablecoin from "./Stablecoin/Stablecoin";
import Ecosystem from "./Ecosystem/Ecosystem";
import ScrollToTop from "./Layout/ScrollToTop";
import Daogov from "./DAOGOV/Daogov";
import Contributors from "./Contributors/Contributors";
import Staking from "./Staking/Staking";
import MediaKit from "./Mediakit/MediaKit";
import Blog from "./Blog/Blog";
import BlogDetail from "./Blog/BlogDetail";
import Criptowiki from "./Cryptowiki/Criptowiki";

const Community = lazy(() => import("./Community/Community"));

function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <HashRouter hasType="hashbang">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/gov" element={<Governance />} />

          <Route path="/asset" element={<Asset />} />

          <Route path="/stablecoin" element={<Stablecoin />} />

          <Route path="/community" element={<Community />} />

          <Route path="/ecosystem" element={<Ecosystem />} />

          <Route path="/daogov" element={<Daogov />} />

          <Route path="/contributors" element={<Contributors />} />

          <Route path="/staking" element={<Staking />} />

          <Route path="/mediakit" element={<MediaKit />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/blog-detail" element={<BlogDetail />} />

          <Route path="/cryptowiki" element={<Criptowiki />} />

          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </HashRouter>
    </Suspense>
  );
}

export default App;
