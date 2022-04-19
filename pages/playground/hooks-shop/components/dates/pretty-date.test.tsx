const PrettyDate = require("./pretty-date");

test("Show Date as pretty String", () => {
  const dateObj = new Date(2000, 20, 2);
  const DateComp = PrettyDate(dateObj);

  expect(DateComp).toBe("¬");
});
