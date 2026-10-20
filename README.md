# Money Left — prototype

A phone-friendly, installable PWA prototype for tracking one shared spending balance.

## What it does
- Starts with a $4,120 monthly allowance (editable).
- Supports an opening balance and recurring bills with monthly due days.
- Reserves unpaid scheduled bills from the available-to-spend number.
- Records recurring bills as expenses when the app is opened on or after their due date.
- Logs purchases, extra income, refunds, and transfers to savings.
- Carries unused funds forward automatically.
- Tracks labels for information only; there are no category spending limits.
- Exports/imports a JSON backup.

## Important limitations
- This is a prototype, not a bank-connected app. It does not initiate real payments or verify that a bill was paid.
- It stores data in the browser's local storage on the device. Export backups regularly; clearing browser/site data can erase the data.
- Do not use it as your only financial record until you've tested it with sample data.
- Bills are reserved only for the current tracked month. Enter the real due day for each bill.
- The monthly allowance is credited once per month starting with the selected first month tracked. Set the opening balance carefully to avoid counting the same money twice.
- A recurring bill is recorded when the app is opened on or after its due date, not by a background process while the app is closed.

## Run locally on a computer
Open `index.html` in a modern browser to test the core prototype. For PWA install/offline behavior, serve the folder over HTTPS (or localhost during development).

## Install on iPhone 17 Pro
1. Publish the contents of this folder to an HTTPS static host (for example, GitHub Pages). Keep `index.html`, `manifest.json`, and `sw.js` together in the published folder.
2. Open the HTTPS address in Safari on the iPhone.
3. Tap Share → Add to Home Screen. If offered, enable Open as Web App, then tap Add.
4. Open the home-screen icon and set up the opening balance, first month tracked, and each bill's actual due day.
5. Export a backup after setup and periodically afterward.

A GitHub account and publishing step are required for the easiest free HTTPS deployment. The ZIP itself is not directly installable as an iPhone app.
