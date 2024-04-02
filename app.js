let num = "1234567890";
let password = "";
let txt = document.getElementById("txt");
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let txt4 = document.getElementById("txt4");
let txt5 = document.getElementById("txt5");
let txtarr = [txt, txt1, txt2, txt3, txt4, txt5];
function create() {
  for (let i = 0; i <= txtarr.length - 1; i++) {
    let numrandom = Math.floor(Math.random() * num.length);
    password = num[numrandom];
    txtarr[i].value = password;
  }
  password = "";
}
