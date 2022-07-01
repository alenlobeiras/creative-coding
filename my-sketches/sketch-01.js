//Canvas art
const canvasSketch = require('canvas-sketch');


const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, width, height);
    context.stroke();

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.18;
    const iy = height * 0.18;
    let x, y;

    const off = width * 0.05;


    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {

        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();

        context.rect(x, y, w, h);
        context.stroke();
        context.strokeStyle = '#f44336';

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
          context.strokeStyle = '#FEDD00';
          context.lineWidth = width * 0.003;
        }

        if (Math.random() > 0.5) {
          context.beginPath();
          context.arc(x + 108 / 2, y + 108 / 2, w - 90, h - 90, 0, Math.PI * 2);
          context.arc(248, 248, 55, 0, Math.PI * 2);
          context.stroke();
          context.lineWidth = width * 0.002;
          context.strokeStyle = '#9c27b0'
        }

        if (Math.random() > 0.1) {
          context.beginPath();
          context.rect(x + 100 / 2, y + 100 / 2, w - 100, h - 100);
          context.stroke();
          context.lineWidth = width * 0.003;
          context.strokeStyle = '#e040fb'
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
