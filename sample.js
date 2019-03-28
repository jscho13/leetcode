var expressiveWords = function(S, words) {
    var lenS = S.length;
    if(lenS === 0) {// should not be empty
        return 0;
    }
    
    var n = words.length;
    var res = 0;
    for(let i = 0; i < n; i++) {
        var lenW = words[i].length;
        if(lenW === 0 || lenW >= lenS) {// words[i] should not be empty or longer than S
            return 0;
        }
        var j, k;
        [j, k] = [0, 0];
        var streched = false;// if group word in words[i] can strech and form into group word in S
        console.log(words[i]);
        for(; j < lenS && k < lenW; j++, k++) {
            var startS, startW;
            [startS, startW] = [j, k];
            if(S[j] === words[i][k]) {
                while(j < lenS - 1 && S[j] === S[j+1]) j++;
                while(k < lenW - 1 && words[i][k] === words[i][k+1]) k++;
                console.log('j:'+j);
                console.log('k:'+k);
                if(j - startS >= 2) {//when one character repeats twice or more, viewed as streched.
                    streched = true;
                }
                else if(j - startS !== k - startW) {//if not streched, should be identical
                    streched = false;
                    break;
                }
            }
            else {
                streched = false;
                break;
            }
        }
        if(streched) {
            res++;
        }
    }
    return res;
};

console.log(expressiveWords("helllllooo", ["hello", "hi", "helo"]));
