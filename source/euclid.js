'use strict';

const euclid = (...numbers) => numbers.reduce(function(subNod, currNum)
{
	subNod = Math.abs(subNod);
	currNum = Math.abs(currNum);
	if (currNum!==0) {
		while ( subNod && currNum ) {
	     	subNod > currNum ? subNod %= currNum : currNum %= subNod;
	    }
	    return subNod+currNum;
	} else {
			return subNod;
		}
}, 0);
