import React from "react";
import { Link } from "react-router-dom";

function LearningContentCard({ title, icon }) {
  return (
    <Link
      to={"/pembelajaran"}
      className="learning-content-card flex items-center gap-2"
    >
      <div className="lcc-icon max-24">{icon}</div>
      <div className="lcc-content">
        <h5 className="text-lg">{title}</h5>
      </div>
    </Link>
  );
}

export default LearningContentCard;
