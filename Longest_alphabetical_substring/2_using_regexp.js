function longest(str) {
  
  const regExp = /a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g;
  const searcher = (first, second) => {
    if(first.length >= second.length) {
      return first;
    } else {
      return second;
    }
  }
  
  return str.match(regExp).reduce(searcher);
}