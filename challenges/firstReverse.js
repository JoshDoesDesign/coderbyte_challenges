
/* REVERSING A STRING IN JAVASCRIPT */

// In-built Functions

var name = 'Joshua'

var reversedName = name.split('').reverse().join('')

console.log(reversedName)

// Reversing the Loop

var reverseStringFunc = function reverse(s) {
	var o = '';
	for (var i = s.length - 1; i >= 0; i--)
		o += s[i];

	return o;
}

console.log(reverseStringFunc('Robert'));