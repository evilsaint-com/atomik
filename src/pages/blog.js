import { graphql } from "gatsby";
import React from "react"

const BlogPage = ({data}) => {
  console.log(data);
  return (
    <main>
      <h1>Blog</h1>
      <p>Blog page content</p>
    </main>
  );
};


export default BlogPage;

export const pageQuery = graphql`{
  site {
    siteMetadata {
      description
      siteUrl
      title
    }
  }
}
`;
