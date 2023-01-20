const select = (e) => document.querySelector(e);

const canvas = select("#canvas-el");
const context = canvas.getContext("2d");
canvas.height = 810;
canvas.width = 1420;

const frameCount = 64;

const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${(
    index + 1
  )
    .toString()
    .padStart(4, "0")}.png`;

const images = [];
const airpods = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5,
    // markers:true
  },
  onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}

gsap.fromTo('.banner', {opacity: 0}, {duration:2, opacity:1})

gsap.fromTo('.banner-fv', {scale:0.7}, {duration:2, scale:1})

gsap.fromTo('.banner-fv-up', {y:10}, {duration:2, y:-10})

gsap.fromTo('.banner-fv-down', {y:-50}, {duration:2, y:-10})


gsap.to('.scroll-hide-one', {
  scrollTrigger: {
    // markers: true,
    trigger: '.sub-banner',
    start: 'top top' ,
    end: 'center center',
    scrub:0.5
  },
  opacity:0
})

gsap.fromTo('.banner-heading',{scale:1}, {
  scrollTrigger: {
    // markers: true,
    trigger: '.banner',
    start: 'top top' ,
    end: 'center center',
    scrub:0.1
  },
  opacity:0,
  scale:1.2
})


gsap.to('.banner-rebuilt', {
  scrollTrigger: {
    // markers: true,
    trigger: '.banner',
    start:'center center',
    scrub:0.5
  },
  opacity:1,
  scale:1.2
})