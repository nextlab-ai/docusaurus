import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useEffect } from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // useEffect(() => {
  //   window.location.href = "/docusaurus/docs/intro";
  // }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    ></Layout>
  );
}
