"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero/warmup.jpg", alt: "屋外トラックでストレッチをするクラブ活動のイメージ" },
  { src: "/images/hero/hurdles.jpg", alt: "ハードル練習に取り組むクラブ活動のイメージ" },
  { src: "/images/hero/relay.jpg", alt: "リレーのバトンパスを練習するクラブ活動のイメージ" },
  { src: "/images/hero/indoor-training.jpg", alt: "体育館で敏捷性トレーニングをするクラブ活動のイメージ" },
  { src: "/images/hero/teamwork.jpg", alt: "練習後に仲間とハイタッチをするクラブ活動のイメージ" },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="hero-carousel" aria-label="クラブ活動の様子">
      <Image
        key={activeSlide.src}
        className="carousel-image"
        src={activeSlide.src}
        alt={activeSlide.alt}
        fill
        sizes="(min-width: 700px) 47vw, 100vw"
      />
      <div className="carousel-overlay" />
      <div className="carousel-caption" aria-live="polite">
        <span>CLUB ACTIVITIES</span>
        <b>{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</b>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={previousSlide} aria-label="前の写真を表示">
          <span aria-hidden="true">←</span>
        </button>
        <div className="carousel-dots" aria-label="写真を選択">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`${index + 1}枚目の写真を表示`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={index === activeIndex ? "is-active" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={nextSlide} aria-label="次の写真を表示">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
