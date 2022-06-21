import React from 'react';
import { useState } from 'react';

function ShortenLink() {
  const [link, setLink] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [noLinkError, setNoLinkError] = useState(false);
  const [invalidUrlError, setInvalidUrlError] = useState(false);

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const handleShortenLink = (e) => {
    e.preventDefault();
    if (!link) {
      setNoLinkError(true);
      setTimeout(() => {
        setNoLinkError(false);
      }, 2000);
    } else {
      // Link validation
      const fetchLink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${link}`
        );
        const data = await response.json();
        if (data.ok === true) {
          setShortenedUrls([...shortenedUrls, data.result]);
          setLink('');
        } else {
          setInvalidUrlError(true);
          setLink('');
          setTimeout(() => {
            setInvalidUrlError(false);
          }, 3000);
        }
      };
      fetchLink();
    }
  };

  return (
    <>
      <div className="relative bg-gray-100 pt-28">
        <section className="absolute -top-20 left-0 right-0 mx-6 rounded-xl bg-darkViolet bg-shorten-bg-mobile bg-cover bg-[left_4rem_top_-2.75rem] bg-no-repeat p-6 lg:-top-14 lg:mx-48 lg:p-10">
          <form
            className="flex flex-col justify-between gap-6 lg:flex-row"
            onSubmit={handleShortenLink}
          >
            <div className="lg:w-full">
              <input
                type="text"
                placeholder="Shorten a link here ..."
                className="h-12 w-full rounded-md p-2 drop-shadow-lg placeholder:text-grayishViolet focus:outline-redClr focus:placeholder:text-redClr focus:placeholder:opacity-60"
                onChange={handleLink}
                value={link}
              />
              {noLinkError && (
                <span className="italic text-red-400">Please add a link</span>
              )}
              {invalidUrlError && (
                <span className="italic text-red-400">
                  Please add a valid url to shorten
                </span>
              )}
            </div>
            <button
              onClick={handleShortenLink}
              className="h-12 w-full rounded-md bg-cyanClr py-2 text-lg font-bold text-white drop-shadow-lg transition-all duration-200 ease-in-out hover:bg-btnHover hover:opacity-95 lg:w-[30%] xl:w-[20%]"
            >
              Shorten It!
            </button>
          </form>
        </section>
        <section className="pb-6">
          {shortenedUrls.map((url) => {
            return (
              <div className="mx-6 mb-6 flex flex-col items-center justify-between gap-4 rounded-xl bg-white py-6 lg:mx-48">
                <h3
                  className="w-[90%] text-left text-lg font-semibold tracking-wide"
                  key={url.full_short_link}
                >
                  {url.original_link}
                </h3>
                <hr className="w-full border bg-slate-100" />
                <h3
                  className="w-[90%] text-left text-lg font-semibold tracking-wide text-cyanClr"
                  key={url.code}
                >
                  {url.short_link}
                </h3>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(url.short_link);
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 3000);
                  }}
                  className={isCopied ? 'copied-btn' : 'copy-btn'}
                >
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default ShortenLink;
