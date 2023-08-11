function convertTimeToWords(timeString) {
  const hourWords = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];

  const minuteWords = [
    "o’clock",
    "oh one",
    "oh two",
    "oh three",
    "oh four",
    "oh five",
    "oh six",
    "oh seven",
    "oh eight",
    "oh nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "thirty",
    "thirty one",
    "thirty two",
    "thirty three",
    "thirty four",
    "thirty five",
    "thirty six",
    "thirty seven",
    "thirty eight",
    "thirty nine",
    "forty",
    "forty one",
    "forty two",
    "forty three",
    "forty four",
    "forty five",
    "forty six",
    "forty seven",
    "forty eight",
    "forty nine",
    "fifty",
    "fifty one",
    "fifty two",
    "fifty three",
    "fifty four",
    "fifty five",
    "fifty six",
    "fifty seven",
    "fifty eight",
    "fifty nine",
  ];
  /*convert time string to 2 number for hours and minutes
  using ':' as the separator, 
  converts them to numbers, and assigns the values to the hours and minutes variables using array destructuring.
  */
  const [hours, minutes] = timeString.split(":").map(Number);
  //const hours = parseInt(time.substr(0, 2));
  //const minutes = parseInt(time.substr(3, 2));
  let output = "";

  if (hours === 0 && minutes === 0) {
    output = "midnight";
  } else if (hours === 12 && minutes === 0) {
    output = "noon";
  } else {
    output += hourWords[hours % 12];
    // we need to use backtick because we can not use quote for string that contain a value and have a space at the begining.
    output += ` ${minuteWords[minutes]}`;
  }
if (hours < 12) {
    output += " am";
} else {
    output += " pm";
}

  return output;
}