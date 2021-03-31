var calculator = {
  //  CREATE calculator HTML
  calcWrap: null, // calculator wrapper container
  calcPad: null, // calculator itself
  calcdisplay: null, // number display
  btnWrap: null, // buttons wrapper
  eachBtn: {}, // individual buttons
  init: function(){
    //  WRAPPER
    calculator.calcWrap = document.createElement("div");
    calculator.calcWrap.id = "numWrap";

    //  ENTIRE calculator ITSELF
    calculator.calcPad = document.createElement("div");
    calculator.calcPad.id = "calculator";
    calculator.calcWrap.appendChild(calculator.calcPad);
    
    // DISPLAY
    calculator.calcdisplay = document.createElement("input");
    calculator.calcdisplay.id = "numDisplay";
    calculator.calcdisplay.type = "text";
    calculator.calcdisplay.disabled = true;
    calculator.calcdisplay.value = "0";
    calculator.calcPad.appendChild(calculator.calcdisplay);

    // NUMBER BUTTONS
    calculator.btnWrap = document.createElement("div");
    calculator.btnWrap.id = "numBWrap";
    calculator.calcPad.appendChild(calculator.btnWrap);

    //  BUTTONS
    let buttonPress = function (txt, css, fn) {
      let button = document.createElement("div");
      button.innerHTML = txt;
      button.classList.add(css);
      button.addEventListener("click", fn);
      calculator.btnWrap.appendChild(button);
      calculator.eachBtn[txt] = button;
    };

    // Cancel
    buttonPress("off", "cx", calculator.hide);
    // Clear
    buttonPress("C", "clr", calculator.reset);
    // Backspace
    buttonPress("&#10502;", "del", calculator.delete);
    //plus
    buttonPress("+", "add", calculator.plus);
    
    // 7 to 9
    for (let i=7; i<=9; i++) { buttonPress(i, "num", calculator.digit); }
    //minus
    buttonPress("-", "minus", calculator.minus);
    // 4 to 6
    for (let i=4; i<=6; i++) { buttonPress(i, "num", calculator.digit); }
    //multiply
    buttonPress("*", "multi", calculator.multiply);
    // 1 to 3
    for (let i=1; i<=3; i++) { buttonPress(i, "num", calculator.digit); }
    // divide
    buttonPress("/", "divi", calculator.divide);
    // 0
    buttonPress(0, "zero", calculator.digit);
    // .
    buttonPress(".", "dot", calculator.dot);
    // OK
    buttonPress("=", "equals", calculator.equals);

    // ATTACH calculator TO HTML BODY
    document.body.appendChild(calculator.calcWrap);
  },

 
  
  // ( NUMBER (0 TO 9)
  digit: function(){
    let current = calculator.calcdisplay.value,
        append = this.innerHTML;
    if (current.length < 255) {
      if (current=="0") {
        calculator.calcdisplay.value = append;
      } else {
        calculator.calcdisplay.value += append;
      }
    }
  },

  //  ADD DECIMAL POINT
  dot: function(){
    if (calculator.calcdisplay.value.indexOf(".") == -1) {
      if (calculator.calcdisplay.value=="0") {
        calculator.calcdisplay.value = "0.";
      } else {
        calculator.calcdisplay.value += ".";
      }
    }
  },

  // ADD DIVIDE
  divide: function(){
    if (calculator.calcdisplay.value.indexOf(".") == -1) {
      if (calculator.calcdisplay.value=="0") {
        calculator.calcdisplay.value = "0/";
      } else {
        calculator.calcdisplay.value += "/";
      }
    }
  },
  // ADDITION
  plus: function(){
    if (calculator.calcdisplay.value.indexOf(".") == -1) {
      if (calculator.calcdisplay.value=="0") {
        calculator.calcdisplay.value = "0+";
      } else {
        calculator.calcdisplay.value += "+";
      }
    }
  },
  // MULTIPLICATION
  multiply: function(){
    if (calculator.calcdisplay.value.indexOf(".") == -1) {
      if (calculator.calcdisplay.value=="0") {
        calculator.calcdisplay.value = "0*";
      } else {
        calculator.calcdisplay.value += "*";
      }
    }
  },

  //SUBTRACTION
  minus: function(){
    if (calculator.calcdisplay.value.indexOf(".") == -1) {
      if (calculator.calcdisplay.value=="0") {
        calculator.calcdisplay.value = "0-";
      } else {
        calculator.calcdisplay.value += "-";
      }
    }
  },

  // BACKSPACE
  delete: function(){
    var length = calculator.calcdisplay.value.length;
    if (length == 1) { calculator.calcdisplay.value = 0; }
    else { calculator.calcdisplay.value = calculator.calcdisplay.value.substring(0, length - 1); }
  },

  // CLEAR ALL
  reset: function(){ calculator.calcdisplay.value = "0"; },

  //   EQUALS 
  equals: function(){
    calculator.calcdisplay.value = eval(calculator.calcdisplay.value);
    // calculator.hide();
  },

  // (C) ATTACH calculator TO INPUT FIELD
  openCalc: function(id){

    let showCalc = document.getElementById(id);
 
    showCalc.addEventListener("click", calculator.show);
  },

  // (D) SHOW calculator
  show: function() {
    
    calculator.calcWrap.classList.add("open"); 
  },

  // (E) HIDE calculator
  hide: function(){ calculator.calcWrap.classList.remove("open"); },
};
window.addEventListener("DOMContentLoaded", calculator.init);