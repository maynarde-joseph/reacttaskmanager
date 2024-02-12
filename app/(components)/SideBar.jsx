import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className="sidebar">
      <div className="flex">
        <FontAwesomeIcon icon={faList} />
        <h3>Categories</h3>
      </div>
      <ul>
        <li onClick={() => onSelectCategory(null)}>All</li>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
