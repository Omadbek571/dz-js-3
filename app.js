// IF GA OYID MASALALAR

// 1-savol

// let num = +prompt("Iltimos yoshingizdi kiriting");
// if (num > 17) {
//     console.log("Siz katta yoshdagisiz");
// }else{
//     console.log("Siz hali yoshsiz");
// }

// 2-savol

// let num = +prompt("Iltimos son kiriting");

// if (num % 2 == 0) {
//     console.log("Siz juft son kiritingiz");
// }else{
//     console.log("Siz toq son kiritingiz");
// }

// 3-savol

// let num = +prompt("Iltimos son kiriting");

// if (num > 0) {
//     console.log("Siz manfiy son kiritingiz");
// }else{
//     console.log("Siz musbat son kiritingiz");
// }


// 4-savol


// let num = +prompt("Iltimos son kiriting");

// if (num > 19) {
//     console.log("Yengil kiying");
// }else{
//     console.log( "Qalin kiying");
// }


// 5-savol

// let num = +prompt("Iltimos 1-100 oraligida baxolang");

// if (num > 100) {
//     console.log(" 1-100 gacha bolgan son oraligida baholashiz mumkun");
// }else if (num > 89) {
//     console.log("Alo");
// }else if (num > 70 && 89) {
//     console.log("Yaxshi");
// } else if (num > 49 && 69){
//     console.log("Qoniqarli");
// }else{
//     console.log("Yomon");
// }


// 6-savol

// let ism = prompt("Iltimos ismingizdi kiriting")

// if (ism === "Ali") {
//     console.log("Salom, Ali!");
// }else{
//     console.log("Salom, mehmon!") 
// }


// 7-savol

// let num = +prompt("Iltimos harid qilgan tavaringizdi narxini yozing");

// if (num > 99) {
//     console.log("Chegirma qo'llanildi");
// }else{
//     console.log("Chegirma mavjud emas");
// }

// Ternary ga oid masalalar

// 1-savol


// let num = +prompt("iltimos xarorati kiriting");

// num > 24 ? console.log("Issiq") : console.log("Sovuq");


// 2-savol

// let num = +prompt("Iltimos imtihon natijasini kiriting");

// num > 49 ? console.log("O'tdi") : console.log("Yiqildi");


// 3-savol

// let num = +prompt("Iltimos son kiriting");

// num > 0 ? console.log("Musbat") : console.log("Manfiy");


// For ga oid masalalar

// 1-savol

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// 2-savol

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// 3-savol

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// 4-savol


// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }


// 5-savol

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i
//     console.log(sum);
// }


// 6-savol


// let sum = 1;

// for (let i = 1; i <= 10; i++) {
//     sum *= i
// }
// console.log(sum);


// 7-savol

// let num = +prompt("Iltimos son kiriting faktoriyal yoki faktoriyal masligi tekshirib  beriladi");
// let faktor = 1;

// for (let i = 0; i <= num; i++) {
//     faktor *= i
// }


// console.log(`${num} sonining faktoriali: ${faktor}`);


// 8-savol

// for (let i = 1; i <= 50; i++) {
//     console.log(`${i} ning kvadrati: ${i * i}`);    
// }

// 9-savol

// for (let i = 1; i <= 20; i++) {
//     console.log(`${i} ning kubi: ${i * i * i}`);    
// }


// 10-savol

// let sum = 0;

// for (let i = 1; i <= 1000; i++) {
//     sum += i
// }

// console.log(sum);


// 11-savol

// for (let i = 0; i < 5; i++) {
//     console.log("salom");
// }


// 12-savol

// for (let i = 1; i <= 100; i++) {
//     console.log(2 * i);    
// }


// 13-savol



// for (let i = 1; i <= 10; i++) {
//     console.log(`2 ning ${i}-darajasi: ${2 ** i}`);
// }


// 14-savol

// let num = +prompt("Iltimos son kiriting");

// let sum = 0;

// for (let i = 1; i <= num; i++) {
//    sum += num

// }

// console.log(`${num} kvadrati ` + sum);


// 15-savol

// let alif = "abcdefghijklmnopqrstuvwxyz";

// for (let i = 0; i < alif.length; i++) {
//     console.log(alif[i]);
// }


// Boolean ga oid masalalar

// 1-savol

// let a = +prompt("Iltimos A soni kiriting");
// let b = +prompt("Iltimos B soni kiriting");

// if (a % 2 == 0 && b % 2 == 0) {
//     console.log("Ikkalasiham juft sonlar");
// }else{
//     console.log("Toq sonlar mavjud");
// }


// 2-savol

// let a = +prompt("Iltimos a soni kiriting");
// let b = +prompt("Iltimos b soni kiriting");
// let c = +prompt("Iltimos c soni kiriting");

// if (a > 0 && b > 0 && c > 0) {
//     console.log("Kiritgan sonlariz orasida hammasi musbat");
// }else{
//     console.log("Kiritgan sonlariz orasida hech bolmaganda bittasi manfiy");
// }


// 3-savol

// let a = +prompt("Iltimos a soni kiriting");
// let b = +prompt("Iltimos b soni kiriting");
// let c = +prompt("Iltimos c soni kiriting");

// if (a > 0 || b > 0 || c > 0) {
//     console.log("Kiritgan sonlariz orasida hech bolmaganda bittasi musbat");
// }else{
//     console.log("Kiritgan sonlariz orasida hech bolmaganda bittasi manfiy");
// }


// 4-savol

// let A = +prompt("Iltimos a soni kiriting");
// let B = +prompt("Iltimos b soni kiriting");
// let C = +prompt("Iltimos c soni kiriting");

// let count = (A > 0) + (B > 0) + (C > 0);

// let result = count === 1;

// console.log(result); 


// 5-savol


// let A = +prompt("Iltimos a soni kiriting");
// let B = +prompt("Iltimos b soni kiriting");
// let C = +prompt("Iltimos c soni kiriting");

// let count = (A > 0) + (B > 0) + (C > 0);

// let result = count === 1;

// console.log(result); 


// 6-savol

// let num = +prompt("Iltimos son kiriting"); 

// let res = num >= 10 && num <= 99 && num % 2 === 0;

// console.log(res);




