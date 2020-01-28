const e1 = new Error('standard error');
console.log('typeof e1: ', typeof e1);
console.log('e1 instanceof Error: ', e1 instanceof Error);
console.log('Error.prototype.isPrototypeOf(e1): ', Error.prototype.isPrototypeOf(e1));
console.log('e1: ', e1);
console.log('e1.toString(): ', e1.toString());

function SubtypeError(message = '') {
  // Errors should have a name and a message
  this.name = 'SubtypeError';
  this.message = message;

  // If this.stack is available
  this.stack = (new Error()).stack;
}

const s1 = new SubtypeError('subtype instance 1');
console.log('typeof s1: ', typeof s1);
console.log('s1: ', s1);
console.log('s1.toString(): ', s1.toString());
console.log('s1 instanceof Error: ', s1 instanceof Error);
console.log('s1 instanceof SubtypeError: ', s1 instanceof SubtypeError);
console.log('Error.prototype.isPrototypeOf(s1): ', Error.prototype.isPrototypeOf(s1));
console.log('SubtypeError.prototype.isPrototypeOf(s1): ', SubtypeError.prototype.isPrototypeOf(s1));

SubtypeError.prototype = new Error;
const s2 = new SubtypeError('subtype instance 2');
console.log('### After prototype reassignment: ###');
console.log('typeof s2: ', typeof s2);
console.log('s2: ', s2);
console.log('s2.toString(): ', s2.toString());
console.log('s2 instanceof Error: ', s2 instanceof Error);
console.log('s2 instanceof SubtypeError: ', s2 instanceof SubtypeError);
console.log('Error.prototype.isPrototypeOf(s2): ', Error.prototype.isPrototypeOf(s2));
console.log('SubtypeError.prototype.isPrototypeOf(s2): ', SubtypeError.prototype.isPrototypeOf(s2));

class ExtendedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ExtendedError';
  }
}

const ee1 = new ExtendedError('subtype instance 2');
console.log('### Class-based Error ### ');
console.log('typeof ee1: ', typeof ee1);
console.log('ee1: ', ee1);
console.log('ee1.toString(): ', ee1.toString());
console.log('ee1 instanceof Error: ', ee1 instanceof Error);
console.log('ee1 instanceof ExtendedError: ', ee1 instanceof ExtendedError);
console.log('Error.prototype.isPrototypeOf(ee1): ', Error.prototype.isPrototypeOf(ee1));
console.log('ExtendedError.prototype.isPrototypeOf(ee1): ', ExtendedError.prototype.isPrototypeOf(ee1));
