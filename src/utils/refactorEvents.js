module.exports.refactorEvents = (data, date) => {
  const events = [];
  const currentDate = new Date(date);
  for (let i = 0; i < data.length; i++) {
    while (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    const event = {
      title: "Day " + data[i].day,
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        9,
        0,
        0
      ),
      extendedProps: {
        duration: data[i].duration,
        modules: data[i].modules,
      },
    };
    currentDate.setDate(currentDate.getDate() + 1);
    events.push(event);
  }
  return events;
};
