import React from 'react';

const works = [
  { title: 'ブランドサイト', url: 'https://hanaemu.co.jp', desc: 'デザインディレクターより受注：Figma構築案件。' },
  { title: 'NPO法人リニューアル案', url: 'https://npo-tagayasu.o.oo7.jp/_next/',  desc: '個人受注：要件定義から完成まで。（公開待ち）' },
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
