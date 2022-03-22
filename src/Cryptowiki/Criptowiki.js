import React from "react";
import BannerTwo from "../components/BannerTwo";
import NavProvider from "./Context/NavContext";
import "./cryptowiki.scss";
import Nav from "./nav/Nav";
import AllSections from './Sections/index'

const Criptowiki = () => {
  return (
    <div className="crypto-page">
      <BannerTwo
        highlightedTitle="CryptoWiki & Glossary"
        bannerTwoDesc="This encyclopedia is a valuable resource for understanding the language of the world of cryptocurrency and blockchain"
      />

      <div className="padding-x crypto-content-wrap">
        <p className="title-line">Explore</p>
      </div>

      <div className="padding-x cryptoContentSection">
        <NavProvider>
          <Nav />
          <AllSections />
        </NavProvider>
      </div>
    </div>
  );
};

export default Criptowiki;
