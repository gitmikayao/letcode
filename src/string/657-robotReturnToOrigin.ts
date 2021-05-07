/**
 * @param {string} moves
 * @return {boolean}
 */
 export const judgeCircle = function(moves:string) {
    let sumX = 0;
    let sumY = 0;
    for (let char of moves) {
        switch (char) {
            case "L":
                sumX--;
                break;
            case "R":
                sumX++;
                break;
            case "U":
                sumY--;
                break;
            case "D":
                sumY++;
                break;
        }
    }

    return sumY === 0 && sumX === 0;
};