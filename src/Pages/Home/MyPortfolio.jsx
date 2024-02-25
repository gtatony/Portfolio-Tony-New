import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
        <a href="https://github.com/gtatony" className="btn btn-github">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.383 0 0 5.383 0 12c0 5.303 3.438 9.801 8.208 11.385.6.111.793-.261.793-.577 0-.285-.01-1.236-.015-2.246-3.338.724-4.042-1.613-4.042-1.613-.545-1.386-1.333-1.754-1.333-1.754-1.088-.744.083-.729.083-.729 1.205.084 1.838 1.234 1.838 1.234 1.07 1.834 2.807 1.304 3.493.998.108-.775.416-1.305.757-1.605-2.657-.3-5.457-1.317-5.457-5.847 0-1.291.462-2.344 1.234-3.17-.125-.301-.536-1.501.117-3.123 0 0 1.002-.317 3.285 1.209.953-.264 1.973-.396 2.982-.4 1.009.004 2.029.136 2.982.4 2.281-1.526 3.282-1.209 3.282-1.209.655 1.622.244 2.822.119 3.123.771.826 1.232 1.879 1.232 3.17 0 4.541-2.805 5.543-5.468 5.836.429.366.812 1.089.812 2.199 0 1.588-.014 2.867-.014 3.258 0 .32.19.694.8.576C20.565 21.797 24 17.302 24 12c0-6.617-5.383-12-12-12z" fill="currentColor"/>
  </svg>

  Visit My GitHub
</a>
        </div>
      </div>
      {/* <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
