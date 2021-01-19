"use strict";

const loaderId = setInterval(() => {
    if (!window._gmailjs) {
        return;
    }

    clearInterval(loaderId);
    startExtension(window._gmailjs);
}, 100);

const startExtension = (gmail) => {
  gmail.observe.on("load", () => {
    const userEmail = gmail.get.user_email();
    gmail.observe.on("new_email", () => {
      let mmf = new Audio('https://mmf-mmf.s3-us-west-2.amazonaws.com/mmf.mp3');
      mmf.volume = 0.5;
      mmf.play();
    });
  });
};
