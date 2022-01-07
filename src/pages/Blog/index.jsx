import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { blogList } from '../../config/blogList';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
const Blog = () => {
  const { id } = useParams();
  const [Blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div>
      <Link className="blog-goBack" to={'/'}>
        <span>&#8592;</span> Go Back
      </Link>

      {Blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {Blog.createdAt}</p>
            <h1>{Blog.title}</h1>
            <div className="blog-subCategory">
              {Blog.subCategory.map((category, index) => (
                <div key={index}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={Blog.cover} alt="cover" />
          <p className="blog-desc">{Blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
