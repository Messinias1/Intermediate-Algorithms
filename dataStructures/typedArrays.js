var byteSize = 64;
var buffer = new ArrayBuffer(byteSize);
var i32View = new Int32Array(buffer);
buffer.byteLength; // Returns 6
i32View.byteLength; // Returns 6
console.log(i32View); // Returns [0, 0, 0
