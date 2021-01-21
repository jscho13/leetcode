const isValid = (s: string): boolean => {
    let q: string[] = [];
    let str: string[] = s.split('');
    let map: {[key: string]: string} = {'}':'{', ']':'[', ')':'('};

    while (str.length) {
        let ch: string = str.shift();
        if (map[ch] && map[ch] === q[q.length-1]) {
            q.pop();
        } else {
            q.push(ch);
        }
    }
    return q.length === 0;
};
