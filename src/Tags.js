import React from "react";

const Tags = (props) => {
  const { tags } = props;
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag">#{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
