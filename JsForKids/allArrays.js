var dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"]
dinosaurs[0] = "Тираннозавр Рекс"
//console.log(dinosaurs)

var dinosaurs1 = []
dinosaurs1[0] = "Qwe"
dinosaurs1[11] = "we"
//console.log(dinosaurs1)

var dinosaursAndNumbers = [3, "dinos", ["трицератопс", "стегозавр", 3627.6], 10]
//console.log(dinosaursAndNumbers[2][1])

var maniacs = ["Якко", "Вакко", "Дот"]
//вернет название последнего элемента массива
//console.log(maniacs[maniacs.length - 1])

var animals = []
animals.push("Cat")
animals.push("Dog")
animals.push("Tiger")
animals.push("Lama")
animals.unshift("Rat")

var lastAnimal = animals.pop()
var firstAnimal = animals.shift()
//console.log(firstAnimal)

var furryAnimals = ["Альпака", "Лемур", "Йети", "Кот"]
var scalyAnimals = ["Удав", "Годзилла"]
var featheredAnimals = ["Ара", "Додо"]
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals)
//console.log(allAnimals)

var colors = ["красный", "зеленый", "синий", "красный"]
//console.log(colors.indexOf("красный"))

var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"]
//console.log(boringAnimals.join("."))

var landmarks = []
landmarks.push("Мой дом")
landmarks.push("Дорожка к дому")
landmarks.push("Мигаюзий фонарь")
landmarks.push("Протекающий гидрант")
landmarks.push("Пожарная станция")
landmarks.push("Приют для кошек")
landmarks.push("Моя бывшая школа")
landmarks.push("Дом подруги")
landmarks.pop()
landmarks.pop()
landmarks.pop()

Math.floor(Math.random() * 10)

var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"]
var randomIndex = Math.floor(Math.random() * 4)
//console.log(randomWords[randomIndex])
//console.log(randomWords[Math.floor(Math.random() * 4)])

var phrases = [
    "Звучит неплохо", "Да епта", "Есесна нет", "не брат, точно не сегодня", "НЕТ!"
]
//console.log(phrases[Math.floor(Math.random() * 5)])

var randomBodyParts = ["глаз", "нос", "череп"]
var randomAdjectivies = ["вонючая", "унылая", "дурацкая"]
var randomWords1 = ["муха", "крыса", "мартышка", "жопа"]
//console.log("У тебя " + randomBodyParts[Math.floor(Math.random() * 3)] + " словно " + randomAdjectivies[Math.floor(Math.random() * 3)] +
// " " + randomWords1[Math.floor(Math.random() * 4)])
//console.log("У тебя", randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)], "словно", 
//randomAdjectivies[Math.floor(Math.random() * randomAdjectivies.length)], randomWords1[Math.floor(Math.random() * randomWords1.length)], "!!")
//console.log(randomWords1[Math.floor(Math.random() * randomWords1.length)])

var myBody = ["Лицо", "Рука", "Голова", "Жопа"]
var myAdjectivies = ["Тупее", "Красивее", "Короче", "Стремнее"]
var myAnimalBody = ["Хвост", "Лапа", "Клюв"]
var myAnimals = ["Медведя", "Собаки", "Крысы", "Жука", "Лошади"]
var myIndex = ["У тебя", myBody[Math.floor(Math.random() * myBody.length)], "еще", 
    myAdjectivies[Math.floor(Math.random() * myAdjectivies.length)] + ", чем", 
    myAnimalBody[Math.floor(Math.random() * myAnimalBody.length)], "y", 
    myAnimals[Math.floor(Math.random() * myAnimals.length)]].join(" ")
//console.log(myIndex)

//console.log("У тебя " + myBody[Math.floor(Math.random() * myBody.length)] + " еще " + 
//myAdjectivies[Math.floor(Math.random() * myAdjectivies.length)] + ", чем " + 
//myAnimalBody[Math.floor(Math.random() * myAnimalBody.length)] + " y " +
//myAnimals[Math.floor(Math.random() * myAnimals.length)])

var arrayOfNumbers = [3, 2, 1]
//console.log([arrayOfNumbers[0], "больше, чем", arrayOfNumbers[1], "больше, чем", arrayOfNumbers[2]].join(" "))
