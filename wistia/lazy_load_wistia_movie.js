function script(url) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url;
  var x = document.getElementsByTagName("head")[0];
  x.appendChild(s);
}

addEventListener("load", (event) => {
  //load_videos();

  setTimeout(() => {
    console.log("Delayed for 1 second.");
    script("https://fast.wistia.com/assets/external/E-v1.js");
    load_by_api();
  }, "500");
});
function load_by_api() {
  window._wq = window._wq || [];
  _wq.push({
    id: "_all",
    onReady: function (video) {
      console.log("I got a handle to the video!", video);
    },
  });
}
