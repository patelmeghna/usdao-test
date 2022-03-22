import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/blog.png'

const BlogCard = () => {
  return (
    <Link to="/blog-detail" className="blogCard">
      <div className="blog-img-wrap">
        <img src={img} alt="" />
      </div>

      <div className="blog-info">
        <p className="datePosted">20 Oct, 2021</p>
        <p className="blog-title">USDAO Has Come Full Circle</p>
        <p className="blog-desc">
          Simply deposit 1 USDAO (Stable Coin) to your account to begin staking.
          Simply deposit 1 USDAO (Stable Coin) to your account to begin
          stakingCoin) to your account to begin staking. Simply deposit 1 USDAO
          (Stable Coin) to your account to begin staking.
        </p>
      </div>
    </Link>
  );
}

export default BlogCard