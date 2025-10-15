import React from 'react';

const works = [
  { title: 'Project A', desc: 'React SPA サンプル' },
  { title: 'Project B', desc: 'Node.js API と連携' },
  { title: 'Project C', desc: 'デザイン・UIコンポーネント' },
];

export default function Works() {
  return (
    <section>
      <h2>Works</h2>
      <ul className="works">
        {works.map((w) => (
          <li key={w.title}>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
