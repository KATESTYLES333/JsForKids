//Рисуем котиков
var drawCats = function (times) {
    for (var i = 0; i < times; i++) {
        console.log(i + " =^.^= " )
    }
};

//drawCats(5);

//console.log(typeof("12e45"^"56789"))

var secondsInAMinute = 60
var minutesInAnHour = 60
var secondsInAnHour = secondsInAMinute * minutesInAnHour
var hoursInADay = 24
var secondsInADay = hoursInADay * secondsInAnHour
var daysInYear = 365
var secondsInAYear = daysInYear * secondsInADay
//console.log(secondsInAnHour)
//console.log(secondsInADay)
//console.log(secondsInAYear)
//console.log(19*secondsInAYear)

var balloons= 100
//console.log("Balloons " + (balloons *= 2))
//console.log("Balloons " + (balloons /= 4))

var java = "Java"
var script = "Script"
//console.log((java + script).length)
//console.log("supersuper".length)

var codeWord1 = "обернись"
var codeWord2 = "неужели"
var codeWord3 = "огурцы"
var codeWord4 = "липкие"
var codeWord5 = "&!"
//console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1])

var word = "Это очень длинная строка"
//console.log(word.slice(10, 24))
//console.log(word.toUpperCase())

//"эЙ, кАК деЛа?" в "Эй, как дела?"
//console.log("Variant A: " + "эЙ, кАК деЛа?".toLowerCase().replace("э", "Э"))
var fullLowerWord = "эЙ, кАК деЛа?".toLowerCase()
//console.log("Variant B: " + fullLowerWord[0].toUpperCase() + fullLowerWord.slice(1,13))

//console.log("5" == 5) //true
//console.log("5" === 5) //false
//console.log("false" == false) 

var age = 11
var accompanied = true
//console.log("Can go to the cinema? - " + (age>=12 || accompanied === true))

//ошибка
//function sayHello() {
//    return setTimeout("alert('Hello')", 2 * 60 * 1000)
//}
//clearTimeout(sayHello());

//10 раз число 10
//for (var i = 0; i < 10; i++){
//    setTimeout(function() {
//console.log(i)
//    }, 0);
//}

//4
//function a(value) {
//    return true - value
//}

//var b = a('4') + a('-4') + a(-'4') + a(4)
//console.log(b)

//doesnt work
//var c;
//switch(c)
//{
//    case 0:
//        alert('0');
//       break;
//    case null:
//        alert('null');
//        break;
//    case undefined:
//        alert('undefined');
//        break;
//    default:
//        alert('something else');
//}

//-3
//var a = 2
//console.log(~a)

//254
//console.log('0xff   ' - '1');

//5
//var a = 5;
//var a;
