import { useState, useEffect } from "react";
import axios from "axios";
// Custom hook to get all the data from the api
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => {
    setState({ ...state, day });
  };

  useEffect(() => {
    const daysURL = "/api/days";
    const appointmentsURL = "/api/appointments";
    const interviewersURL = "/api/interviewers";
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  // Function for booking an appointment and keeps track of the spots available
  const bookInterview = async (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const filterDays = state.days.find((day) => day.appointments.includes(id));
    const days = state.days.map((day) => {
      if (
        day.name === filterDays.name &&
        state.appointments[id].interview === null
      ) {
        return { ...day, spots: day.spots - 1 };
      } else {
        return day;
      }
    });

    await axios.put(`/api/appointments/${id}`, { interview });
    setState((prev) => ({
      ...prev,
      appointments,
      days,
    }));
  };
  // Function for cancelling an appointment and keeps track of the spots available

  const cancelInterview = async (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const filterDays = state.days.find((day) => day.appointments.includes(id));
    const days = state.days.map((day) => {
      if (day.name === filterDays.name) {
        return { ...day, spots: day.spots + 1 };
      } else {
        return day;
      }
    });

    await axios.delete(`/api/appointments/${id}`);
    setState((prev) => ({
      ...prev,
      appointments,
      days,
    }));
  };
  return { state, setDay, bookInterview, cancelInterview };
}
