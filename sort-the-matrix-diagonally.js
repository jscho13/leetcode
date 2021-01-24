// O(n*m*nlogn)
// S(min(n,m))
function diagonalSort(mat: number[][]): number[][] {
    let h: number = mat.length;
    let w: number = mat[0].length;
    let diag: number[] = new Array();
    let [i,x,y] = [0,0,h-1];
    
    while (y>0 || x<w) {
        i = 0;
        while (mat[y+i] && mat[y+i][x+i]) {
            diag.push(mat[y+i][x+i]);
            i++;
        }

        diag.sort((a,b) => { return a-b });        
        i = 0;
        while (diag.length) {
            mat[y+i][x+i] = diag.shift();
            i++;
        }

        if (y===0) x++;
        if (y>0) y--;
    }
        
    return mat;
};
