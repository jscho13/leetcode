/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    let count = n;
    for (let i=0; i<flowerbed.length; i++) {
        if (flowerbed[i] === 0 && !flowerbed[i-1] && !flowerbed[i+1]) {
            flowerbed[i] = 1;
            count--;
        }
    }
    
    return count <= 0;
};
