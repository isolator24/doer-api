let ts = Date.now();

let date_ob = new Date();
let date = this.IntTwoChars(date_ob.getDate());
let month = this.IntTwoChars(date_ob.getMonth() + 1);
let year = date_ob.getFullYear();
let hours = this.IntTwoChars(date_ob.getHours());
let minutes = this.IntTwoChars(date_ob.getMinutes());
let seconds = this.IntTwoChars(date_ob.getSeconds());
let dateDisplay = `${hours}:${minutes}:${seconds} ${month}/${date}/${year}`;

// IntTwoChars(i) {
//     return (`0${i}`).slice(-2);
//     }


//exports = ts