"use scrict";
var str1 = "shozibshz";
var str2 = "shz";

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === str2[0]) {
    var flag = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] === str2[j]) {
        // console.log(str2[j]);
      } else {
        flag = false;
      }
    }
  }
}
if (flag === true) {
  console.log("Subsequent");
} else if (flag === false) {
  console.log("Not Subsequent");
}
