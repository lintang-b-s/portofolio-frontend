function dateFormatter(unformattedDate) {
  let formattedDate = unformattedDate;

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(formattedDate.toString()));
}

export default dateFormatter;
