// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  // The server already counted this with days_left() in app/dates.py.
  // Do not count the days again in the browser.
  const days = opportunity.days_left;

  // A small second line under the date. textContent keeps the text safe.
  const label = document.createElement("div");
  label.className = "deadline-label";

  if (days < 0) {
    // Negative means the deadline day is already behind us.
    label.textContent = "Overdue";
    label.classList.add("deadline-overdue");
  } else if (days === 0) {
    // Zero means the deadline is today.
    label.textContent = "Due today";
    label.classList.add("deadline-today");
  } else if (days <= 7) {
    // 1 through 7: still coming up soon, so make it yellow.
    // Farther than 7 days: leave only the date that app.js already wrote.
    if (days === 1) {
      label.textContent = "Due in 1 day";
    } else {
      label.textContent = "Due in " + days + " days";
    }
    label.classList.add("deadline-soon");
  } else {
    // More than a week away: no coloured label needed.
    return;
  }

  cell.appendChild(label);
}
