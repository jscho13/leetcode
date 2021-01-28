function concatenatedBinary(n: number): number {
    let i = 1;
    let ans = 0;
    while (i<=n) {
        let num = i;
        while (num > 0) {
            ans=(ans*2)%(Math.pow(10, 9)+7);
            num >>= 1;
        }
        ans+=i;
        i++;
    }
    return ans;
};
