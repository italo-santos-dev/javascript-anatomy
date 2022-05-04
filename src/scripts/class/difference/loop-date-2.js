function getDatesFromDateRange(from, to) {
    const dates = [];
    for (let date = from; date <= to; date.setDate(date.getDate() + 1)) {
      const cloned = new Date(date.valueOf());
      dates.push(cloned);
    }
    return dates;
  }
  
  const start = new Date(2022, 05 - 1, 05);
  const end = new Date(2022, 05 - 1, 10);
  
  const datesArray = getDatesFromDateRange(start, end);
  console.dir(datesArray[5]);