import React, { useState } from 'react';

export default function UserEvent({ onSubmit }) {
  const [keyword, setKeyword] = useState('');
  console.log(keyword);
  // const onSubmit = () => {
  //   console.log('Call API');
  // };
  return (
    <div>
      <p>Sedang mengetik {keyword}</p>
      <input
        placeholder="Ketik disini"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p data-testid="text-submit" onClick={onSubmit}>
        Submit
      </p>
    </div>
  );
}
