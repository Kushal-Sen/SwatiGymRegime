# Swati's Strength & Stretch

A single-page weekly gym plan (installable on a phone's home screen, works offline).

- **Mon / Wed / Fri** – Full-body strength (A: squat + push, B: hinge + pull, C: legs + balance)
- **Tue / Sat** – Stretch & Flow (long stretching, balance, core)
- **Thu / Sun** – Rest
- Every session: warm-up mobility → strength → core → cool-down stretching → **10 min cardio**
- Tabs for the plan notes and a weekly weigh-in chart. Everything is stored only in the browser (`localStorage`); nothing is sent anywhere.

Plain HTML/CSS/JS, no build step. Edit the `EX` (exercises), `DAYS` (session layout) and `SCHEDULE` (week) objects near the top of the script in `index.html` to change the plan.

Open `index.html` directly, or serve with `python3 -m http.server`.
