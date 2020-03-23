class Trie {
  constructor () {
    this.dict = {};
  }
  
  insert(word) {
    let dict = this.dict;
    for (let i=0; i<word.length; i++) {
      let l = word[i];
      if (!dict[l]) dict[l] = {};
      dict = dict[l];
    }
    dict['word'] = true;
  }
  
  traverse(word) {
    let dict = this.dict;
    for (let i=0; i<word.length; i++) {
      let l = word[i];
      if (dict[l] === undefined) return false;
      dict = dict[l];
    }
    return dict;    
  }

  search(word) {
    word = this.traverse(word);
    return !!word['word'];
  }

  startsWith(word) {
    return !!this.traverse(word);
  }
}
