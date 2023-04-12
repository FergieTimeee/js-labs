const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
};

const keyList = Object.keys(student);
// console.log(keyList); //[ 'id', 'name', 'isHero' ]

//c1 for
// for (let index = 0; index < keyList.length; index++) {
//     const key = keyList[index];

//     console.log(key); //id, name, isHero
//     console.log(student[key]); // 1,Van A, true
// }

//foreach

// keyList.forEach((key) => {
//     console.log(key);
//     console.log(student[key]);
// });

//c3 for in
//recommended
for (const key in student) {
    const element = student[key];
    console.log(key); //id, name, isHero
    console.log(element); // 1,Van A, true
}

/**
 * Các đối tượng là các mảng kết hợp với một số tính năng đặc biệt.

Chúng lưu trữ các thuộc tính (cặp khóa-giá trị), trong đó:

Khóa thuộc tính phải là chuỗi hoặc ký hiệu (thường là chuỗi).
Các giá trị có thể thuộc bất kỳ loại nào.
Để truy cập một thuộc tính, chúng ta có thể sử dụng:

Kí hiệu dấu chấm: obj.property.
Ký hiệu ngoặc vuông obj["property"]. Dấu ngoặc vuông cho phép lấy khóa từ một biến, như obj[varWithKey].
Toán tử bổ sung:

Để xóa một thuộc tính: delete obj.prop.
Để kiểm tra xem một thuộc tính có khóa đã cho có tồn tại hay không: "key" in obj.
Để lặp lại một đối tượng: for (let key in obj)loop.
Những gì chúng ta đã nghiên cứu trong chương này được gọi là “đối tượng đơn giản”, hoặc chỉ Object.

Có nhiều loại đối tượng khác trong JavaScript:

Array để lưu trữ các bộ sưu tập dữ liệu được sắp xếp,
Date để lưu trữ thông tin về ngày và thời gian,
Error để lưu trữ thông tin về một lỗi.
…Và như thế.
 */

/**
 Tạo một đối tượng rỗng user.
Thêm thuộc tính name với giá trị John.
Thêm thuộc tính surname với giá trị Smith.
Thay đổi giá trị của name thành Pete.
Xóa thuộc tính name khỏi đối tượng.
 */

const user = {};

//c1
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// console.log('user :', user);
//c2
user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];
console.log('user :', user);

//bt2
// Viết hàm isEmpty(obj)trả về true nếu đối tượng không có thuộc tính, false ngược lại.
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ id: 1, name: 'Van A', isHero: true }));

//c2
function isEmpty2(obj) {
    for (const key in obj) {
        return false;
    }

    return true;
}

//bt3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

// Viết mã để tổng hợp tất cả các khoản lương và lưu trữ trong biến sum. Nên 390 ở ví dụ trên.

// Nếu salaries trống, thì kết quả phải là 0.
function salary(obj) {
    if (Object.keys(obj).length === 0) return 0;

    let sum = 0;

    for (const key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(salary(salaries));

//bt4
// Tạo một hàm multiplyNumeric(obj) nhân tất cả các giá trị thuộc tính số của objvới 2.

// before the call
let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

// multiplyNumeric(menu);

// after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: 'My menu',
// };

// Xin lưu ý rằng multiplyNumeric không cần phải trả lại bất cứ điều gì. Nó sẽ sửa đổi đối tượng tại chỗ.

// PS Sử dụng typeof để kiểm tra một số ở đây.

function multiplyNumeric(obj) {
    for (let key in obj) {
        let element = obj[key];

        if (typeof element === 'number') {
            element *= 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu);

// 3. Get average mark of an object
// calcAvgMark({ math: 10, english: 8 }) --> 9
function calcAvgMark(mark) {
    if (!mark) return -1;

    let sum = 0;
    const lengthMark = Object.keys(mark).length;

    for (const key in mark) {
        sum += mark[key];
    }

    return (mediumMark = sum / lengthMark);
}

console.log(calcAvgMark({ math: 10, english: 6 }));

const studentA = { name: 'Bob', math: 9 };

function cloneObject(obj) {
    let cloneObj = {};

    return (cloneObj = { ...obj });
    // for (let key in obj) {
    //     cloneObj[key] = obj[key];
    // }
    // return cloneObj;
}

console.log(cloneObject(studentA));

function isEqual(obj1, obj2) {
    const keyObj1 = Object.keys(obj1);
    const keyObj2 = Object.keys(obj2);

    if (keyObj1.length !== keyObj2.length) return false;
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(isEqual({}, {}));
