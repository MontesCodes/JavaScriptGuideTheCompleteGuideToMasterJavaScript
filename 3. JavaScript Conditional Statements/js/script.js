'use strict';
var wantToPlay = prompt(
  'Would you like to get the biggest number of 3 numbers? y(Yes) or n(No)?',
).toLowerCase();

if (wantToPlay === 'n' || wantToPlay === 'no') {
  alert(
    'Okay then, if you change your mind and want to play please refresh the page.',
  );
} else if (wantToPlay === 'y' || wantToPlay === 'yes') {
  var num1 = prompt('Okay then, what is the first of three numbers?');
  var num2 = prompt('And now, what is the second of three numbers?');
  var num3 = prompt('Finally, what is the third of three numbers?');

  var results = num1;
  if (results < num2) {
    results = num2;
  }
  if (results < num3) {
    results = num3;
  }
  alert('Your biggest number pick is: ' + results);
}
