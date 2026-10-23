# Assignment 2 — Campus Attendance Portal

This repository continues the Campus Attendance Portal application developed for Assignment 1. It demonstrates a Jira product backlog, Git/GitHub branch and merge practices, and a GitHub Actions pipeline that tests, builds, packages, and deploys the application.

## Run locally

Requires Node.js 22 or later.

```bash
npm test
npm run build
```

Serve the `dist/` folder with any static web server, for example `python -m http.server 8000 --directory dist`, then open `http://localhost:8000`. The app stores records in local browser storage for this demo.

## Features

- Add students with unique roll numbers.
- Mark each student Present or Absent for a selected date.
- View present, absent, unmarked, and attendance-rate totals.
- Search the class list and export the selected day's register to CSV.
- Save records in the current browser on this device.
- Load 30 clearly labeled fictional demo students and example attendance on a fresh/empty browser profile.

## Assignment evidence

- [Agile backlog and acceptance criteria](docs/AGILE_BACKLOG.md)
- [Git branching and collaboration workflow](docs/GIT_WORKFLOW.md)
- [CI/CD pipeline and Pages setup](docs/CI_CD.md)
- [Repository-specific Pages deployment setup](docs/DEPLOYMENT.md)
- Jira board: create the user stories from the backlog in To Do / In Progress / Done.
- GitHub source management: use short-lived feature branches and merge reviewed changes into `main`; see [Git workflow](docs/GIT_WORKFLOW.md).
- GitHub Actions: see the **Campus Attendance Assignment 2 CI/CD** workflow.
- Assignment checklist and evidence: see [REPORT.md](REPORT.md).

## Data limits

This is a learning prototype, not a production student-record system. The demo roster is fictional; the app has no login, server-side database, access control, or multi-device sync. Changes stay in the current browser profile and are not shared with other users/devices.
