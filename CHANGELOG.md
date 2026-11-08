# Changelog

## 1.8.0 - 2026-11-08

- Home has two summary boxes side by side: Expenses on the left in red, and Savings and investments on the right in green. Each shows its monthly and yearly total. Select a box to see its headings and every entry under them.
- Summary by heading is now closed until you select it. When open, it groups headings under Expenses and Savings and investments, with a subtotal for each and the overall total.
- A heading goes under Savings and investments when its kind is Savings and investments. This kind was called Savings before, and you can change it with Edit heading on the Entries page.
- The Entries page shows each heading's kind next to its name.

## 1.7.0 - 2026-11-08

- New setting: Open without passcode on this device. When it is on, the app opens straight to your budget on that device.
- Turning it on or off asks for your passcode. It applies only to the device where you turn it on.
- It stays on after you change your passcode. Forget this device turns it off.

## 1.6.0 - 2026-11-08

- When changes cannot sync, the footer now says why, for example an expired token or no connection.
- A Sync now button in the footer tries again straight away, so you no longer need to lock and unlock.
- The app also tries to sync again when you come back to it.

## 1.5.0 - 2026-11-02

- Home leads with the total to transfer as one large figure, with income, money left and a buffer label underneath.
- Each account in the transfer list has a coloured badge for its type. Select an account to see its monthly figures and entries.
- The wide "Monthly transfers in detail" table is gone. Its figures now open inside the transfer list, so there is no sideways scrolling on phones.

## 1.4.0 - 2026-11-02

- New look across the app, with softer cards, clearer type and icons in the navigation.
- Dark mode that follows your device setting.
- Home shows where your income goes, with a bar and percentages, and each transfer shows the account's role.

## 1.3.0 - 2026-11-02

- Headings can now be added and edited directly on the Entries page.
- Adding a heading in Settings now asks for its name and kind first.

## 1.2.0 - 2026-11-02

- Home now lists how much to transfer to each account this month, directly under the key figures.

## 1.1.0 - 2026-11-02

Offline support and installing as an app.

- Service worker serves the app from the network first and from the cache when offline. GitHub calls are never cached.
- Encrypted copy of the budget kept on the device. Changes made offline sync when the connection returns.
- Footer shows Online or Offline, and when changes are not yet synced.
- Web app manifest and icons, so the app can be installed to a phone or computer.

## 1.0.0 - 2026-11-02

First release.

- Home page with key figures, monthly transfers per account and a summary by heading.
- Entries, Accounts and Settings pages, with editable accounts and headings.
- Data encrypted in the browser with AES-256-GCM and saved to a private GitHub repository.
- First-run setup, passcode lock, change passcode, encrypted backup download and forget this device.
- Publish workflow that checks the files and deploys to GitHub Pages.
