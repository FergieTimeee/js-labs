// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8 --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4 --> 'Bad'

function classifyStudent(mark) {
    let result;

    // checking..
    switch (mark) {
        case 1:
        case 2:
        case 3: {
            result = 'Bad';
            break;
        }

        case 4:
        case 5:
        case 6: {
            result = 'Not Good';
            break;
        }

        case 7:
        case 8: {
            result = 'Good';
            break;
        }

        case 9:
        case 10: {
            result = 'Excellence';
            break;
        }

        default: {
            result = 'Invalid mark';
        }
    }

    return result;
}
console.log(classifyStudent(4));
