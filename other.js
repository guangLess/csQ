
const shuffle = (a) => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      console.log("j =", j)
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}

shuffle([0,1,2,3,4])

