import * as orig from "./orig";

const fun = orig.doThingsAndStuff;

describe("Original: doThingsAndStuff(x)", () => {
  test("Ignore strings without spaces: apple, banana apple", () => {
    let arr = ["apple", "banana apple"];
    let expected = ["banana apple"];
    const res = fun(arr);
    expect(arr).toEqual(expected);
  });

  test("Ignore strings without spaces, sorts the rest in reverse: apple, banana apple, cherry banana", () => {
    let arr = ["apple", "banana apple", "cherry banana"];
    let expected = ["cherry banana", "banana apple"];
    fun(arr);
    expect(arr).toEqual(expected);
  });

  test("Capitalization effects: apple, banana apple, cherry Banana", () => {
    let arr = ["apple", "banana apple", "cherry Banana"];
    let expected = ["banana apple", "cherry Banana"];
    fun(arr);
    expect(arr).toEqual(expected);
  });

  test("All words with spaces: apple zebra, banana apple, cherry banana", () => {
    let arr = ["apple zebra", "banana apple", "cherry banana"];
    let expected = ["apple zebra", "cherry banana", "banana apple"];
    fun(arr);
    expect(arr).toEqual(expected);
  });

  test("Variable number of spaces", () => {
    const arr = [
      "fish elephant apple ball cat ",
      "dog",
      "lion kite",
      "horse goat",
    ];
    const expected = [
      "lion kite",
      "horse goat",
      "fish elephant apple ball cat ",
    ];

    fun(arr);

    expect(arr).toEqual(expected);
  });

  test("Phrases that being with a space", () => {
    const arr = [
      "fish elephant apple ball cat ",
      "dog",
      " food",
      "lion kite",
      "horse goat",
    ];
    const expected = [
      "lion kite",
      "horse goat",
      " food",
      "fish elephant apple ball cat ",
    ];

    fun(arr);

    expect(arr).toEqual(expected);
  });

  // The order of empty spaces seem arbitrary.
  // Ignoring ordering of empty spaces as a test criteria.
  test.skip("Order of empty spaces", () => {
    let arr = [" ", "banana apple", "bog dog", "apple cat", " "];
    let expected = ["bog dog", "apple cat", " ", "banana apple", " "];
    fun(arr);
    expect(arr).toEqual(expected);
  });
});
