function longest(str) {
  let substr = '';
  let length = 0;
  let start = 0;
  let prev = str[0];
  for (var i = 1; i <= str.length; ++i) {
    if(i == str.length || str[i] < prev) {
      if(length < i-start) {
        longestSub = str.substring(start, i);
        length = i-start;
      }
      start = i;
    }
    prev = str[i];
  };
  return longestSub;
}