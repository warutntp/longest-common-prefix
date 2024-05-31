function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let word = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== word || i >= strs[j].length) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}

module.exports = longestCommonPrefix;
