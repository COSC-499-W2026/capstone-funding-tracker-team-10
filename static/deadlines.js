// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
//
// The label goes by days_left only, whatever the status (team rule).
function showDeadline(row, cell, opportunity) {
  const days = opportunity.days_left;

  let text;
  let colour;
  if (days < 0) {
    text = "Overdue";
    colour = "deadline-overdue";
  } else if (days === 0) {
    text = "Due today";
    colour = "deadline-soon";
  } else if (days === 1) {
    text = "Due in 1 day";
    colour = "deadline-soon";
  } else if (days <= 7) {
    text = "Due in " + days + " days";
    colour = "deadline-soon";
  } else {
    return; // More than a week away: just show the date.
  }

  cell.classList.add(colour);

  const label = document.createElement("div");
  label.className = "deadline-label";
  label.textContent = text;
  cell.appendChild(label);
}
