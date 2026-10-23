# GitHub Pages deployment setup

The workflow publishes the built `dist/` folder to GitHub Pages when a commit reaches `main`.

## One-time setup for this repository

1. Open this repository on GitHub and choose **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` or use **Actions → Campus Attendance Assignment 2 CI/CD → Run workflow** with the `main` branch selected.
4. Open the successful run and follow the deployment URL shown by the **Deploy to GitHub Pages** job.

If the deploy job says the `main` branch is not allowed, open **Settings → Environments → github-pages** and allow `main` under deployment branch rules. Then rerun the failed workflow.

## Pipeline evidence

The run should show the **Test and package** job passing before **Deploy to GitHub Pages** succeeds. The verification job runs `npm test` and `npm run build`; pull requests run verification without publishing the site.
