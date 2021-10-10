import React, { useEffect, useState } from 'react';

export const data = [
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
  'Minggu',
];
export default function CompVariant() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setUser('Nopik');
    }, 1000);
  }, []);
  return (
    <div>
      <input placeholder="input here" />
      <img src="/image.jpg" alt="user" />
      <div>{user ? <p>Selamat datang {user}</p> : null}</div>
      {data.map((hari, i) => (
        <p data-testid="hari" key={i}>
          {hari}
        </p>
      ))}
    </div>
  );
}
