import React from 'react';

const works = [
  { title: '個人受注：要件定義、設計、コーティング。', url: 'https://nailsalon-garnet.com', desc: 'ネイルサロン' },
  { title: '個人受注：要件定義、設計、コーティング。（公開待ち）', url: 'https://npo-tagayasu.o.oo7.jp/_next/',  desc: 'NPO法人リニューアル案' },
];

export default function Works() {
  return (
    <section>
      <h2>Works</h2>
      <ul className="works">
        {works.map((w) => (
          <li key={w.title}>
            <h3>{w.title}</h3>
            <p><a href={w.url} target="_blank" rel="noreferrer">{w.desc}</a></p>
          </li>
        ))}
      </ul>
    </section>
  );
}
