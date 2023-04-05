import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const searchRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (searchRef.current.value.length < 6) {
      return alert("too short");
    }

    console.log("its longer than 6");
    navigate(`/details/${searchRef.current.value}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}action="">
        <input type="text" ref={searchRef} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Home;
