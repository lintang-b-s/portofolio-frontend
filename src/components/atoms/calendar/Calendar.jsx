import React from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"

const Calendar = (props) => {
  return (
    <div className="dkCalendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={props.initialView}
        events={props.events}
        themeSystem="bootstrap5"
        headerToolbar={props.headerToolbar}
        eventClick={props.eventClick}
        selectable={props.selectable}
        dateClick={props.dateClick}
      />
    </div>
  );
};

Calendar.defaultProps = {
  initialView: "dayGridMonth",
  events: [],
  headerToolbar: {},
  selectable: false,
};

Calendar.propTypes = {
  initialView: PropTypes.string,
  events: PropTypes.array,
  headerToolbar: PropTypes.object,
  eventClick: PropTypes.func,
  dateClick: PropTypes.func,
  selectable: PropTypes.bool,
};

export default Calendar;
