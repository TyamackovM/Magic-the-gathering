const React = require('react');

module.exports = function Layout({
  children, newUser, newUserCity, newUserID, userCards,
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        <link rel="stylesheet" href="styles/main.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="styles/personalArea.css" />
        <link rel="stylesheet" href="/styles/itc-slider.css" />
        <script src="/js/itc-slider.js" defer />
        <script defer src="/js/basketAdd.js" />
        <script defer src="/js/logout.js" />
        <script defer src="/js/script.js" />
        <title>Magic</title>
      </head>
      <header>
        <nav id="navBackground" className="navbar navbar-expand-lg bg-light">
          <img src="/pics/magic.png" alt="magic" className="magicLogo" />
          <div className="container-fluid">
            <p className="navbar-brand headMagic">Magic The Gathering </p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            { newUser ? (
              <div className="collapse navbar-collapse navDiv" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/personalarea">Личный кабинет</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/market">Торговая площадка</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Каталог карт</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="/personalarea">Что-нибудь</a> */}
                  {/* </li> */}
                  <li className="nav-item">
                    <a id="logout" className="nav-link">Выйти</a>
                  </li>
                </ul>
              </div>
            )
              : (
                <div className="collapse navbar-collapse navDiv" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">Главная</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">Логин</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/registr">Регистрация</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Каталог карт</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="/personalarea">Персонал</a>
                    </li> */}
                  </ul>
                </div>
              )}
            <div className="basketWraper">
              <a href="/basket"><div className="round">0</div></a>
              <a href="/basket"><img src="/pics/basket.png" alt="basket" className="basketLogo" /></a>
            </div>
          </div>
        </nav>
      </header>
      <body>
        { children }
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />
      </body>
    </html>
  );
};
