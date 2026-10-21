# Money Left — prototype

A phone-friendly, installable PWA prototype for tracking one shared spending balance.

## What it does
- Starts with a $4,120 monthly allowance (editable).
- Supports an opening balance and recurring bills with monthly due days.
- Shows two balances: **Running balance** after recorded activity, and **Available to spend** after reserving unpaid bills for the current month.
- Reserves unpaid scheduled bills from Available to spend immediately, even before their due dates.
- Records recurring bills as expenses when the app is opened on or after their actual due dates.
- Logs purchases, extra income, refunds, and transfers to savings.
- Carries unused funds forward automatically.
- Tracks labels for information only; there are no category spending limits.
- Exports/imports a JSON backup.

## How the two balances work
- **Running balance:** opening balance + monthly allowances and other income − recorded bills, purchases, and transfers.
- **Available to spend:** running balance − unpaid bills reserved for the current month.
- When a bill's due date arrives and the app is opened, it is recorded as an expense and stops being counted as an unpaid reservation. It is not double-counted.
- This is a budget tracker, not a live bank balance. It does not move money or verify bank transactions.

## Important limitations
- It is not bank-connected and does not initiate real payments or verify that a bill was paid.
- It stores data in the browser's local storage on the device. Export backups regularly; clearing browser/site data can erase the data.
- Do not use it as your only financial record until you've tested it with sample data.
- Bills are reserved only for the current tracked month. Enter the real due day for each bill.
- The monthly allowance is credited once per month starting with the selected first month tracked. Set the opening balance carefully so you do not count the same money twice.
- A recurring bill is recorded when the app is opened on or after its due date, not by a background process while the app is closed.

## Run locally on a computer
Open `index.html` in a modern browser to test the core prototype. For PWA install/offline behavior, serve the folder over HTTPS (or localhost during development).

## Install on iPhone 17 Pro
1. Publish the contents of this folder to an HTTPS static host (for example, GitHub Pages). Keep `index.html`, `manifest.json`, `sw.js`, and your icon image together in the published folder.
2. For a custom Home Screen icon, add your own square PNG image named **`icon2.png`** to the same published folder as `index.html`. A 512×512 PNG is recommended. The app references this image for the iPhone Home Screen icon. If you do not add it, the icon may fall back to a letter/default.
3. Open the HTTPS address in Safari on the iPhone.
4. Tap Share → Add to Home Screen. If offered, enable Open as Web App, then tap Add.
5. If you add or change the icon after installing the app, remove the old Home Screen tile and add it again so iOS can pick up the icon.
6. Set up the opening balance, first month tracked, and recurring bills with each bill's actual due day.
7. Export a backup after setup and periodically afterward.

A GitHub account and publishing step are required for the easiest free HTTPS deployment. The ZIP itself is not directly installable as an iPhone app.
