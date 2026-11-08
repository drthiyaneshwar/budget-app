# Budget Planner

A personal budget planner. Each month it shows how much to transfer into each bank account, and it tracks monthly and yearly expenses and savings.

It is one web page (`index.html`) with no framework and no build step. It runs on GitHub Pages and has no server. Your browser talks directly to the GitHub API.

## How it fits together

| Repository | Visibility | Holds |
| --- | --- | --- |
| `budget-app` | Public | The app files only. No data and no token. |
| `budget-data` | Private | `budget-data.json`, encrypted. Every save is a commit, so the history is your backup. |

## Security

- Your passcode (6 characters or more) creates an AES-256-GCM key using PBKDF2-SHA256 with 250,000 iterations and a random 16-byte salt.
- Every encryption uses a fresh random 12-byte IV.
- The passcode is never stored. The GitHub token is stored in this browser only, encrypted with the same key.
- The key and the unlocked token stay in memory and are cleared when you lock the app.
- The token needs only **Contents: read and write** on the private repository.

- Settings has an option to open without the passcode on one device. It keeps the unlock key in that browser only, as a key the browser can use but cannot export. Anyone who can use that device can then open the budget, so only use it on a device with its own screen lock.

There is no way to recover a forgotten passcode. Keep it somewhere safe.

## Starting data

The app contains no budget data, because this repository is public. The first time you set up, if the private repository has no data file yet, the app asks you to choose a starting data file from your computer or start empty. The file is encrypted before it leaves your browser. You can delete your copy afterwards.

The file is plain JSON:

```json
{
  "settings": { "income": 0, "buffer": 0 },
  "accounts": [{ "id": "acc_1", "name": "", "role": "", "type": "Spending" }],
  "sections": [{ "id": "sec_1", "name": "", "kind": "expense" }],
  "entries": [{ "id": "ent_1", "section": "sec_1", "item": "", "amount": 0, "frequency": "Monthly", "account": "acc_1", "notes": "" }]
}
```

The data can also have `"incomeSources": [{ "id": "inc_1", "name": "", "amount": 0 }]`. When it has any, monthly income is their total.

Yearly and quarterly entries can have `"dueMonth"` (1 to 12; for quarterly, the first payment in the year). Accounts can have `"balance"` and `"balanceDate"`, used only by the How much each account should hold card on Home. That card shows, for the start of each month, the share of every dated bill saved since it was last paid.

An entry can also have `"setAside": true` for money kept ready for a cost that may not happen. It is still counted in the transfer, and Home shows it separately.

Account type is `Income`, `Spending`, `Sinking` or `Savings`. Heading kind is `expense` or `savings`. Frequency is `Monthly`, `Quarterly`, `Yearly` or `One time`. A one-time entry has `"dueDate": "YYYY-MM"` and is not counted in the monthly totals; it appears in Coming up in that month.

## Appearance

Settings has a Theme choice: Same as device, Normal (light) or Dark. It is saved in this browser only.

## Offline

The app works without a connection once it has been opened online. An encrypted copy of your budget stays on the device, and changes made offline sync when the connection returns. The footer shows when changes are not yet synced.

If two devices change the budget at the same time, the app combines the changes. For each account, heading, entry and setting, a change on one device is kept unless the other device changed the same item, in which case the device that saves last wins for that item. Every version stays in the private repository's commit history.

## How the numbers work

- Monthly equivalent: Monthly = amount, Quarterly = amount ÷ 3, Yearly = amount ÷ 12, One time = 0 (it is planned in its own month instead).
- Yearly = monthly equivalent × 12.
- Transfer per account = sum of the monthly equivalents of its entries.
- Left in salary = income − total to transfer. The buffer check passes when left ≥ buffer.
- On Home, "Of which yearly" covers expense entries with Yearly frequency only, and "Yearly routed" is that same money per year.

## Export

Settings has an Export section. It can copy or download the whole budget as text for AI chatbots (Markdown tables), as a CSV file for Excel, or as JSON. Exports are not encrypted, so keep them private.

## Backups

Settings has a button to download an encrypted backup. It has the same format as `budget-data.json`. To restore it, replace `budget-data.json` in the private repository with the backup file, then unlock the app with the passcode that was in use when the backup was made.

## Releases

The version is the `APP_VERSION` constant in `index.html`. Changes are listed in `CHANGELOG.md`. Each release has a tag such as `v1.1.0`.

Pushing to `main` runs `.github/workflows/publish.yml`, which checks the files and deploys to GitHub Pages. In the repository's Pages settings, the source must be **GitHub Actions**.
