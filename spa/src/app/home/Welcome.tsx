import React from "react";

interface IProps {
    handleRegisterMode: () => void
}

const Welcome: React.FC<IProps> = ({handleRegisterMode}) => {
  return (
    <div className="text-center content">
      <h2 className="h2 mb-3">Read with us all season long</h2>
      <p className="mb-5">
        Chances are your friends are discussing their favorite (and least
        favorite) books on Read2Wake.
      </p>
      <h4 className="h4">New here? Create a free account!</h4>
      <button
        className="btn purple-gradient btn-rounded btn-lg mt-4"
        onClick={handleRegisterMode}
      >
        Register
      </button>
    </div>
  );
};

export default Welcome;
