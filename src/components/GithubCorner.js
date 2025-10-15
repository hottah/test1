import React from 'react';

export default function GithubCorner({ repoUrl = "https://github.com/hottah/test1" }) {
  return (
    <a
      href={repoUrl}
      className="gh-corner"
      target="_blank"
      rel="noreferrer"
      title="View source on GitHub"
      aria-label="View source on GitHub"
    >
      <span className="gh-corner-text">View Source</span>
    </a>
  );
}
