function farenheitToCelcius(farenheit: number): number => {
	return (farenheit - 32) / 1.8
}

function add3(first: number, second: number, thrid:number): number => {
	return first + second + third;
}

function shout(str1: string): null => {
	let str2: string = str1.toUpperCase();
	console.log(str2);
	return;
}

function isQuestion (str: string): boolean => {
	let length: number = str.length;
	if (str[length] = "?") {
		return true;
	} else {
		return false;
	}
}

function convertYesNo (str: string): boolean => {
	if (str = "yes" || str = "YES" || str = "Yes") {
		return true;
	} else if (str = "no" || str = "NO" || str = "No") { 
		return false;
	} else {
		return null;
	}
}
