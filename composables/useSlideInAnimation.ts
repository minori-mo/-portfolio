import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useSlideInAnimation = (selector) => {
  selector.forEach((section) => {
    gsap.from(section, {
      y: 100, // 下からせり上がる
      opacity: 0, // フェードイン
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section, // 要素がトリガー
        toggleActions: "play none none none",
      },
    });
  });
};

export const useHoverAnimation = (selector) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((section) => {
    gsap.to(section, {
      y: 150,
      scrollTrigger: {
        trigger: section,
        scrub: 3,
      },
    });
  });
};

export const useDelayAnimation = (selector) => {
  gsap.to(selector, {
    y: 50,
    scrollTrigger: {
      trigger: selector,
      start: "top", // ラッパーが画面下に来たとき開始
      end: "bottom", // ラッパーが画面上に来たら終了
      scrub: 3,
    },
  });
};

export const useScrollAnimation = (selector, img) => {
  gsap.to(img, {
    yPercent: -50,
    scrollTrigger: {
      trigger: selector, // スクロール範囲の基準
      start: "top 70%", // ラッパーが画面中央に来たとき開始
      end: "bottom 30%", // ラッパーが画面上に来たら終了
      scrub: 1, // スクロールと同期
    },
  });
};
