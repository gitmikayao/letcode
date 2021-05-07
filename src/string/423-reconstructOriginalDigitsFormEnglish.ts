/**
 * @param {string} s
 * @return {string}
 */
 export const originalDigits = function(s:string) {
    // 统计频次
    const map = new Map();
    for (let char of s) {
        map.set(char, map.get(char) ? map.get(char) + 1 : 1);
    }

    // 0-z 2-w 4-u 6-x 8-g
    const arr = [];
    arr[0] = map.get("z") || 0;
    arr[2] = map.get("w") || 0;
    arr[4] = map.get("u") || 0;
    arr[6] = map.get("x") || 0;
    arr[8] = map.get("g") || 0;

    // 1-o 3-rth 5-fi 7-s
    arr[1] = (map.get("o") || 0) - arr[0] - arr[2] - arr[4];
    arr[3] = Math.min(
        (map.get("r") || 0) - arr[0] - arr[4],
        (map.get("t") || 0) - arr[2] - arr[8],
        (map.get("h") || 0) - arr[8]
    );
    arr[5] = Math.min(
        (map.get("f") || 0) - arr[4],
        (map.get("i") || 0) - arr[6] - arr[8]
    );
    arr[7] = (map.get("s") || 0) - arr[6];

    // 9-en
    arr[9] = Math.min(
        (map.get("e") || 0) - arr[0] - arr[1] - 2 * arr[3] - arr[5] - 2 * arr[7] - arr[8],
        ((map.get("n") || 0) - arr[1]) / 2
    );

    let res = "";
    arr.forEach((val, index) => {
        if (val) {
            res += index.toString().repeat(val);
        }
    })

    return res;
};