import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "emotion";
import styled, { css } from "react-emotion";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

injectGlobal`
  html, body {
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Roboto Light",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

const Wrapper = styled.section`
  align-items: center;
  background: #282a36;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <title>Gatsby MDX</title>
      <meta name="description" content="gatsby-mdx documentation" />
      <meta name="referrer" content="origin" />
    </Helmet>
    <Wrapper>
      <h1
        css={`
          font-size: 1.5em;
          color: #ff79c6;
          margin-bottom: 0.5em;

          a {
            color: #8be9fd;
          }
        `}
      >
        Gatsby MDX
      </h1>
      <p
        css={`
          color: #bd93f9;
        `}
      >
        <a
          href="https://github.com/mdx-js/mdx"
          css={css`
            color: inherit;
          `}
        >
          mdx docs
        </a>
      </p>
    </Wrapper>
  </Fragment>
);

export default IndexPage;
