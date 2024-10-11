function Latswords(words) {
  const lats = words.split(" ");
  return lats[lats.length - 1].length;
}

const s = "Hello Words";

console.log(Latswords(s));
