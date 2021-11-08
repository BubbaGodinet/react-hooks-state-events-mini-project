import React, { useState } from "react";

function CategoryFilter({CATEGORIES, handleCategoryClick}) {

  const category = CATEGORIES.map(category => <button className = {category} onClick = {handleCategoryClick} key = {category}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {category}
    </div>
  );
}

export default CategoryFilter;
