import { useState, useEffect } from "react";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import bgMobile from "../images/bg-shorten-mobile.svg";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

export default function Shortner() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [buttonText, setButtonText] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty!");
    } else {
      const shortenLink = async () => {
        const res = await fetch(
          `https://s.squizee.in/short/formResponse?url=${text}&email=&format=json`
        );
        const data = await res.json();
        console.log(data); //check for result in the console
        setLinks(data);
        setText("");
      };
      shortenLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links);
    setButtonText("Copied");
  };

  useEffect(() => {
    if (localStorage.getItem("exampleData")) {
      setLinks(JSON.parse(localStorage.getItem("exampleData")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <>
      <section className="max-width shortner relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="/" />
        </picture>
        <form className="form" onChange={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="url"
              placeholder="Shorten link here"
              className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
              onClick={handleSubmit}
            >
              Shorten It
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-3 rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{text}</h6>
          </article>

          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">
                  {links.data.shortened_url}
                </button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className="btn-cta rounded-lg text-sm focus:bg-slate-800
                        "
                >
                  {buttonText}
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
