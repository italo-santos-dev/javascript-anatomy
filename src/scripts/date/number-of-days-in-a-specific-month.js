function daysOfTheMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(daysOfTheMonth(12, 2023));