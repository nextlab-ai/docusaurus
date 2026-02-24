import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useLayoutEffect } from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useLayoutEffect(() => {
    window.location.href = "/docs/n-series/intro";

    if (window.location.pathname === "/docs/intro") {
      window.location.href = "/docs/n-series/intro";
    }
  }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    ></Layout>
  );
}
