import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SvgHtml from "../components/svg/SvgHtml";
import SvgCss from "../components/svg/SvgCss";
import SvgJavascript from "../components/svg/SvgJavascript";
import SvgGit from "../components/svg/SvgGit";

import data from "../data/data.json";
import LearningContentCard from "../components/LearningContentCard";
import SvgReact from "../components/svg/SvgReact";
import SvgReactRouter from "../components/svg/SvgReactRouter";
import SvgVercell from "../components/svg/SvgVercell";

function Home() {
  const [learningContent, setLearningContent] = useState([]);

  useEffect(() => {
    setLearningContent(data);
  }, []);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "html":
        return <SvgHtml />;
      case "css":
        return <SvgCss />;
      case "javascript":
        return <SvgJavascript />;
      case "git":
        return <SvgGit />;
      case "react":
        return <SvgReact />;
      case "react-router":
        return <SvgReactRouter />;
      case "vercell":
        return <SvgVercell />;
      default:
        return null;
    }
  };
  return (
    <Layout>
      <section className="learning-content-container px-4 flex flex-col items-center gap-16">
        <div className="container-fluid mx-auto">
          <h1 className="text-4xl text-center font-bold">
            Konten Pembelajaran
          </h1>
          <ul className="learning-content-rapper flex items-center justify-center flex-wrap max-1024 gap-8 mx-auto mt-12">
            {learningContent.map((item, index) => (
              <li key={index}>
                <LearningContentCard
                  url={item.subject}
                  title={item.title}
                  icon={renderIcon(item.icon)}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
