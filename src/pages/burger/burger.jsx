import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../redux";
import { CustomContext } from "../../utils/context";

const Burger = () => {
  const { burger, setBurger } = useContext(CustomContext);
  const [accordion, setAccordion] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const totalCount = useSelector((store) =>
    store.task.task.reduce((asc, item) => asc + item.count, 0)
  );

  const handleOpen = () => {
    setAccordion(!accordion);
  };
  const handleOpen2 = () => {
    setAccordion2(!accordion2);
  };
  const handleOpen3 = () => {
    setAccordion3(!accordion3);
  };
  const handleOpen4 = () => {
    setAccordion4(!accordion4);
  };

  return (
    burger && (
      <div className="burger">
        <div className="burger__header">
          <nav className="burger__header-nav">
            <div className="burger__header-nav_first">
              <div
                className="burger__header-nav_first-img"
                onClick={() => setBurger(!burger)}
              >
                <img
                  src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/close.svg"
                  alt="logo"
                />
              </div>
              <div className="burger__header-nav_first-a">
                <a href="">
                  <img
                    src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/header-icon-1.svg"
                    alt=""
                  />
                  <span>0</span>
                </a>
              </div>
            </div>
            <div className="burger__header-nav_second">
              <a href="">
                <svg
                  width="140"
                  height="26"
                  viewBox="0 0 140 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25.189L2.90476 23.5611V1.98531L0 0.33902V0H18.2148V6.48798H18.0504L14.9813 0.762617H6.66853V12.0558H12.0583L14.1957 8.79389H14.5005V16.1713H14.1957L12.0583 12.8184H6.66853V24.7654H16.1993L20.1943 19.0219L20.3526 19.04L19.4088 25.528H0.000343002L0 25.189Z"
                    fill="#fff"
                  />
                  <path
                    d="M38.1305 0H28.1797V0.33902L31.0844 1.98531V23.5611L28.1797 25.189V25.528H46.2668L47.2106 19.04L47.0524 19.0219L43.0573 24.7654H34.8482V1.98531L38.1305 0.33902V0Z"
                    fill="#fff"
                  />
                  <path
                    d="M57.8774 23.5611L54.9727 25.189V25.528H74.3814L75.3256 19.04L75.167 19.0219L71.1719 24.7654H61.6412V12.8184H67.0307L69.1684 16.1713H69.4731V8.79389H69.1684L67.0307 12.0558H61.6412V0.762617H69.9539L73.0231 6.48798H73.1875V0H54.9727V0.33902L57.8774 1.98531V23.5611Z"
                    fill="#fff"
                  />
                  <path
                    d="M122.571 25.2074L119.575 23.2947L119.575 3.72846L135.878 26L137.005 25.528V2.23325L140.001 0.32093V0.000333066H133.204V0.32093L136.2 2.23325V20.3534L121.323 0H115.848V0.339009L118.807 1.9853V23.2947L115.848 25.2074V25.528H122.571V25.2074Z"
                    fill="#fff"
                  />
                  <path
                    d="M93.8413 17.1761V16.4135H98.5001L93.8413 3.38331V0.000333066H96.466L105.205 23.5614L108.22 25.1893V25.5283H98.1957V25.1893L101.07 23.5433L98.7863 17.1764L93.8413 17.1761ZM93.8413 0.000333066V3.38331L89.1828 16.4135H93.8413V17.1761H88.8966L86.6309 23.543H86.6494L90.4008 25.189V25.528H82.4961V25.189L85.6871 23.5611L93.2146 2.7295L91.5213 0.339009V0L93.8413 0.000333066Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <div>
                ЖЕНСКИЙ
                <br />
                СМОКИНГ
              </div>
            </div>
            <div className="burger__header-nav_third">
              <Link to='/Favorite'>
                <img
                  src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/header-icon-4.svg"
                  alt=""
                />
                <span>{totalCount}</span>
              </Link>
            </div>
          </nav>
          <div className="burger__main">
            <ul className="burger__main-items">
              <li>
                <a href="">Новинки</a>
              </li>
              <li onClick={handleOpen}>
                <a className="a_accordiaon">Категории</a>
                {accordion && (
                  <ul
                    className="burger__main-item"
                    style={{ display: `${accordion ? "block" : "none"}` }}
                  >
                    <li>
                      <a href="#">Смокинг</a>
                    </li>
                    <li>
                      <a href="#">Костюмы</a>
                    </li>
                    <li>
                      <a href="#">Аксессуары</a>
                    </li>
                    <li>
                      <a href="#">Брюки</a>
                    </li>
                    <li>
                      <a href="#">Платья</a>
                    </li>
                    <li>
                      <a href="#">Топы и жилеты</a>
                    </li>
                    <li>
                      <a href="#">Юбки</a>
                    </li>
                    <li>
                      <a href="#">Подарочные сертификаты</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={handleOpen2}>
                <a className="a_accordiaon">Наши колекции</a>
                {accordion2 && (
                  <ul className="burger__main-item">
                    <li>
                      <a href="#">Осень-зима 22-23</a>
                    </li>
                    <li>
                      <a href="#">Вечерные образы</a>
                    </li>
                    <li>
                      <a href="#">Предзаказы</a>
                    </li>
                    <li>
                      <a href="#">Свадьба и выпускной</a>
                    </li>
                    <li>
                      <a href="#">Весна-лето 2023</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={handleOpen3}>
                <a className="a_accordiaon">Покупатели</a>
                {accordion3 && (
                  <ul className="burger__main-item">
                    <li>
                      <a href="#">Доставка</a>
                    </li>
                    <li>
                      <a href="#">Оплата</a>
                    </li>
                    <li>
                      <a href="#">Обмен</a>
                    </li>
                    <li>
                      <a href="#">Возврат</a>
                    </li>
                    <li>
                      <a href="#">Как получить скидку</a>
                    </li>
                    <li>
                      <a href="#">Примерка</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={handleOpen4}>
                <a className="a_accordiaon">О БРЕНДЕ</a>
                {accordion4 && (
                  <ul className="burger__main-item">
                    <li>
                      <a href="#">О нас</a>
                    </li>
                    <li>
                      <a href="#">Шоурум</a>
                    </li>
                    <li>
                      <a href="#">Отзывы</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="burger__socials">
            <div className="burger__socials-block">
              <a className="burger__socials-block_a" href="">
                <span className="burger__socials-block_img">
                  <img
                    src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/menu-icon-1.svg"
                    alt="socias-img"
                  />
                </span>
                <span className="burger__socials-block_socialTitle">WhatsApp</span>
              </a>
            </div>
            <div className="burger__socials-block">
              <a className="burger__socials-block_a" href="">
                <span className="burger__socials-block_img">
                  <img
                    src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/menu-icon-5.svg"
                    alt="socias-img"
                  />
                </span>
                <span className="burger__socials-block_socialTitle">Позвонить</span>
              </a>
            </div>
            <div className="burger__socials-block">
              <a className="burger__socials-block_a" href="">
                <span className="burger__socials-block_img">
                  <img
                    src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/menu-icon-2.svg"
                    alt="socias-img"
                  />
                </span>
                <span className="burger__socials-block_socialTitle">Telegram</span>
              </a>
            </div>
            <div className="burger__socials-block">
              <a className="burger__socials-block_a" href="">
                <span className="burger__socials-block_img">
                  <img
                    src="https://eleanboutique.ru/catalog/view/theme/default/assets/img/menu-icon-4.svg"
                    alt="socias-img"
                  />
                </span>
                <span className="burger__socials-block_socialTitle">E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Burger;
