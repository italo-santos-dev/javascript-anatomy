function converteDate(str) {
    if (str == null || str.trim().length === 0) {
        return null;
    }
    let dates = (str).split('/');
    return new Date(Date.UTC(dates[2], parseInt(dates[1]) - 1, dates[0], 3, 0, 0));
}

console.log(converteDate("24/08/3200"))



