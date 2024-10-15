import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SvgHtml from "../components/svg/SvgHtml";
import SvgCss from "../components/svg/SvgCss";
import SvgJavascript from "../components/svg/SvgJavascript";
import data from "../data/data.json";
import LearningContentCard from "../components/LearningContentCard";

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
      default:
        return null;
    }
  };
  return (
    <Layout>
      <section className="learning-content-container px-4 flex flex-col items-center gap-16">
        <h1 className="text-2xl">Konten Pembelajaran</h1>
        <ul className="learning-content-rapper flex items-center justify-between flex-wrap max-480 gap-6 mx-auto">
          {learningContent.map((item, index) => (
            <li key={index}>
              <LearningContentCard title={item.title} icon={renderIcon(item.icon)} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
