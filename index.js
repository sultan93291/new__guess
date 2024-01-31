"use strict";
let btn = document.querySelector("#btn");
let guess = document.querySelector("#guess");
let reload = document.querySelector("#reload");
let player__error = document.querySelector("#player__error");
let player = document.querySelector("#player");
let input = document.querySelector("#input");
let img = document.querySelector("#img");
let chance__remain = document.querySelector("#chance__remain");
let value;
let remainChance = 5;
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", () => {
      if ((input === null || input === void 0 ? void 0 : input.value) !== "") {
        if (
          !isNaN(
            Number(input === null || input === void 0 ? void 0 : input.value)
          )
        ) {
          if (
            Number(input === null || input === void 0 ? void 0 : input.value) >=
              0 &&
            Number(input === null || input === void 0 ? void 0 : input.value) <=
              10
          ) {
            value = Number(
              input === null || input === void 0 ? void 0 : input.value
            );
            if (input) {
              input.value = "";
            }
            if (player !== null) {
              player.innerHTML = `second player`;
              if (btn) {
                btn.style.display = "none";
                if (guess) {
                  guess.style.display = "block";
                  if (chance__remain) {
                    chance__remain.innerHTML = ` chance remain: ${remainChance}`;
                    if (player__error) {
                      player__error.innerHTML = "";
                    }
                  }
                }
              }
            }
          } else {
            if (player__error !== null) {
              player__error.innerHTML = "number must be 0 or up 10 or down";
            }
          }
        } else {
          if (player__error !== null) {
            player__error.innerHTML = "please enter number only";
          }
        }
      } else {
        if (player__error !== null) {
          player__error.innerHTML = "Please enter a number to start the game";
        }
      }
    });
guess === null || guess === void 0
  ? void 0
  : guess.addEventListener("click", () => {
      if ((input === null || input === void 0 ? void 0 : input.value) !== "") {
        if (
          !isNaN(
            Number(input === null || input === void 0 ? void 0 : input.value)
          )
        ) {
          if (
            Number(input === null || input === void 0 ? void 0 : input.value) >=
              0 &&
            Number(input === null || input === void 0 ? void 0 : input.value) <=
              10
          ) {
            if (
              Number(
                input === null || input === void 0 ? void 0 : input.value
              ) !== value &&
              remainChance !== 0
            ) {
              remainChance--;
              if (chance__remain) {
                chance__remain.innerHTML = ` chance remain : ${remainChance}`;
                if (player__error) {
                  player__error.innerHTML = "try agian";
                  if (remainChance === 0) {
                    if (img) {
                      img.src = "./images/winner.png";
                      if (input) {
                        input.style.display = "none";
                        if (player) {
                          player.innerHTML = "player one win the game ";
                          if (player__error) {
                            player__error.innerHTML = "";
                            chance__remain.innerHTML = "";
                            if (guess) {
                              guess.style.display = "none";
                              if (reload) {
                                reload.style.display = "block";
                                reload.addEventListener("click", () => {
                                  location.reload();
                                });
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (
                Number(
                  input === null || input === void 0 ? void 0 : input.value
                ) === value
              ) {
                if (img) {
                  img.src = "./images/winner.png";
                  if (input) {
                    input.style.display = "none";
                    if (player) {
                      player.innerHTML = "player two win the game ";
                      if (player__error) {
                        player__error.innerHTML = "";
                        if (guess) {
                          guess.style.display = "none";
                          if (reload) {
                            reload.style.display = "block";
                            reload.addEventListener("click", () => {
                              location.reload();
                            });
                            if (chance__remain) {
                              chance__remain.innerHTML = "";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (player__error !== null) {
              player__error.innerHTML = "number must be 0 or up 10 or down";
            }
          }
        } else {
          if (player__error !== null) {
            player__error.innerHTML = "please enter number only";
          }
        }
      } else {
        if (player__error !== null) {
          player__error.innerHTML = "Please enter a number to start the game";
        }
      }
    });
