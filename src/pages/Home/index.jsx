import React from 'react';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/blogList';
const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
