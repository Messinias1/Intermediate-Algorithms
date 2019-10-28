function convertHTML(str) {
  console.log(str);
  if (
    str.includes("&") ||
    str.includes("<") ||
    str.includes(">") ||
    str.includes('""') ||
    str.includes("'")
  ) {
    console.log("true");
    console.log(
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
    );
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  } else {
    console.log("false");
    return str;
  }
}

convertHTML("Hamburgers < Pizza < Tacos");
// 24m 46s

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana
