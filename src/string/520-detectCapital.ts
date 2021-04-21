/**
 * @param {string} word
 * @return {boolean}
 */
 export const detectCapitalUse1 = function (word:string) {
    return /(^[A-Z]*$)|(^[A-Z]?[a-z]*$)|(^[a-z]*$)/.test(word);
};

export const detectCapitalUse2 = function (word:string) {
    return word.toLowerCase() === word
    || word.toUpperCase() === word
    || word.substring(0, 1).toUpperCase() + word.toLowerCase().substring(1) === word;
};

export const detectCapitalUse3 = function (word:string) {
    let num = 0;
    const len = word.length;
    if (len < 2) {
        return true;
    }

    for (let i = 0; i < len; i++) {
        if (word.charCodeAt(i) < 91) {
            num++;
        }
    }

    if (
        num === 0
        || num === len
        || (num === 1 && word.charCodeAt(0) < 91)
    ) {
        return true;
    }

    return false;
};

export const detectCapitalUse4 = function (word:string) {
    const len = word.length;
    if (len < 2) {
        return true;
    }

    const first = word.charCodeAt(0) < 91;
    if (word.charCodeAt(0) > 96) { // 第一个字母小写
        for (let i = 1; i < len; i++) {
            if (word.charCodeAt(i) < 91) {
                return false;
            }
        }
    } else if (word.charCodeAt(0) < 91) { // 第一个字母大写
        if (word.charCodeAt(1) < 91) { // 第二个字母大写
            for (let i = 2; i < len; i++) {
                if (word.charCodeAt(i) > 96) {
                    return false;
                }
            }
        } else { // 第二个字母小写
            for (let i = 2; i < len; i++) {
                if (word.charCodeAt(i) < 91) {
                    return false;
                }
            }
        }
    }

    return true;
};