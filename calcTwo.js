let operation;
const OPERATIONS = {
  add: "+",
  sub: "-",
  mult: "*",
  divis: "/",
  sin: "sin",
  cos: "cos",
  rad: "rad"
};

// функция фокуса на форме
function setFocus(){
  document.getElementById("input-id").focus();
}

let buttonad = document.getElementById("buttonad"); //кнопка +
buttonad.addEventListener("click", add);

function add() {
  x = document.getElementById("input-id").value;
  x = Number(x);
  let num_1 = document.getElementById("input-id");
  operation = OPERATIONS.add;
  num_1.value = "";
  setFocus();
}

let buttonsub = document.getElementById("buttonsub"); //кнопка -
buttonsub.addEventListener("click", sub);

function sub() {
  x = document.getElementById("input-id").value;
  x = Number(x);
  let num_1 = document.getElementById("input-id");
  operation = OPERATIONS.sub;
  num_1.value = "";
  setFocus();
}

let buttonmult = document.getElementById("buttonmult"); //кнопка *
buttonmult.addEventListener("click", mult);

function mult() {
  x = document.getElementById("input-id").value;
  x = Number(x);
  let num_1 = document.getElementById("input-id");
  operation = OPERATIONS.mult;
  num_1.value = "";
  setFocus();
}

let buttondivis = document.getElementById("buttondivis"); //кнопка /
buttondivis.addEventListener("click", divis);

function divis() {
  x = document.getElementById("input-id").value;
  x = Number(x);
  let num_1 = document.getElementById("input-id");
  operation = OPERATIONS.divis;
  num_1.value = "";
  setFocus();
}

let buttonsin = document.getElementById("buttonsin"); //кнопка sin
buttonsin.addEventListener("click", sin);

function sin() {
  operation = OPERATIONS.sin;
  calculate()
}

let buttoncos = document.getElementById("buttoncos"); //кнопка cos
buttoncos.addEventListener("click", cos);

function cos() {
  operation = OPERATIONS.cos;
  calculate()
}

let buttontan = document.getElementById("buttontan"); //кнопка tan
buttontan.addEventListener("click", tan);

function tan() {
  operation = OPERATIONS.tan;
  calculate()
}

let buttonrad = document.getElementById("buttonrad"); //кнопка √
buttonrad.addEventListener("click", rad);

function rad() {
  operation = OPERATIONS.rad;
  calculate()
}

let resultbatton = document.getElementById("resultbatton"); //кнопка результат
resultbatton.addEventListener("click", calculate);

//функция вычисления
function calculate() {
  y = document.getElementById("input-id").value;
  y = Number(y);
  let num_1 = document.getElementById("input-id");
  num_1.value = "";
console.log("КУ")
  switch (operation) {
    case OPERATIONS.add:
      result = addition(x, y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.sub:
      result = substraction(x, y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.mult:
      result = multiplication(x, y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.divis:
      result = division(x, y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.sin:
      result = sinus(y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.cos:
      result = cosine(y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.tan:
      result = tangent(y);
      document.getElementById("input-id").value = result;
      break;
    case OPERATIONS.rad:
      result = radix(y);
      document.getElementById("input-id").value = result;
      break;
  }
  setFocus();
}
