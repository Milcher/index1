let arrF = [1, 2, -3, 4, -5, 6, 7, 8, -9, 10, 11, 12, 13, -14, 15, 16, -17, 18];
let arrP = [];

arrF.forEach(f => {
    p = 0.13 * Math.pow(f, 3) - 2.5 * f + 8
    if (p < 0) {
        arrP.push (p)
    }
});

console.log(arrP)

let a=6
let b=7
let c=8
let d=4
function mmm(x, y) {
    return Math.max(x, y);
  }
  console.log(mmm(a,d));
  console.log(mmm(b,c));

  function vvv(x) {
    if (x == x.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
  console.log(
    vvv("aba"),
    vvv("fmfmmfn"),
    vvv("vvgvv"),
    vvv("oFo"),
    vvv("ofofof")
  );

  