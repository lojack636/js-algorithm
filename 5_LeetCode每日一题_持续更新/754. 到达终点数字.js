function reachNumber(target) {
	target = Math.abs(target)
	let sum = 0
	let n = 0
	while (sum < target || (sum - target) % 2 != 0) {
		sum += n
		n++
	}
	return n - 1
}

/* 
思路概述：
给一个target，不管值是正值还是负值，需要的步数是同样的，所以我们统一考虑为正值，统一取绝对值。
向右走是加，向左走是减，那我们可以先不停的向右走，那么走的格数就是1+2+3+… 当无法得到给定的target值
时，代表我们其中是有几步是需要向左走的，那么向左走一步，会导致结果减小2对应的步数。
比如第二格我们向左，本来是加2，现在是减2，一来一去少了2*2=4格。
所以我们可以不断累加，直到遇到sum值-target是偶数的情况，当前走的步数就是结果

*/
