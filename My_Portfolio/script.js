//loading percentage

CSS.registerProperty({
  name: "--p",
  syntax: "<integer>",
  initialValue: 0,
  inherits: true,
});

// loading page visibility

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

//typing subheading

var typingEffect = new Typed(".typo", {
  strings: ["Front End Developer ^_^", "Competitive Programmer *_^"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
