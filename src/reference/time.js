let minute = (n) => n * 60 * 1000;
let hour = (n) => n * minute(60);
let day = (n) => n * hour(24);
let month = (n) => n * day(30);
let year = (n) => n * month(12);

let time = {
  minute,
  hour,
  day,
  month,
  year
}

export default time