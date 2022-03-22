import React from 'react';
import blog from '../images/banner/blog.png'
import './blog.scss'

const BlogDetail = () => {
  return (
    <>
    <title>Blog Detail</title>
      <div className="blog-detail padding-x">
        <div className="blog-img">
          <img src={blog} alt="" />
        </div>
        <p className="datePosted">2 week ago</p>
        <p className="blogTitle">
          Parameter Changes, WSTETH-A Onboarding - October 22, 2021
        </p>
        <p className="blog-desc">
          The Polygon team proposes to authorize USDAO Labs to deploy USDAO
          protocol to Polygon PoS on behalf of the community.
        </p>
        <p className="blog-desc">
          We believe this is the right moment for USDAO to deploy on Polygon,
          for several major reasons:
        </p>
        <ul>
          <li className="blog-desc">
            Polygon PoS has the second strongest DeFi ecosystem, right after
            Ethereum L1;
          </li>
          <li className="blog-desc">
            Deploying to Polygon PoS can bring a lot of benefits (user base
            growth, huge savings for users, higher user activity, higher
            revenue, market capture, return to the original DeFi vision etc);
          </li>
          <li className="blog-desc">
            We are willing to incentivize USDAO adoption, financially and
            otherwise;
          </li>
          <li className="blog-desc">Polygon PoS is battle-tested;</li>
          <li className="blog-desc">
            Polygon is aligned with Ethereum and its values.
          </li>
        </ul>
        <p className="blog-desc">
          We respectfully submit this proposal for your consideration, and we
          are looking forward to your questions and feedback.
        </p>
        <p className="blog-desc">
          We would be willing to commit up to $20M for the aforementioned
          financial incentives, and we propose to use these funds in the
          following way:
        </p>
        <ul>
          <li className="blog-desc">
            Up to $15M for a long-term liquidity mining campaign;
          </li>
          <li className="blog-desc">
            Up to $5M towards the overall adoption of USDAO on Polygon.
          </li>
        </ul>
        <p className="blog-desc">
          In addition to the financial incentives we are offering will also be
          supporting the integration by:
        </p>
        <ul>
          <li className="blog-desc">
            Actively participate in the design and execution of liquidity mining
            campaigns;
          </li>
          <li className="blog-desc">
            Work with prominent projects in the Polygon DeFi ecosystem to help
            them understand the benefits of using USDAO V3 as a "money lego."
          </li>
          <li className="blog-desc">
            Promote USDAO as a "money lego" on hackathons and other
            developer-focused events and efforts etc.
          </li>
        </ul>

        <p className="blog-desc">
          The Polygon team proposes to authorize USDAO Labs to deploy USDAO
          protocol to Polygon PoS on behalf of the community.
        </p>

        <p className="blog-desc">
          We believe this is the right moment for USDAO to deploy on Polygon,
          for several major reasons:
        </p>

        <ul>
          <li className="blog-desc">
            Polygon PoS has the second strongest DeFi ecosystem, right after
            Ethereum L1;
          </li>
          <li className="blog-desc">
            Deploying to Polygon PoS can bring a lot of benefits (user base
            growth, huge savings for users, higher user activity, higher
            revenue, market capture, return to the original DeFi vision etc);
          </li>
          <li className="blog-desc">
            We are willing to incentivize USDAO adoption, financially and
            otherwise;
          </li>

          <li className="blog-desc">Polygon PoS is battle-tested</li>
          <li className="blog-desc">
            Polygon is aligned with Ethereum and its values.
          </li>
        </ul>

        <p className="blog-desc">
          We respectfully submit this proposal for your consideration, and we
          are looking forward to your questions and feedback.
        </p>

        <p className="blog-desc">
          We would be willing to commit up to $20M for the aforementioned
          financial incentives, and we propose to use these funds in the
          following way:
        </p>

        <ul>
          <li className="blog-desc">
            Up to $15M for a long-term liquidity mining campaign;
          </li>
          <li className="blog-desc">
            Up to $5M towards the overall adoption of USDAO on Polygon.
          </li>
        </ul>
      </div>
    </>
  );
}

export default BlogDetail
