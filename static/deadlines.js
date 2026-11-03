// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const daysLeft = opportunity.days_left;
  const label = document.createElement("div");
  label.className = "deadline-label";

  // Use the server's day count for every status.
  if (daysLeft < 0) {
    label.textContent = "Overdue";
    cell.classList.add("deadline-overdue");
  } else if (daysLeft === 0) {
    label.textContent = "Due today";
    cell.classList.add("deadline-soon");
  } else if (daysLeft <= 7) {
    label.textContent = `Due in ${daysLeft} ${daysLeft === 1 ? "day" : "days"}`;
    cell.classList.add("deadline-soon");
  } else {
    return;
  }

  cell.appendChild(label);
}
