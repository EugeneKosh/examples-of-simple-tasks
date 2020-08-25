Test.describe("Longest repetition", ()=>{
  Test.it("Basic tests", function(){
    Test.assertDeepEquals( longestRepetition("aaaabb"),      ["a",4], "-- for input 'aaaabb'\n" );
    Test.assertDeepEquals( longestRepetition("bbbaaabaaaa"), ["a",4], "-- for input 'bbbaaabaaaa'\n" );
    Test.assertDeepEquals( longestRepetition("cbdeuuu900"),  ["u",3], "-- for input 'cbdeuuu900'\n" );
    Test.assertDeepEquals( longestRepetition("abbbbb"),      ["b",5], "-- for input 'abbbbb'\n" );
    Test.assertDeepEquals( longestRepetition("aabb"),        ["a",2], "-- for input 'aabb'\n" );
    Test.assertDeepEquals( longestRepetition(""),            ["",0], "-- for input ''\n" );
    Test.assertDeepEquals( longestRepetition("abcdefg"),     ["a",1], "-- for input 'abcdefg'\n" );
  });
  Test.it("Random tests", function(){
    const RANDOM_CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyz";
    function randomString(n) {
      let result = Array.from( { length: n }, () => RANDOM_CHARACTERS[ Math.floor(Math.random()*RANDOM_CHARACTERS.length) ] );
      if ( Math.random()*8<1 ) result.sort();
      return result.join("");
    }
    Function.prototype.on = function on(fn) { return (...a) => a.map(fn).reduce(this) ; };
    const maximumBy = cmp => a => a.reduce(max(cmp)) ;
    const max = cmp => (x,y) => cmp(x,y)>=0 ? x : y ;
    const compare = (x,y) => Number(x>y) - Number(x<y) ;
    const length = s => s.length ;
    const refLongRep = s => ( longestSubstring => [ longestSubstring.slice(0,1), length(longestSubstring) ] ) ( maximumBy ( compare.on(length) ) ( s.match( /([^])\1*/g ) || [""] ) ) ;
    for ( let i=95; i--; ) {
      let randomInput = randomString(500);
      Test.assertDeepEquals( longestRepetition(randomInput), refLongRep(randomInput), "-- for input '"+randomInput+"'\n" );
    }
  });
});