var name = prompt('Ismingizni kiriting: ')
console.log('mening ismim ' +name )

var age = +prompt(' yoshingizni kiriting: ')
console.log(' mening yoshim ' +age +' da ')

var javob = 7
var a = +prompt('5+2 =  ' )
if(javob === a){
 console.log("javob to`gri: " + a) 
 alert("javob to`gri")
}else {
console.log("javob noto`gri: " + a +     "   to`gri javob:  " + javob )
alert("javob noto`gri" )
}
var j2 = 12
var b = +prompt('3+9 =  ' )
if(j2 === b){
 console.log("javob to`gri: " + b) 
 alert("javob to`gri")
}else {
console.log("javob noto`gri: " +b  +    "    to`gri javob:  " +j2 )
alert("javob noto`gri" )
}
var j3 = 5
var c = +prompt('10-5 =  ' )
if(j3 === c){
 console.log("javob to`gri: " + c) 
 alert("javob to`gri")
}else {
console.log("javob noto`gri: " + c  +    "    to`gri javob:  " +j3 )
alert("javob noto`gri" )

}
var j4 = 12
var d = +prompt('3*4 =  ' )
if(j4 === d){
 console.log("javob to`gri: " + d) 
 alert("javob to`gri")
}else {
console.log("javob noto`gri: " + d +    "     to`gri javob:  " +j4 )
alert("javob noto`gri" )

}
var j5 = 100
var e = +prompt('10*10 =  ' )
if(j5 === e){
 console.log("javob to`gri: " + e) 
 alert("javob to`gri")
}else {
console.log("javob noto`gri: " +e  +    "     to`gri javob:  " +j5 )
alert("javob noto`gri" )

}

var ageA = 18
var ageB = 50
var ageD = 59
var ageE = 150

var name = prompt("Qaytadan ismingizni kiriting")
console.log(" Sizning ismingiz " + name );

var age = +prompt("Yoshingizni kiriting")
if(age <= 18) {
 alert(" Yoshsiz, O`qishingiz kere")
}
else if(age <= 50  ) {
 alert(" ishlashIngiz kere ")
} else if(age <= 59 ) {
 alert("Yaqinda pensiyaga chiqasiz :)")
}
else if(age <= 150 ) {
    alert(" pensionerga o`xshaysan xali tirik bo`l`sangiz ")
}else{
    alert(" Nimadir no`to`gri ketib koldi ):  ")
}
alert("O`rta qiymatni aniqlash uchun son kiriting: ")
var sonA = +prompt("1- sonni kiriting  ")
var sonB = +prompt("2- sonni kiriting ")
var sonD = +prompt("3- sonni kiriting ")
if(sonA > sonB  && sonA > sonD || sonB > sonA && sonB >sonA) {
   alert("o`rta qiymat " +sonB)
}
else if (sonB > sonA  ) {
   alert("o`rta qiymat  " +sonB)
}else if(sonA < sonD || sonB < son) {
   alert("Nimadir xato ketb qoldi")
}



