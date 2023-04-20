import Search  from "./components/search"
import Posts from './components/posts';
import { useEffect, useState } from 'react';
function Lagouts() {
  const [posts, setPosts] = useState([]);
  const [query,setQuery] = useState("");
  const [color, setColor] = useState('text-dark bg-light');
  const handleSearch = (value) => {
    setQuery(value);
  };
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [query]);
  const changeColor = () => {
    setColor('text-white bg-primary');
  };
  return (
    <div className="Layouts">
        <Search onSearch={handleSearch} />
        <Posts posts={posts} color={color} /> 
        <div className="d-flex justify-content-end m-5">
          <button className="btn btn-primary" onClick={changeColor}>Change Color</button>
        </div>

    </div>
  );
}

export default Lagouts;
