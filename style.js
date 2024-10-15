//    38 - 42


// 1: Write a custom function power ( a, b ), to calculate the value of
// a raised to b

function power(a, b) {
  return a**b;
}

function calculatePower() {
  var a = document.getElementById("base").value;
  var b = document.getElementById("exponent").value;
  var result = power(Number(a), Number(b));
  document.getElementById("result").innerHTML = "Result:" +result;
}

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not. 

function isLeapYear(year) {
return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkingYear() {
  var year = document.getElementById("year").value
  var result= isLeapYear(Number(year)) ? "is a leap year." : "is not a leap year.";
  document.getElementById("Result").innerHTML= year + " " + result;
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by

function calculateArea() {
  var sidea = parseFloat(document.getElementById("sideA").value);
  var sideb = parseFloat(document.getElementById("sideB").value);
  var sidec = parseFloat(document.getElementById("sideC").value);
  var S = (sidea + sideb + sidec) / 2;
  var area = Math.sqrt(S * (S - sidea) * (S - sideb) * (S - sidec));
  document.getElementById("result1").textContent = "Area of the triangle: " + area.toFixed(2);
}

// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction. 

function average() {
  var subject1 = parseFloat(document.getElementById("subject1").value);
  var subject2 = parseFloat(document.getElementById("subject2").value);
  var subject3 = parseFloat(document.getElementById("subject3").value);
  var totalMarks = subject1 + subject1 + subject1;
  var avg = totalMarks / 3;
  return avg;
}
  
function percentage() {
  var subject1 = parseFloat(document.getElementById("subject1").value);
  var subject2 = parseFloat(document.getElementById("subject2").value);
  var subject3 = parseFloat(document.getElementById("subject3").value);
  var totalMarks = subject1 + subject2 + subject3;
  var percent = (totalMarks / 300) * 100;     
  return percent;
}
  
function mainFunction() {
  var avg = average();
  var percent = percentage();
  document.getElementById("result2").textContent = 
  "Average Marks: " + avg.toFixed(2) + 
  "\nPercentage: " + percent.toFixed(2) + "%";
}

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) return i;
  }
      return -1;
}

function findIndexOf() {
  var str = document.getElementById("string").value;
  var char = document.getElementById("char").value;
  var index = customIndexOf(str, char);
  document.getElementById("result3").textContent = index !== -1 
  ? `Character found at index: ${index}` 
  : "Character not found";
}

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

function DeleteVowels() {
  var sentence = document.getElementById("sentence").value;
  var result = "";

  for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i].toLowerCase();
      if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
          result += sentence[i];
      }
  }
  
  document.getElementById("result4").innerText = "Sentence without vowels: " + result;
}

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

function countVowelPairs(text) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

for (var i = 0; i < text.length - 1; i++) {
  var currentChar = text[i].toLowerCase();
  var nextChar = text[i + 1].toLowerCase();

  switch (currentChar) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      switch (nextChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          count++;
          break;
      }
      break;
  }
}

return count;
}

function countVowelPairsInText() {
var textInput = document.getElementById('textInput').value;
var result = countVowelPairs(textInput);
document.getElementById('result5').textContent = `Number of successive vowel pairs: ${result}`;
}

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

function convertToMeters(km) {
  return km * 1000;
}

function convertToFeet(km) {
  return km * 3280.84;
}

function convertToInches(km) {
  return km * 39370.1;
}

function convertToCm(km) {
  return km * 100000;
}

function convertDistance() {
  const distanceKm = document.getElementById('distanceKm').value;

  if (distanceKm) {
    const meters = convertToMeters(distanceKm);
    const feet = convertToFeet(distanceKm);
    const inches = convertToInches(distanceKm);
    const cm = convertToCm(distanceKm);

    document.getElementById('resultMeters').textContent = `Distance in meters: ${meters} m`;
    document.getElementById('resultFeet').textContent = `Distance in feet: ${feet} ft`;
    document.getElementById('resultInches').textContent = `Distance in inches: ${inches} in`;
    document.getElementById('resultCm').textContent = `Distance in centimeters: ${cm} cm`;
  } else {
    alert('Please enter a valid distance in kilometers.');
  }
}

//   9. Write a program to calculate overtime pay of employees. 
//   Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
//   worked above 40 hours. Assume that employees do not work 
//   for fractional part of an hour.

function calculateOvertime() {
  const hoursWorked = parseInt(document.getElementById('hoursWorked').value);
  const overtimeRate = 12.00;
  const regularHours = 40;

  let overtimeHours = 0;
  let overtimePay = 0;

  // Check if hours worked are more than 40
  if (hoursWorked > regularHours) {
    overtimeHours = hoursWorked - regularHours;
    overtimePay = overtimeHours * overtimeRate;
  }

  document.getElementById('result6').textContent = `Overtime Pay: Rs. ${overtimePay}`;
}

// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

function calculateNotes() {
  let amount = parseInt(document.getElementById('amount').value);

  if (amount % 10 !== 0) {
    document.getElementById('result7').textContent = "Please enter an amount that is a multiple of 10.";
    return;
  }
  let hundredNotes = Math.floor(amount / 100);
  amount = amount % 100;

  let fiftyNotes = Math.floor(amount / 50);
  amount = amount % 50;

  let tenNotes = Math.floor(amount / 10);
  document.getElementById('result7').textContent = 
    `You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty note, and ${tenNotes} ten notes.`;
}