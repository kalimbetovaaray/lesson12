function print(text) {
	//document.write(text);
	document.write("<b>" + text + "</b><br />");
}

function add(x, y, r) {
	if (r) return x + y;
	else print(x + y);
}