// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

function getErrorMessage(errorCode) {
    let message = null;

    switch (errorCode) {
        case 'E01': {
            message = 'Invalid username or password';
            break;
        }

        case 'E02': {
            message = 'Too many attempts';
            break;
        }

        case 'E03': {
            message = 'Missing data';
            break;
        }

        default:
            message = 'Missing data';
    }

    return message;
}

console.log(getErrorMessage('E01'));

//v2
function getErrorMessage(errorCode) {
    const errorMessage = {
        E01: 'Invalid username or password',
        E02: 'Too many attempts',
        E03: 'Missing data',
    };

    const message = errorMessage[errorCode] ? errorMessage[errorCode] : 'Missing data';

    return message;
}

console.log(getErrorMessage('E02'));
