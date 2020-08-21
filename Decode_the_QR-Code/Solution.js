function scanner(qrcode){
  let arr = [[], [], [], []],
      count = 0,
      mask;
  
  for(let x = 20; x > 8; x--) {
    for(let y = 20; y > 12; y--) {
      mask = Number(((x + y) % 2) === 0);
      if(!!qrcode[x][y] && !mask || !qrcode[x][y] && !!mask) {
        arr[count].push(1);
      } else {
        arr[count].push(0);
      }
      if((y % 2) !== 0) {
        count++;
      }
      if(count === 4) {
        count = 0;
      }
    }
  }
  let temp;
  for (let i = 0; i < 24; i += 2) {
    temp = arr[1][i];
    arr[1][i] = arr[1][i + 1];
    arr[1][i + 1] = temp;
    temp = arr[3][i];
    arr[3][i] = arr[3][i + 1];
    arr[3][i + 1] = temp;
  }
  arr[1].reverse();
  arr[3].reverse();
  mask = arr.join().split(',').join('').slice(4);
  count = parseInt(mask.slice(0, 8), 2);
  mask = mask.slice(8).slice(0, count * 8).match(/.{8}/g).map(e => e = parseInt(e, 2)).map(e => e = String.fromCharCode(e)).join('');
  return mask;
}