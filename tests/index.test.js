const longestCommonPrefix = require("../src/index");

test("should return the longest common prefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix(["display", "disney", "discord"])).toBe("dis");
  expect(longestCommonPrefix(["marvel", "dc"])).toBe("");
  expect(longestCommonPrefix(["ball", "ball"])).toBe("ball");
});
