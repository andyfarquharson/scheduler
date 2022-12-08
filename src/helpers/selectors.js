// Gets the appointments for the selescted day
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
// Gets the interviewers for the selected day
export function getInterviewersForDay(state, day) {
  const results = [];
  const filteredDays = state.days.filter((d) => d.name === day);
  if (!filteredDays[0]) {
    return results;
  }
  for (const interview of filteredDays[0].interviewers) {
    results.push(state.interviewers[interview]);
  }
  return results;
}
// Gets the particular interview
export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    return {
      ...interview,
      interviewer,
    };
  }
  return null;
}
