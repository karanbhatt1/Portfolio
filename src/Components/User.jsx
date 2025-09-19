import React from "react";
import { useParams } from 'react-router'
const User = () => {
  const {userid} = useParams();
  return (
    <div className="bg-white">
      <h1>Hello {userid}</h1>
    </div>
  );
};

export default User;
