export const milliToMMSS = function(ms) {
  let tmp = ms / 1000;
  let minutes = Math.floor(tmp / 60);
  let seconds = tmp - minutes * 60;

  seconds = seconds.toFixed(0);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes.toFixed(0) + ":" + seconds;
};
