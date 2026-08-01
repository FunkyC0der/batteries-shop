"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState<{
    direction: -1 | 1;
    index: number;
  }>({ direction: 1, index: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const hasMultipleImages = images.length > 1;
  const activeIndex = activeImage.index;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const animation = imageRef.current?.animate(
      [
        {
          opacity: 0,
          transform: `translateX(${activeImage.direction * 5}%) scale(0.985)`,
        },
        { opacity: 1, transform: "translateX(0) scale(1)" },
      ],
      {
        duration: 380,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      },
    );

    return () => animation?.cancel();
  }, [activeImage]);

  function selectImage(index: number, direction?: -1 | 1) {
    const nextIndex = (index + images.length) % images.length;

    if (nextIndex === activeIndex) {
      return;
    }

    setActiveImage({
      direction: direction ?? (nextIndex > activeIndex ? 1 : -1),
      index: nextIndex,
    });
    thumbnailsRef.current
      ?.querySelector<HTMLElement>(`[data-gallery-index="${nextIndex}"]`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }

  return (
    <section aria-label={`Фотографії товару: ${title}`} className="mt-8">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card">
        <Image
          alt={`${title} — фото ${activeIndex + 1}`}
          className="product-gallery-image object-contain p-4 sm:p-7"
          fill
          key={images[activeIndex]}
          loading="eager"
          ref={imageRef}
          sizes="(min-width: 1024px) 960px, 100vw"
          src={images[activeIndex]}
        />

        {hasMultipleImages ? (
          <>
            <button
              aria-label="Попереднє фото"
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-2xl text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => selectImage(activeIndex - 1, -1)}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Наступне фото"
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/90 text-2xl text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => selectImage(activeIndex + 1, 1)}
              type="button"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-foreground/75 px-3 py-1 text-xs font-semibold text-background backdrop-blur">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div
          aria-label="Мініатюри фотографій"
          className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
          ref={thumbnailsRef}
        >
          {images.map((image, index) => {
            const selected = index === activeIndex;

            return (
              <button
                aria-label={`Показати фото ${index + 1}`}
                aria-pressed={selected}
                className={
                  selected
                    ? "relative aspect-square w-24 shrink-0 snap-center overflow-hidden rounded-xl border-2 border-primary bg-card ring-2 ring-primary/15"
                    : "relative aspect-square w-24 shrink-0 snap-center overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary"
                }
                data-gallery-index={index}
                key={image}
                onClick={() => selectImage(index)}
                type="button"
              >
                <Image
                  alt=""
                  className="object-contain p-2"
                  fill
                  loading="eager"
                  sizes="96px"
                  src={image}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
