/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ContentLoader from "react-content-loader";

function MyLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={195}
      viewBox="0 0 280 195"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="13" rx="3" ry="3" width="52" height="6" />
      <rect x="1" y="54" rx="3" ry="3" width="207" height="3" />
      <rect x="2" y="74" rx="3" ry="3" width="205" height="3" />
      <rect x="0" y="33" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="109" r="20" />
      <rect x="60" y="13" rx="3" ry="3" width="52" height="6" />
      <rect x="1" y="64" rx="3" ry="3" width="207" height="3" />
      <rect x="49" y="104" rx="3" ry="3" width="66" height="8" />
    </ContentLoader>
  );
}

export default MyLoader;
