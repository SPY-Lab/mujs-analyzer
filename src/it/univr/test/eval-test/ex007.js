x = 0; a = 0; b = 0;
while (x < 100) {
	x = x + 1;
}

if (x == 5) {
	str = "a=";
} else {
	str = "b=";
}


if (x == 5) {
	str = str."1;";
} else {
	str = str."2;";
}


eval(str);