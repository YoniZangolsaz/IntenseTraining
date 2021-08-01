//mission 1-a
const getPromise = (num) => {
    return new Promise((resolve, reject) => {
        resolve("message info: " + num);
    });
};
// getPromise(5).then((resolve) => console.log(resolve));

//mission 1-b
const getString = (value) => {
    return new Promise ((resolve, reject) => {
    value === 'good' ? resolve('ok') : reject('the message is incorrect') })
}

// getString('good').then (resolve => console.log(resolve)).catch( err => console.log(err));

//mission 1-c
const getNumbers = (num1, num2) => {
    return new Promise ((resolve, reject) => {
        if(!(typeof num1 === "number") || !(typeof num2 === "number")) {
            reject('Wrong input');
        }
        else if(num1 > num2) {
            resolve('First number is bigger');
        }
        else if(num2 > num1) {
            resolve('Second number is bigger');
        }
    });
};
// getNumbers(4,5).then(resolve => console.log(resolve))
// .catch(reject => console.log(reject));

//mission 2
// getString('good').then(resolve => 
    // console.log(resolve));
        // getPromise(5).then
            // (res => console.log(res));
                // getNumbers(1,3).then(e => console.log(e));

//mission 3
// getNumbers(4,'fdg').then().catch
//     (reject => console.log(reject));
//         getString('nogood').catch
//             (rej => console.log(rej));

//mission 4
getPromise(5).then(resolve => 
    console.log(resolve));
        getString('good').then(resolve => 
            console.log(resolve));
                getNumbers(2,4).then(resolve =>
                    console.log(resolve)).catch(er =>
                        console.log(er));


