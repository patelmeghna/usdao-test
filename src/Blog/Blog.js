import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BannerTwo from '../components/BannerTwo';
import './blog.scss';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className="blog-page">
    <title>Blog</title>
      <BannerTwo highlightedTitle="USDAO" bannerTwoTitle="Latest News" />

      <div className="blog-section padding-x">
        <div className="blog-wrap">
          <Row className="g-5">
            <Col md={6} lg={6} xl={4}>
              <BlogCard />
            </Col>

            <Col md={6} lg={6} xl={4}>
              <BlogCard />
            </Col>

            <Col md={6} lg={6} xl={4}>
              <BlogCard />
            </Col>

            <Col md={6} lg={6} xl={4}>
              <BlogCard />
            </Col>

            <Col md={6} lg={6} xl={4}>
              <BlogCard />
            </Col>

            <Col md={6} lg={6} xl={4}>
              <BlogCard />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Blog