function getNextGaneshChaturthi() {
  const now = new Date();
  const year = now.getFullYear();

  const chaturthiDates = {
    2024: "2024-09-07",
    2025: "2025-08-27",
    2026: "2026-09-15"
  };

  const thisYearDate = new Date(chaturthiDates[year]);
  const nextYearDate = new Date(chaturthiDates[year + 1]);

  return now < thisYearDate ? thisYearDate : nextYearDate;
}

function updateCountdown() {
  const targetDate = getNextGaneshChaturthi();
  const now = new Date();
  const timeDiff = targetDate - now;

  const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = `${daysLeft} days`;
}

updateCountdown();
