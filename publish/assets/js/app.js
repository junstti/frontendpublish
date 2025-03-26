var App = {
  Swal: function (type, mesage, btnText, btnStyle) {
    Swal.fire({
      text: mesage,
      icon: type,
      buttonsStyling: false,
      confirmButtonText: btnText,
      heightAuto: false,
      customClass: {
        confirmButton: "btn btn-" + btnStyle,
      },
    });
  },
  fetch: function (url, action, data, callback) {
    $.ajax({
      url: url,
      type: "POST",
      dataType: "JSON",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        data: data,
        act: action,
      }),
      beforeSend: function (xhr) {
        App.pageLoading();
      },
      success: (d) => {
        callback(d);
      },
      error: (e) => {},
      complete: () => {
        App.pageUnLoading();
      },
    });
  },
  getFormData: function ($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  },
  copyToClipboard: function (text) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    toastr.success("Copy thành công");
  },
  setCookie: function (name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  deleteCookie: function (name) {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
  getCookie: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  pageLoading: function () {
    $("#spinner").addClass("show");
  },
  pageUnLoading: function () {
    $("#spinner").removeClass("show");
  },
};
