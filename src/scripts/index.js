let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
  let presentDate = new Date();
  let releaseDate = new Date(2023, 0, 1, 20, 0, 0, 0);

  function countTimeUntilReleaseInMilliseconds() {
    let differenceBetweenDates = releaseDate - presentDate;

    return differenceBetweenDates;
  }

  function daysUntilRelease() {
    let releaseInMilliseconds = countTimeUntilReleaseInMilliseconds();
    let numberOfDays = Math.floor(releaseInMilliseconds / (24 * 3600000));

    if (numberOfDays <= 9) {
      return '0' + numberOfDays;
    }

    return numberOfDays;
  }

  function hoursUntilRelease() {
    let releaseInMilliseconds = countTimeUntilReleaseInMilliseconds();
    let numberOfHours = Math.floor((releaseInMilliseconds % (24 * 3600000)) / 3600000);

    if (numberOfHours <= 9) {
      return '0' + numberOfHours;
    }

    return numberOfHours;
  }

  function minutesUntilRelease() {
    let releaseInMilliseconds = countTimeUntilReleaseInMilliseconds();
    let numberOfMinutes = Math.floor(((releaseInMilliseconds % (24 * 3600000)) % 3600000) / 60000);

    if (numberOfMinutes <= 9) {
      return '0' + numberOfMinutes;
    }

    return numberOfMinutes;
  }

  function secondsUntilRelease() {
    let releaseInMilliseconds = countTimeUntilReleaseInMilliseconds();
    let numberOfSeconds = Math.floor((((releaseInMilliseconds % (24 * 3600000)) % 3600000) % 60000) / 1000);

    if (numberOfSeconds <= 9) {
      return '0' + numberOfSeconds;
    }

    return numberOfSeconds;
  }

  days.innerText = daysUntilRelease();
  hours.innerText = hoursUntilRelease();
  minutes.innerText = minutesUntilRelease();
  seconds.innerHTML = secondsUntilRelease();
}, 1000)
