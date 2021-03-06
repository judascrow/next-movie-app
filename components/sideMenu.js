import React from "react";

const SideMenu = (props) => {
  const { appName } = props;
  return (
    <div>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
