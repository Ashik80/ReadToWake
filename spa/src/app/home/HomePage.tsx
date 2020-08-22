import React, { useState } from "react";
import "./HomePage.css";
import Welcome from "./Welcome";
import RegisterForm from "./registerForm/RegisterForm";

const HomePage = () => {
  const [registerMode, setRegisterMode] = useState(false);

  const handleRegisterMode = () => {
    setRegisterMode(!registerMode);
  };

  return (
    <div className="home-page">
      {registerMode ? (
        <RegisterForm handleRegisterMode={handleRegisterMode} />
      ) : (
        <Welcome handleRegisterMode={handleRegisterMode} />
      )}
    </div>
  );
};

export default HomePage;
