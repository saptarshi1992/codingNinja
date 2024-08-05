function main(email) {
    let result;
    //write your program here to verify the email

    //assign your final ans in result;
    let emaiLen = email.length;
    let lenS = email.indexOf('@');
    let lastDot = email.lastIndexOf('.');

    if (emaiLen > 11) {
        if (emaiLen - 1 >= 3) {
            if ((emaiLen - lastDot) - 1 >= 2 || (emaiLen - lastDot) - 1 <= 3) {
                if ((lastDot - lenS) - 1 >= 3) {
                    result = email + " is valid"
                }
                else {
                    result = email + " is notvalid"
                }
            } else {
                result = email + " is notvalid"
            }
        } else {
            result = email + " is notvalid"
        }
    }
    else {
        result = email + " is notvalid"
    }
    return result;
}
