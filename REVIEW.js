// const arr = [2, 6, 1, 8, 7];


// console.log(arr);

// function doubleMe(x) {
//     return x ** 3;
// }

// const newArray = []
// for (let i=0; i < arr.length; i ++) {
//     arr[i] = doubleMe(arr[i]);
// }

// console.log(arr);

// const arr3 = arr.map(function(x) {
//     return x ** 0.5;
// });


// console.log(arr3);

// console.log(arr.map(doubleMe));


const arr1 = [2, 6, 1, 8, 7];

function checkMe(x) {
    return x > 5;
}


// const newArray = [];


// for (let i=0; i < arr1.length; i++){
//     const element = arr1[i];
//     const test = checkMe(element);
//     if (test === true) {
//         newArray.push(element);
//     }
// }


// console.log(newArray);


// const newArray2 = arr1.filter(checkMe);
// console.log(newArray2);



// const arr3 = [2, 6, 1, 8, 7];
// console.log(arr3);

// function addTwoNumbers(a, b) {
//     return a + b;
// }

// function multiplyUs(a, b) {
//     return a * b;
// }

// let sum = 0;

// for(let i=0; i < arr3.length; i++) {
//     sum += arr3[i];
// }

// console.log(sum);


// const sum = arr3.reduce(addTwoNumbers, 1);

// console.log("Sum", sum);

// console.log("Average", arr3.reduce(addTwoNumbers, 0) / arr3.length);



// arr3.forEach(function(element) {
//     console.log(element);
// });


// for (const x of arr3) {
//     console.log(x);
// }


// console.log(newArray);

// map
// filter
// reduce








// // Arrow functions
// const arr4 = [2, 6, 1, 8, 7];

// console.log(arr4.map(x => x ** 3));

// console.log(arr4.filter(x => x < 5));

// console.log(arr4.map( x => x %2 == 0 ? "even": "odd"));

// console.log(arr4.reduce( (a, b) => a + b, 0));


// console.log(arr4.reduce( (a, b) => {
//     return a + b;
// }, 0));



function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}



function loadMovies() {
    const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
    let movies = [];
    fetchJsonData(url, function(data) {
        movies = data;

        console.log('Loaded', movies);

        // console.log(movies.filter(x => x.running_times >= 7200));

        console.log(movies.filter(x => x.title.toLowerCase().indexOf("god") > -1).map(x => [x.rating, x.votes, x.title]));

    });
}

loadMovies();