self.onmessage = function (event) {
  let duration = event.data.durationInSeconds; // Nhận thời gian bằng giây

  function updateCountdown() {
    // Gửi số giây còn lại thay vì chuỗi "hh:mm:ss"
    self.postMessage(duration);

    if (duration > 0) {
      duration--;
      setTimeout(updateCountdown, 1000);
    } else {
      self.postMessage(0); // Gửi 0 để báo hiệu đếm ngược kết thúc
    }
  }

  updateCountdown();
};
