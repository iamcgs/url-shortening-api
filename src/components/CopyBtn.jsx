import React from 'react';
import { useState } from 'react';

function CopyBtn({ url }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <button
      onClick={() => {
        handleCopy(url.short_link);
      }}
      key={url.code}
      className={isCopied ? 'copied-btn' : 'copy-btn'}
    >
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default CopyBtn;
