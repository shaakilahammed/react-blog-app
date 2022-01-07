import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/blogList';
const Home = () => {
  const [Blogs, setBlogs] = useState(blogList);
  const [SearchKey, setSearchKey] = useState('');

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResult(e);
  };

  const handleSearchResult = (e) => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setBlogs(!e.target.value.length ? blogList : filteredBlogs);
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={SearchKey}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        formSubmit={handleSearchSubmit}
      />
      {!Blogs.length ? <EmptyList /> : <BlogList blogs={Blogs} />}
    </div>
  );
};

export default Home;
