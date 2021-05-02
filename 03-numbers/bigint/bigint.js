// Two ways to make BigInts
const bigInteger1 = BigInt(10);
console.log(bigInteger1);

const bigInteger2 = 20n;
console.log(bigInteger2);

// Convert a BigInt to an ordinary number
const integer = Number(bigInteger2);
console.log(integer);

// Demonstrate the difference between an ordinary Number and the BigInt for very large values:

// Ordinarily, large integers suffer from imprecision
const maxInt = Number.MAX_SAFE_INTEGER // Probably about 9007199254740991
console.log(maxInt + 1);  // 9007199254740992 (reasonable)
console.log(maxInt + 2);  // 9007199254740992 (not a typo, this seems wrong)
console.log(maxInt + 3);  // 9007199254740994 (sure)
console.log(maxInt + 4);  // 9007199254740996 (wait, what now?)

// BigInts behave more reliably
const bigInt = BigInt(maxInt);
console.log(bigInt + 1n);  // 9007199254740992 (as before)
console.log(bigInt + 2n);  // 9007199254740993 (this is better)
console.log(bigInt + 3n);  // 9007199254740994 (still good)
console.log(bigInt + 4n);  // 9007199254740995 (excellent!)
