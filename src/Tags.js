import React from 'react';

// Tags component
function Tags({ tags }) {
    //the Tags component receives a tags prop, which is an array of strings
    const defaultTags = ['boomdotdev', 'task', 'tags', 'react'];
   // const allTags = tags || defaultTags;
    //If the tags prop is not provided, the component will use the default tags specified in the defaultTags array.
  
    return (
      <div className="tags">
        {defaultTags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    );
  }
  ReactDOM.render(<Tags />, document.getElementById('root'));
  export default Tags;
