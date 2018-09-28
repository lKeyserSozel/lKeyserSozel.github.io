/////////////////////////////
//RESISTANCE CALCULATOR APP//
/////////////////////////////

//Get buttons
var btn = document.querySelectorAll(".btn"),
    navItems = document.querySelectorAll('.nav-item');
//navItems.forEach(function(el, _) {
//  el.addEventListener('click', navSwap);
//});
window.onbeforeunload = function(e) {
  //navSwap();
};
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    //Get parent element
    var col = document.querySelectorAll(".btn[data-band='" + this.getAttribute('data-band') + "']");
    var classes = "";
    for (var j = 0; j < col.length; j++) {
      classes += col[j].classList;
    }
    //Check if it has any elements with the class name "selected"
    if (classes.indexOf("selected") > -1) {
      //If yes, remove class name from all then add class name to it
      for (var k = 0; k < col.length; k++) {
        col[k].classList.remove("selected");
        this.classList.add("selected");
      }
    } else {
      //If not, add class name
      this.classList.add("selected");
    }
    //Get color, value and column
    var color = this.style.backgroundColor;
    var value = this.innerText;
    var numberOfCol = this.getAttribute("data-band");
    //Add color to resistor
    var bands = document.getElementsByClassName("color-band");
    bands[numberOfCol].setAttribute('stroke', color);
  });
}

function navSwap() {
  navItems.forEach(function(el, _) {
    el.classList.remove('defaulNav');
  });
}

function calculateValueWithMultiplier(resistanceValue) {
  var displayResistance = resistanceValue + "Ω";
  if ((resistanceValue + "").length > 9) {
    displayResistance = resistanceValue / 1000000000 + "GΩ";
  } else if ((resistanceValue + "").length > 6) {
    displayResistance = resistanceValue / 1000000 + "MΩ";
  } else if (
    (resistanceValue + "").length > 3 &&
    (resistanceValue + "").indexOf(".") == -1
  ) {
    displayResistance = resistanceValue / 1000 + "KΩ";
  }

  return displayResistance;
}

function calculateValueWithMultiplier2(resistanceValue) {
  var displayResistance = resistanceValue + "Ω";
  if ((resistanceValue + "").split(".")[0].length > 9) {
    displayResistance =
      Math.round(resistanceValue / 1000000000 * 100) / 100 + "GΩ";
  } else if ((resistanceValue + "").split(".")[0].length > 6) {
    displayResistance =
      Math.round(resistanceValue / 1000000 * 100) / 100 + "MΩ";
  } else if ((resistanceValue + "").split(".")[0].length > 3) {
    displayResistance = Math.round(resistanceValue / 1000 * 100) / 100 + "KΩ";
  } else {
    displayResistance = Math.round(resistanceValue * 100) / 100 + "Ω";
  }

  return displayResistance;
}

///////////////////////////////
//////Responsive Resistor//////
///////////////////////////////

var resistor = {
  ns: {
    svgNS: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink"
  },
  getNodes: function(c) {
    return document.querySelectorAll(c);
  },
  getNode: function(c) {
    return document.querySelector(c);
  },
  init: function() {

    resistor.computeLineEnds();
    resistor.reveal();
    window.addEventListener('resize', resistor.computeLineEnds);
  },
  align: function(e, l) {
    e.style.marginLeft = l + 'px';
  },
  computeLineEnds: function() {
    var lines = resistor.getNodes('.lines');
    lines.forEach(function(el, i) {
      var d = el.getAttribute('d').split(' '),
          sx = parseInt(d[0].split(',')[0].slice(1,)),
          sy = parseInt(d[0].split(',')[1]),
          cbX = parseInt(d[1].split(',')[0].slice(1,)),
          cbY = parseInt(d[1].split(',')[1]),
          ex = parseInt(d[3].split(',')[0]),
          ey = parseInt(d[3].split(',')[1]),
          cx = parseInt(d[2].split(',')[0]),
          cy = parseInt(d[2].split(',')[1]),
          e = resistor.getNodes('.title'),
          rb = resistor.getNode('#resistor-base'),
          rbs = resistor.getNodes('#resistor-base svg'),
          b = resistor.getNode('#buttons'),
          ss = window.getComputedStyle(rbs[0]),
          eBB = e[i].getBoundingClientRect(),
          sX = b.getBoundingClientRect().x,
          rX = e[0].getBoundingClientRect().x - sX,
          eX = Math.floor(eBB.x),
          eMP = Math.floor(eBB.width / 2);
      resistor.align(rb, rX);
      var rbBB = rb.getBoundingClientRect(),
          rbX = Math.floor(rbBB.x),
          oX = eX + eMP - rbX + sx, /*середина единички - Х слоя с свг (ноль) + Х слоя с кнопками */
          nX = oX - 2*sx,
          exPOS = (nX > sx) ? true : false,
          coX = 7.5 / (nX - sx) * .09,
          cX = nX + coX,
          bands=resistor.getNodes('.color-band'),
          bandX=bands[i].getBoundingClientRect().x,
          bandAtrX=bands[i].getAttribute('x'),
          newx=bandX-rbX,
          //nd = d[0] + ' c' + cbX + ',' + cbY + ' ' + cX + ',' + cy + ' ' + nX + ',' + ey;
          nd = 'M'+newx+','+sy + ' c' + cbX + ',' + cbY + ' ' + cX + ',' + cy + ' ' + nX + ',' + ey;
        //console.log(i+ ") " + bandX + " " + bandAtrX+ " " + newx);
        //console.log(rbX)
        /*var ua = navigator.userAgent;
        if (ua.search(/Firefox/)){
          linesvg=resistor.getNode("svg.linessvg")
            newWidth=185+300/rbX
            //linesvg.setAttribute("width",newWidth)
        }*/
        el.setAttribute('d', nd);
    });
  },
  reveal: function() {
    var rb = resistor.getNode('#resistor-base');
    rb.style.opacity = '1';
  }
}

window.onload = function() {

  resistor.computeLineEnds();
  resistor.init();
};

window.onresize =function () {
    resistor.computeLineEnds();
    resistor.init();
}
