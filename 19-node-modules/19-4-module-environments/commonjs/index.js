/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const bbarray = require('bbarray');
const { concatArray } = require('bbarray');

console.log(bbarray.concatArray('is', ['test', 'three']));
console.log(bbarray.splitArray('is', ['is test', 'is three']));
console.log(concatArray('is', ['test', 'three']));
