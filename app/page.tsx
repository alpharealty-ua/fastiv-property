"use client";

import { TouchEvent, useState } from "react";

const portraitPhotos = new Set([3, 4, 6, 9, 12, 15, 16, 23, 26, 27, 30]);
const galleryPhotoNumbers = Array.from({ length: 31 }, (_, index) => index + 1)
  .filter((number) => number !== 21 && number !== 31);

const gallery = galleryPhotoNumbers.map((number, index) => {
  return {
    src: `property/gallery/photo-${String(number).padStart(2, "0")}.jpeg`,
    alt: `Фото виробничо-складського комплексу ${index + 1} із ${galleryPhotoNumbers.length}`,
    orientation: portraitPhotos.has(number) ? "portrait" : "landscape",
  };
});

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = (index: number) => {
    setActiveImage((index + gallery.length) % gallery.length);
  };

  const handleTouchStart = (event: TouchEvent) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStart === null) return;
    const distance = touchStart - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 48) {
      goTo(activeImage + (distance > 0 ? 1 : -1));
    }
    setTouchStart(null);
  };

  return (
    <main>
      <section className="hero" aria-labelledby="project-title">
        <img
          className="hero-image"
          src="property/hero.jpeg"
          alt="Зовнішній вигляд виробничого комплексу"
        />
        <div className="hero-shade" />

        <header className="hero-header">
          <a className="wordmark" href="#top" aria-label="Alpha Realty, на початок">
            <img src="logo-ua.svg" alt="Alpha Realty" />
          </a>
          <div className="header-actions">
            <a className="header-phone" href="tel:+380443334096">
              +38 (044) 333 40 96
            </a>
            <a
              className="header-link"
              href="https://www.alpharealty.com.ua/ua/pro/"
            >
              Зв’язатися
            </a>
          </div>
        </header>

        <div className="hero-content" id="top">
          <p className="eyebrow">
            Виробничо-складський комплекс / 7 000 м²
          </p>
          <h1 id="project-title">Fastiv</h1>
          <div className="hero-meta">
            <p>Фастівський напрямок, Київська область</p>
            <p>
              Виробництво, зберігання та щоденна робота — на одній території.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow" id="gallery-title">
            Об’єкт у деталях
          </p>
          <p className="counter" aria-live="polite">
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(gallery.length).padStart(2, "0")}
          </p>
        </div>

        <div
          className="gallery-frame"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") goTo(activeImage - 1);
            if (event.key === "ArrowRight") goTo(activeImage + 1);
          }}
          aria-label="Фотогалерея об’єкта. Використовуйте стрілки вліво та вправо для навігації."
        >
          {gallery.map((image, index) => (
            <img
              key={image.src}
              className={[
                "gallery-image",
                image.orientation === "portrait" ? "is-portrait" : "",
                index === activeImage ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              src={image.src}
              alt={image.alt}
              aria-hidden={index !== activeImage}
            />
          ))}
          <div className="gallery-controls">
            <button
              type="button"
              onClick={() => goTo(activeImage - 1)}
              aria-label="Попереднє фото"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(activeImage + 1)}
              aria-label="Наступне фото"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="description" aria-labelledby="description-title">
        <div className="section-index">
          <p className="eyebrow">Про об’єкт</p>
          <p>01</p>
        </div>

        <div className="description-copy">
          <h2 id="description-title">
            Простір для виробництва.
            <br />
            Інфраструктура для роботи.
          </h2>
          <p className="intro">
            Комплекс площею 7 000 м² об’єднує виробничий простір, два окремі
            склади для готової продукції та матеріалів, офісні кабінети,
            роздягальню й кухню для персоналу. Простора територія та зручна
            під’їзна дорога забезпечують комфортний рух транспорту,
            завантаження і щоденну роботу підприємства.
          </p>
        </div>

        <dl className="facts">
          <div>
            <dt>Загальна площа</dt>
            <dd>7 000 м²</dd>
          </div>
          <div>
            <dt>Складські приміщення</dt>
            <dd>2</dd>
          </div>
          <div>
            <dt>Електрична потужність</dt>
            <dd>1 МВт</dd>
          </div>
          <div>
            <dt>Опалення</dt>
            <dd>Газ / фанкойли</dd>
          </div>
          <div>
            <dt>До Києва</dt>
            <dd>≈ 1 година</dd>
          </div>
          <div>
            <dt>Під’їзд</dt>
            <dd>Зручна дорога</dd>
          </div>
        </dl>

        <div className="rental-price" aria-label="Вартість оренди">
          <p>Вартість оренди</p>
          <strong>
            35 000 <span>USD/міс з ПДВ</span>
          </strong>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Деталі об’єкта та приватний перегляд</p>
        <h2 id="contact-title">Обговорімо цей об’єкт.</h2>
        <a href="tel:+380443334096">
          +38 (044) 333 40 96 <span aria-hidden="true">↗</span>
        </a>
        <footer>
          <p>Fastiv / Виробничо-складський комплекс</p>
          <p>© 2026</p>
        </footer>
      </section>
    </main>
  );
}
