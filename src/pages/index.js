import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useLayoutEffect } from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useLayoutEffect(() => {
    window.location.href = "/docs/intro";
  }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    ></Layout>
  );
}
