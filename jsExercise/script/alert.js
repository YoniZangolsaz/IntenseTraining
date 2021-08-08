"use strict"



// let lastName = prompt('what is the last name');

// alert(firstNmae + ' ' + lastName);


// let scoreJohn = (89 + 120 + 103) / 3;
// let scoreMike = (116 + 94 + 123) / 3;
// console.log(scoreJohn, scoreMike);

// if (scoreJohn > scoreMike) {
//     console.log('Jhon\'s team wins with ' + scoreJohn + ' points');
// }
// else if(scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreJohn + ' points');
// }
// else {
//     console.log('There is a draw  ');

// }

// let jhon = ['Moshe', 'Cohen', 23, 'Student'];
// console.log(jhon);



// function calculateTheTip(price) {
//     let percentage;
//     if(price < 50) {
//         percentage = 20;
//     } else if(price >= 50 && price < 200) {
//         percentage = 15;
//     } else {
//         percentage = 10; 
//     }
//     return (percentage * price) / 100;
        
// }

// let bills = [124, 48, 268,180,42];

// for (i = 0; i > bills.length; i++) {
//     let percentage;
//     if(price < 50) {
//         percentage = 20;
//     } else if(price >= 50 && price < 200) {
//         percentage = 15;
//     } else {
//         percentage = 10; 
//     }
//     return (percentage * price) / 100;
// }






// let tips = [calculateTheTip(bills[0]), 
//             calculateTheTip(bills[1]),
//             calculateTheTip(bills[2])];

// let finalValue = [bills[0] + tips[0],
//                   bills[1] + tips[1],
//                   bills[2] + tips[2]];

// console.log(tips);
// console.log(finalValue);

//   let jhon = {
//       fullName: 'Jhon Smith',
//       mass: 92,
//       height: 1.95,
//       calcBMI: function() {
//             this.bmi = this.mass / (this.height * this.height);
//             return this.bmi;
//         }
//   }


//   let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//           this.bmi = this.mass / (this.height * this.height);
//           return this.bmi;
//       }
//   }
//   jhon.calcBMI();
//   mark.calcBMI();
//   console.log(jhon, mark);

let jhon =  {
    fullName: 'Jhon Smith',
    bills: [124, 48, 268,180,42],
    calcTip: function() {
        this.tips = [];
        this.finalValue = [];
        for (let i = 0; i < this.bills.length; i++) {   
                let percentage;
                let bill = this.bills[i];
                if(bill < 50) {
                percentage = 20;
                } else if(bill >= 50 && bill < 200) {
                percentage = 15;
                } else {
                percentage = 10; 
                }
                this.tips[i] = (percentage * bill) / 100;
                this.finalValue[i] = bill + (bill * percentage) / 100; 
        }
    }

}

let Mark =  {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45,],
    calcTip: function() {
        this.tips = [];
        this.finalValue = [];
        for (let i = 0; i < this.bills.length; i++) {   
                let percentage;
                let bill = this.bills[i];
                if(bill < 100) {
                percentage = 20;
                } else if(bill >= 100 && bill < 300) {
                percentage = 10;
                } else {
                percentage = 25; 
                }
                this.tips[i] = (percentage * bill) / 100;
                this.finalValue[i] = bill + (bill * percentage) / 100; 
        }
    }

}


jhon.calcTip();
Mark.calcTip();
console.log(jhon);
