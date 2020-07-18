export function dateConverter() {
  const fromDate = document.getElementById('fromDate').value;
  const fromSplit = fromDate.split('-');

  const monthNumber = (Number(fromSplit[0]));
  const dayNumber = (Number(fromSplit[1]));

  const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const toDate = document.getElementById('toDate').value;
  const toSplit = toDate.split('-');
  const toMonthNumber = (Number(toSplit[0]));
  const toDayNumber = (Number(toSplit[1]));

  if (months[monthNumber-1] === undefined || months[toMonthNumber-1] ===undefined) {
    alert('Enter a date')
    return `<Strong>Enter a Date Above!</strong>`
  }

  else {
    return `From ${months[monthNumber-1]} ${dayNumber} to ${months[toMonthNumber-1]} ${toDayNumber}`
  }

}
