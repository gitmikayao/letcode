/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function (s:string) {
    if (s.length < 1) {
        return true;
    }

    const letters = s.match(/[A-Z]|[a-z]|[0-9]/g) ?? [];
    let i = 0;
    let j = letters.length - 1;

    while (i <= j) {
        if (letters[i].toLocaleLowerCase() !== letters[j].toLocaleLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

export const isPalindrome1 = function (s:string) {
    let i = 0;
    let j = s.length - 1;

    while (i <= j) {
        let head = s.charCodeAt(i);
        let tail = s.charCodeAt(j);
        while (
            head < 48
           || (head > 57 && head < 65)
           || (head > 90 && head < 97)
           || head > 122
        ) {
            i++;
            head = s.charCodeAt(i);
        }

        if (isNaN(head)) { // 空串
            return true;
        }

        while (
            tail < 48
           || (tail > 57 && tail < 65)
           || (tail > 90 && tail < 97)
           || tail > 122
        ) {
            j--;
            tail = s.charCodeAt(j);
        }

        if (isNaN(tail)) { // 空串
            return true;
        }

        const headIsLetter = (head >= 65 && head <= 90) || (head >= 97 && head <= 122);
        const tailIsLetter = (tail >= 65 && tail <= 90) || (tail >= 97 && tail <= 122);

        if (!( head === tail 
            || (headIsLetter && tailIsLetter && Math.abs(head - tail) === 32))
        ) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};