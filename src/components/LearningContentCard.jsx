import React from "react";
import { Link } from "react-router-dom";

function LearningContentCard({ title, url, icon }) {
  return (
    <Link
      to={`/pembelajaran/${url}`}
      className="learning-content-card flex items-center gap-3"
    >
      <div className="lcc-icon max-24">{icon}</div>
      <div className="lcc-content">
        <h5 className="text-lg font-medium">{title}</h5>
      </div>
    </Link>
  );
}

export default LearningContentCard;
