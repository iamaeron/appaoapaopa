const bcon = new Confetti("confetti");
bcon.setCount(75);
bcon.setSize(1);
bcon.setPower(25);
bcon.setFade(false);
bcon.destroyTarget(false);

var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 400, ticks: 250, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function () {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({
    ...defaults,
    particleCount,
    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
  });
  confetti({
    ...defaults,
    particleCount,
    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
  });
}, 500);
