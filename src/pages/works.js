import React from 'react';

const works = [
  { title: 'Project A', desc: 'React SPA サンプル', url: '#' },
  { title: 'Project B', desc: 'Node.js API と連携', url: '#' },
  { title: 'Project C', desc: 'デザイン・UIコンポーネント', url: '#' },
];

export default function Works() {
  return (
    <section>
      <h2>Works</h2>
      <ul className="works">
        {works.map((w) => (
          <li key={w.title}>
            <h3>{w.title}</h3>
            <a href={w.url} target="_blank">{w.desc}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
