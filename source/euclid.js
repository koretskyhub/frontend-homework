'use strict';

const euclid = (...numbers) => {
	  for ( var x = Math.abs(numbers[ 0 ]), i = 1; i < numbers.length; i++ ) {
	    var y = Math.abs(numbers[ i ]);
	    if (y===0) continue;
	    while ( x && y ) {
	      x > y ? x %= y : y %= x;
	    }
	    x += y;
	  }
	  return x;
};