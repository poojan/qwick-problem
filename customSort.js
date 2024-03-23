const customSort = (stringArr) => {
  return stringArr
    .filter((str) => str.includes(" ")) // Remove strings that don't contain a space
    .sort((aStr, bStr) => {
      const aSpacePos = aStr.indexOf(" ");
      const bSpacePos = bStr.indexOf(" ");

      const a = aStr.substr(aSpacePos + 1);
      const b = bStr.substr(bSpacePos + 1);

      const shorterLen = a.length < b.length ? a.length : b.length;

      for (let i = 0; i < shorterLen; i++) {
        if (a.charCodeAt(i) < b.charCodeAt(i)) {
          return -1;
        }
        if (a.charCodeAt(i) > b.charCodeAt(i)) {
          return 1;
        }
      }

      return aStr.length - bStr.length;
    }) // Sort strings based on char codes after a space.
    .reverse(); // Reverse the order of the strings
};

// Wrapper for customSort() function.
// Retains the function signature of doThingsAndStuff which modifies the original array.
export const doThingsAndStuff = (x) => {
  if (!x) {
    return;
  }

  if (!Array.isArray(x)) {
    return;
  }

  if (x.some((item) => typeof item !== "string")) {
    return;
  }

  const result = customSort(x);

  // Clear the original array
  x.splice(0, x.length);

  // Push the modified content back into the original array
  result.forEach((item) => x.push(item));
};
