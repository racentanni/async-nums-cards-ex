let baseUrl = 'http://numbersapi.com';
let favoriteNumber = 7;

//1.
async function part1() {
    let data = await $.getJSON(`${baseUrl}/${favoriteNumber}?json`);
    console.log(data);
}
part1();

//2.
const favoriteNumbers = [7, 34, 12];
async function part2() {
    let data = await $.getJSON(`${baseUrl}/${favoriteNumbers}?json`);
    console.log(data);
}
part2();

//3.
async function part3() {
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${baseUrl}/${favoriteNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();

