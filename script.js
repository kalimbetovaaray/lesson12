/*
Создайте функцию, принимающую двумерный массив и выводящую его в теге <table> на страницу, чтобы каждое число было в своей ячейке.
Создайте двумерный массив 3 на 3 и передайте его в функцию, убедившись, что она работает.
Создайте функцию, принимающую одномерный массив и возвращающую (именно возвращающую, а не выводящую) сумму всех элементов массива.
Создайте одномерный массив, затем вызовите функцию из 3-го пункта, а результат запишите в переменную.
Выведите эту переменную через alert().
*/

//1

var arr_1 = [5, 4, 9];
var arr_2 = [8, 9, 6];
var arr_3 = [7, 5, 9];
var arr = [arr_1, arr_2, arr_3];
function print(arr) {
	document.write("<table border = '1px'>");
	for(i = 0; i < arr.length; i++){
		document.write("<tr style='height:30px;'>");
		for(j = 0; j < arr[i].length; j++){
			document.write("<td style='width:30px;'>");
				document.write(arr[i][j]);
			document.write("</td>")
		}
		document.write("</tr>")
	}
	document.write("</table>");
}
	
var result = print([arr_1, arr_2, arr_3])

//2

function add(arr_1) { 
	var summa = 0;
	for(i = 0; i < arr.length; i++){
		summa += arr_1[i];
	}
	return summa;
}
var res = add([5, 4, 9]);
alert(res);

