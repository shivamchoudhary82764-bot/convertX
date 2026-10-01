"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("testButton");
  const status = document.getElementById("status");

  if (!button || !status) {
    return;
  }

  button.addEventListener("click", () => {
    status.textContent = "JavaScript is working correctly.";
  });
});
