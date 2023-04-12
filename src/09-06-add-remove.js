// ct
// 1 push(element0, ..., elementN) Thêm cuối mảng
// 2 pop() Xoá cuối mảng
// 3 shift() Xoá đầu mảng
// 4 unshift(element0, ..., elementN) Thêm đầu mảng
// 5 splice(start, deleteCount, item1, ..., itemN)
const numberList = [3, 5, 7];
numberList.splice(0, 0, 2, 4);
console.log(numberList); //[2, 4, 3, 5, 7]

const numberList1 = [1, 3, 5, 7];
numberList1.splice(2, 1, 2, 4);
console.log(numberList1); //[1, 3, 2,4,7]

const numberList3 = [1, 3, 5, 7]; // [1, 3, 2, 4, 7]
numberList3.splice(2, 0, 4, 4);
console.log(numberList3);

//push (them phan tu vao cuoi mang)
const numberList4 = [1, 3, 5];
numberList4.push(3, 3);
console.log(numberList4); //[1, 3, 5,3, 3]

//pop (xoa phan tu vao cuoi mang) tra ve:Phần tử bị xóa khỏi mảng; undefined nếu mảng trống.
const numberList5 = [1, 3, 5];
const lastNumber = numberList5.pop();
console.log(lastNumber);
