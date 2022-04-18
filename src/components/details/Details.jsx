import React from "react";
import { useLocation } from "react-router-dom";

const Details = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;
  console.log(data)
  return (
    <div>
      Details
    </div>
  );
}

export default Details;
