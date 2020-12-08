/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
    let ary = new Array(n);
    for (let i=0; i<n; i++) {
        ary[i] = new Array(n).fill(0);
    }

    const check = (x,y) => {
        if (ary[y] && ary[y][x] === 0) {
            return false;
        } else {
            return true;
        }
    }
    
    let [x,y,num,dir]=[0,0,0,'e'];
    let total = Math.pow(n,2);
    while (num<total) {
        num++;
        ary[y][x] = num;
        switch (dir) {
            case 'e':
                x++;
                if (check(x,y)) {
                    x--;
                    y++;
                    dir='s';
                }
                break;
            case 's':
                y++;
                if (check(x,y)) {
                    y--;
                    x--;
                    dir='w';
                }
                break;
            case 'w':
                x--;
                if (check(x,y)) {
                    x++;
                    y--;
                    dir='n';
                }
                break;
            case 'n':
                y--;
                if (check(x,y)) {
                    y++;
                    x++;
                    dir='e';
                }
                break;
        }
    }
    
    return ary;
};
