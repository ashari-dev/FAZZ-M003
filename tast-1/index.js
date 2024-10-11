function fazzUniv(arr) {
  const nilai = [];
  arr.forEach((e) => {
    if (e % 5 < 3) {
      nilai.push(e);
    } else if (e < 38) {
      nilai.push(e);
    } else if (e % 5 >= 3) {
      nilai.push(Math.round(e / 5) * 5);
    }
  });

  return nilai;
}

const arr = [73, 67, 38, 33];

console.log(fazzUniv(arr));
