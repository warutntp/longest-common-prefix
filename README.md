# Longest Common Prefix

This project aims to solve the problem of finding the longest common prefix string amongst an array of strings. If there is no common prefix, the function returns an empty string.

## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Examples

#### Example 1
- **Input:** `strs = ["flower","flow","flight"]`
- **Output:** `"fl"`

#### Example 2
- **Input:** `strs = ["dog","racecar","car"]`
- **Output:** `""`
- **Explanation:** There is no common prefix among the input strings.

### Constraints
- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lower-case English letters.

## Solution

The function `longestCommonPrefix` is implemented in `src/index.js`. The function iterates through the characters of the first string and compares them with the corresponding characters of the other strings. If a mismatch is found or the end of any string is reached, the function returns the substring from the beginning to the position of the mismatch.

### Code

#### `src/index.js`

```javascript
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
```

## Rationale
This approach is chosen because it efficiently finds the longest common prefix by comparing characters at each position across all strings. It stops as soon as a mismatch is found or any string ends, ensuring the minimum number of comparisons needed to determine the result. This method is straightforward and easy to understand, making it a practical solution for the problem constraints.

## Testing
The tests for the function are implemented in tests/index.test.js using Jest. The test cases cover various scenarios including strings with common prefixes, strings with no common prefix, and edge cases.

### Code

`tests/index.test.js`

```javascript
const longestCommonPrefix = require("../src/index");

test("should return the longest common prefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix(["display", "disney", "discord"])).toBe("dis");
  expect(longestCommonPrefix(["marvel", "dc"])).toBe("");
  expect(longestCommonPrefix(["ball", "ball"])).toBe("ball");
});

```

## How to Run

1. **Clone the repository**:

```bash
git clone git@github.com:warutntp/longest-common-prefix.git
cd longest-common-prefix
```

2. **Install dependencies**: Run `npm install` to install the necessary dependencies.

3. **Run tests**: Run `npm test` to execute the test cases using Jest.
