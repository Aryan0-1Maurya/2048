/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

var _0x2e25 = [
  "onmousedown",
  "push",
  "transformOrigin",
  "zIndex",
  "onkeydown",
  "appendChild",
  "innerHTML",
  "removeChild",
  "keyCode",
  "scale(1.2)",
  "div",
  "touches",
  "clientY",
  "style",
  "right",
  "down",
  "body",
  "onmousemove",
  "scale(1.1)",
  "scale(1.0)",
  "indexOf",
  "abs",
  "best-score-output",
  "DOM",
  "score-output",
  "splice",
  "length",
  "getElementsByTagName",
  "random",
  "touchstart",
  "transform",
  "scale(.75)",
  "block-",
  "0\x200",
  "clientX",
  "addEventListener",
  "top",
  "getElementById",
  "class",
  "left",
  "onmouseup",
];
(function (_0x5e2e50, _0x2e2507) {
  var _0x30268d = function (_0x8a64d8) {
    while (--_0x8a64d8) {
      _0x5e2e50["push"](_0x5e2e50["shift"]());
    }
  };
  _0x30268d(++_0x2e2507);
})(_0x2e25, 0x1f0);
var _0x3026 = function (_0x5e2e50, _0x2e2507) {
  _0x5e2e50 = _0x5e2e50 - 0x0;
  var _0x30268d = _0x2e25[_0x5e2e50];
  return _0x30268d;
};
function randInt(_0x8a64d8, _0x447ad5) {
  return ~~(Math[_0x3026("0x18")]() * (_0x447ad5 - _0x8a64d8)) + _0x8a64d8;
}
function xIntToPx(_0x21ba6e) {
  return 0x28 + _0x21ba6e * 0xc + (_0x21ba6e - 0x1) * 0x55 + "px";
}
function yIntToPx(_0x1ed4ab) {
  return 0xa0 + _0x1ed4ab * 0xc + (_0x1ed4ab - 0x1) * 0x55 + "px";
}
var blocks = [],
  score = 0x0,
  bestScore = 0x0,
  lastMoveTime = new Date();
function newGame() {
  for (i = 0x0; i < blocks[_0x3026("0x16")]; i++) {
    game[_0x3026("0x3")](blocks[i][_0x3026("0x13")]);
  }
  (blocks = []),
    (score = 0x0),
    (document[_0x3026("0x21")](_0x3026("0x14"))[_0x3026("0x2")] = 0x0),
    appendBlock2();
}
function appendBlock2() {
  if (blocks[_0x3026("0x16")] == 0x10) return checkForLoss();
  (x = randInt(0x1, 0x5)), (y = randInt(0x1, 0x5));
  for (i = 0x0; i < blocks[_0x3026("0x16")]; i++) {
    if (blocks[i]["x"] == x && blocks[i]["y"] == y) return appendBlock2();
  }
  newBlock(x, y, 0x2);
}
function checkForLoss() {
  for (i = 0x0; i < blocks[_0x3026("0x16")]; i++) {
    for (j = 0x0; j < blocks["length"]; j++) {
      if (
        blocks[i]["class"] == blocks[j][_0x3026("0x22")] &&
        ((Math[_0x3026("0x11")](blocks[i]["x"] - blocks[j]["x"]) == 0x1 &&
          blocks[i]["y"] == blocks[j]["y"]) ||
          (Math[_0x3026("0x11")](blocks[i]["y"] - blocks[j]["y"]) == 0x1 &&
            blocks[i]["x"] == blocks[j]["x"]))
      )
        return;
    }
  }
  newGame();
}
function newBlock(_0x2bcdb3, _0xdfacec, _0x4616b1) {
  (block = document["createElement"](_0x3026("0x6"))),
    (block["className"] = _0x3026("0x1c") + _0x4616b1 + "\x20blocks"),
    (block[_0x3026("0x2")] = _0x4616b1),
    (block["style"]["left"] = xIntToPx(_0x2bcdb3)),
    (block[_0x3026("0x9")][_0x3026("0x20")] = yIntToPx(_0xdfacec)),
    blocks[_0x3026("0x26")]({
      x: _0x2bcdb3,
      y: _0xdfacec,
      class: _0x4616b1,
      DOM: block,
    }),
    game[_0x3026("0x1")](block),
    setTimeout(function () {
      (block[_0x3026("0x9")][_0x3026("0x1a")] = _0x3026("0xe")),
        setTimeout(function () {
          block[_0x3026("0x9")]["transform"] = "scale(1.0)";
        }, 0x96);
    }, 0x32);
}
function move(_0x3ea277) {
  for (_ = 0x0; _ < 0x4; _++) {
    for (i = 0x0; i < blocks[_0x3026("0x16")]; i++) {
      (function () {
        for (j = 0x0; j < blocks[_0x3026("0x16")]; j++) {
          if (
            _0x3ea277 == _0x3026("0x23") &&
            (blocks[i]["x"] == 0x1 ||
              (blocks[i]["x"] - 0x1 == blocks[j]["x"] &&
                blocks[i]["y"] == blocks[j]["y"]))
          )
            return;
          if (
            _0x3ea277 == _0x3026("0xa") &&
            (blocks[i]["x"] == 0x4 ||
              (blocks[i]["x"] + 0x1 == blocks[j]["x"] &&
                blocks[i]["y"] == blocks[j]["y"]))
          )
            return;
          if (
            _0x3ea277 == "up" &&
            (blocks[i]["y"] == 0x1 ||
              (blocks[i]["y"] - 0x1 == blocks[j]["y"] &&
                blocks[i]["x"] == blocks[j]["x"]))
          )
            return;
          if (
            _0x3ea277 == _0x3026("0xb") &&
            (blocks[i]["y"] == 0x4 ||
              (blocks[i]["y"] + 0x1 == blocks[j]["y"] &&
                blocks[i]["x"] == blocks[j]["x"]))
          )
            return;
        }
        _0x3ea277 == "left"
          ? blocks[i]["x"]--
          : _0x3ea277 == _0x3026("0xa")
          ? blocks[i]["x"]++
          : _0x3ea277 == "up"
          ? blocks[i]["y"]--
          : _0x3ea277 == _0x3026("0xb")
          ? blocks[i]["y"]++
          : NaN;
      })();
    }
  }
  draw(), collisionCheck(_0x3ea277);
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

function draw() {
  for (d = 0x0; d < blocks[_0x3026("0x16")]; d++) {
    (blocks[d][_0x3026("0x13")][_0x3026("0x9")][_0x3026("0x23")] = xIntToPx(
      blocks[d]["x"]
    )),
      (blocks[d]["DOM"][_0x3026("0x9")][_0x3026("0x20")] = yIntToPx(
        blocks[d]["y"]
      ));
  }
}
function collisionCheck(_0x829425) {
  _0x829425 == _0x3026("0x23") || _0x829425 == "up"
    ? (offset = 0x2)
    : _0x829425 == "right" || _0x829425 == _0x3026("0xb")
    ? (offset = 0x3)
    : NaN;
  for (_ = 0x0; _ < 0x4; _++) {
    while (
      ((_0x829425 == _0x3026("0x23") || _0x829425 == "up") && offset <= 0x4) ||
      ((_0x829425 == _0x3026("0xa") || _0x829425 == _0x3026("0xb")) &&
        offset >= 0x1)
    ) {
      for (i = 0x0; i < blocks["length"]; i++) {
        if (
          ((_0x829425 == _0x3026("0x23") || _0x829425 == _0x3026("0xa")) &&
            blocks[i]["x"] != offset) ||
          ((_0x829425 == "up" || _0x829425 == _0x3026("0xb")) &&
            blocks[i]["y"] != offset)
        )
          continue;
        if (
          (_0x829425 == _0x3026("0x23") && blocks[i]["x"] == 0x1) ||
          (_0x829425 == "up" && blocks[i]["y"] == 0x1)
        )
          continue;
        if (
          (_0x829425 == _0x3026("0xa") && blocks[i]["x"] == 0x4) ||
          (_0x829425 == _0x3026("0xb") && blocks[i]["y"] == 0x4)
        )
          continue;
        for (j = 0x0; j < blocks["length"]; j++) {
          if (blocks[i][_0x3026("0x22")] == blocks[j][_0x3026("0x22")]) {
            if (
              _0x829425 == _0x3026("0x23") &&
              blocks[i]["x"] - 0x1 == blocks[j]["x"] &&
              blocks[i]["y"] == blocks[j]["y"]
            )
              return collision(blocks[i], blocks[j], _0x829425);
            if (
              _0x829425 == _0x3026("0xa") &&
              blocks[i]["x"] + 0x1 == blocks[j]["x"] &&
              blocks[i]["y"] == blocks[j]["y"]
            )
              return collision(blocks[i], blocks[j], _0x829425);
            if (
              _0x829425 == "up" &&
              blocks[i]["y"] - 0x1 == blocks[j]["y"] &&
              blocks[i]["x"] == blocks[j]["x"]
            )
              return collision(blocks[i], blocks[j], _0x829425);
            if (
              _0x829425 == "down" &&
              blocks[i]["y"] + 0x1 == blocks[j]["y"] &&
              blocks[i]["x"] == blocks[j]["x"]
            )
              return collision(blocks[i], blocks[j], _0x829425);
          }
        }
      }
      _0x829425 == _0x3026("0x23") || _0x829425 == "up"
        ? offset++
        : _0x829425 == _0x3026("0xa") || _0x829425 == "down"
        ? offset--
        : NaN;
    }
  }
  (lastMoveTime = new Date()), setTimeout(appendBlock2, 0xc8);
}
function collision(_0x4db24c, _0x3aaedd, _0x7d6f01) {
  (_0x4db24c[_0x3026("0x13")][_0x3026("0x9")][_0x3026("0x28")] = "100"),
    (_0x4db24c[_0x3026("0x13")][_0x3026("0x9")][_0x3026("0x23")] = xIntToPx(
      _0x3aaedd["x"]
    )),
    (_0x4db24c["DOM"][_0x3026("0x9")][_0x3026("0x20")] = yIntToPx(
      _0x3aaedd["y"]
    )),
    setTimeout(function () {
      game[_0x3026("0x3")](_0x4db24c[_0x3026("0x13")]),
        game[_0x3026("0x3")](_0x3aaedd[_0x3026("0x13")]),
        updateScore(_0x3aaedd[_0x3026("0x22")] * 0x2),
        newBlock(
          _0x3aaedd["x"],
          _0x3aaedd["y"],
          _0x3aaedd[_0x3026("0x22")] * 0x2
        ),
        blocks[_0x3026("0x15")](blocks[_0x3026("0x10")](_0x4db24c), 0x1),
        blocks[_0x3026("0x15")](blocks[_0x3026("0x10")](_0x3aaedd), 0x1),
        setTimeout(function () {
          move(_0x7d6f01);
        }, 0x1e),
        (lastMoveTime = new Date());
    }, 0xc8);
}
function updateScore(_0x1c1fa2) {
  (score += _0x1c1fa2),
    score > bestScore &&
      ((bestScore = score),
      (document["getElementById"](_0x3026("0x12"))[_0x3026("0x9")][
        _0x3026("0x1a")
      ] = _0x3026("0x5")),
      (document[_0x3026("0x21")](_0x3026("0x12"))["innerHTML"] = bestScore),
      setTimeout(function () {
        document["getElementById"]("best-score-output")[_0x3026("0x9")][
          _0x3026("0x1a")
        ] = _0x3026("0xf");
      }, 0xc8)),
    (document[_0x3026("0x21")](_0x3026("0x14"))[_0x3026("0x9")]["transform"] =
      _0x3026("0x5")),
    (document[_0x3026("0x21")](_0x3026("0x14"))[_0x3026("0x2")] = score),
    setTimeout(function () {
      document[_0x3026("0x21")](_0x3026("0x14"))[_0x3026("0x9")][
        _0x3026("0x1a")
      ] = _0x3026("0xf");
    }, 0xc8);
}
(window[_0x3026("0x0")] = function (_0x10938e) {
  if (new Date() - lastMoveTime > 0x12c) {
    lastMoveTime = new Date();
    if (_0x10938e[_0x3026("0x4")] == 0x25 || _0x10938e[_0x3026("0x4")] == 0x41)
      move(_0x3026("0x23"));
    if (_0x10938e[_0x3026("0x4")] == 0x26 || _0x10938e[_0x3026("0x4")] == 0x57)
      move("up");
    if (_0x10938e[_0x3026("0x4")] == 0x27 || _0x10938e[_0x3026("0x4")] == 0x44)
      move(_0x3026("0xa"));
    if (_0x10938e["keyCode"] == 0x28 || _0x10938e[_0x3026("0x4")] == 0x53)
      move(_0x3026("0xb"));
    if (_0x10938e[_0x3026("0x4")] == 0x43) changeTheme();
    if (_0x10938e[_0x3026("0x4")] == 0x52) newGame();
  }
}),
  (window[_0x3026("0x25")] = function (_0xf101e) {
    new Date() - lastMoveTime > 0x12c &&
      _0xf101e[_0x3026("0x8")] > 0xa0 &&
      ((xFirst = _0xf101e["clientX"]),
      (yFirst = _0xf101e[_0x3026("0x8")]),
      (window[_0x3026("0xd")] = function (_0x4558ff) {
        (lastMoveTime = new Date()),
          (xSecond = _0x4558ff[_0x3026("0x1e")]),
          (ySecond = _0x4558ff[_0x3026("0x8")]),
          (xDifferent = xFirst - xSecond),
          (yDifferent = yFirst - ySecond);
        if (Math[_0x3026("0x11")](xDifferent) > Math["abs"](yDifferent)) {
          if (xDifferent > 0x0) move(_0x3026("0x23"));
          else move("right");
        } else {
          if (yDifferent > 0x0) move("up");
          else move(_0x3026("0xb"));
        }
        window[_0x3026("0xd")] = null;
      }));
  }),
  (window[_0x3026("0x24")] = function () {
    window[_0x3026("0xd")] = null;
  }),
  window["addEventListener"](_0x3026("0x19"), handleTouchStart),
  window[_0x3026("0x1f")]("touchmove", handleTouchMove);
function handleTouchStart(_0x2e3d55) {
  (document["getElementsByTagName"]("body")[0x0][_0x3026("0x9")]["transform"] =
    _0x3026("0x1b")),
    (document[_0x3026("0x17")](_0x3026("0xc"))[0x0][_0x3026("0x9")][
      _0x3026("0x27")
    ] = _0x3026("0x1d")),
    new Date() - lastMoveTime > 0x12c &&
      ((firstTouch = _0x2e3d55[_0x3026("0x7")][0x0]),
      (xDown = firstTouch[_0x3026("0x1e")]),
      (yDown = firstTouch["clientY"]));
}
function handleTouchMove(_0x2caca2) {
  if (!xDown || !yDown) return;
  var _0x3941f4 = _0x2caca2[_0x3026("0x7")][0x0][_0x3026("0x1e")],
    _0x2e6f31 = _0x2caca2[_0x3026("0x7")][0x0]["clientY"],
    _0xaf0148 = xDown - _0x3941f4,
    _0x2c9486 = yDown - _0x2e6f31;
  if (Math[_0x3026("0x11")](_0xaf0148) > Math[_0x3026("0x11")](_0x2c9486)) {
    if (_0xaf0148 > 0x0) move(_0x3026("0x23"));
    else move(_0x3026("0xa"));
  } else {
    if (_0x2c9486 > 0x0) move("up");
    else direction = move(_0x3026("0xb"));
  }
  (xDown = null), (yDown = null);
}
console.log("Please upote");
/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/