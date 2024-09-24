import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigator = useNavigate();
  return (
    <div>
      <button onClick={()=>navigator('/crud')}>Submit</button>
    </div>
  );
};

export default Login;
