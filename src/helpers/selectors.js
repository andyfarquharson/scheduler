export function getAppointmentsForDay(state, day) {
  const results = [];
  const filteredDays = state.days.filter((d) => d.name === day);
  if (!filteredDays[0]) {
    return results;
  }
  for (const appointment of filteredDays[0].appointments) {
    results.push(state.appointments[appointment]);
  }
  return results;
}
