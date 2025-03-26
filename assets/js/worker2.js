let count = 0;

function countdown() {
  if (count > 0) {
    count--;
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor((count % 3600) / 60);
    let seconds = count % 60;
    postMessage(
      formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)
    );
    setTimeout(countdown, 1000);
  } else {
    postMessage("countdownFinished");
  }
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

onmessage = function (event) {
  if (event.data.start) {
    count = event.data.time * 60; // Chuyển đổi phút thành giây
    countdown();
  }
};
