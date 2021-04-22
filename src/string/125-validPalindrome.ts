/**
 * @param {string} s
 * @return {boolean}
 */
 export const isPalindrome = function(s:string) {
     if(s.length < 1){
        return true;
     }

    const letters = s.match(/[A-Z]|[a-z]|[0-9]/g) ?? [];
    let i = 0;
    let j = letters.length-1;

    while(i <= j){
        if(letters[i].toLocaleLowerCase() !== letters[j].toLocaleLowerCase()){
            return false;
        }

        i++;
        j--;   
    }

    return true;
};
