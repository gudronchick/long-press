const canv = document.getElementById('canvas');
const context = canv.getContext('2d');
let t;
let isTrue = true;

let n = 0;
const drawCircle = (sign) => {
  const draw = () => {
    context.clearRect(0, 0, canv.width, canv.height);

    context.strokeStyle = `rgb(${255 - 0.78*n}, ${0.56*n}, 0)`;
    context.lineWidth = 6;
    context.beginPath();
    context.arc(200, 200, 40, 0, Math.PI / 180 * (sign === '+' ? n += 3 : n -= 3));
    context.stroke();

    if (n <= 360 && n > 0) {
      t = requestAnimationFrame(draw);
    } else if (n >= 360) {
      console.log('Done');
    }

  }
  t = requestAnimationFrame(draw);
};

document.addEventListener('keydown', (e) => {
  if (e.key === 's' && (e.ctrlKey || e.metaKey) && isTrue) {
    e.preventDefault();
    cancelAnimationFrame(t);
    drawCircle('+');
    isTrue = false;
  }
});

document.addEventListener('keyup', (e) => {
  console.log(e);
  isTrue = true;
  if (n < 360 && n > 0) {
    context.clearRect(0, 0, canv.width, canv.height);
    cancelAnimationFrame(t);
    drawCircle('-');
  }
});