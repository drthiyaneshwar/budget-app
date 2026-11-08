# Changelog

## 1.24.1 - 2026-11-08

- Money needed this month now also counts the monthly share you put aside for yearly and quarterly bills that are not due that month. Only bills due that month are counted in full instead of as a share.

## 1.24.0 - 2026-11-08

- Coming up is back to a simple list of each month's yearly and quarterly bills, with Will pay and Set aside totals.
- Each month has a Money needed this month box: all monthly payments (expenses and savings) plus the bills due that month, at full amount. Monthly shares of yearly bills are not added, so nothing is counted twice. Set-aside costs are shown separately.
- Yearly and quarterly entries without a due month are listed at the top of Coming up, and counted at their monthly share until you add one.

## 1.23.0 - 2026-11-08

- Coming up groups each month's bills by account. Under each account it shows what is saved each month for those bills, and how much more than that is paid from the account's savings that month, or that this month's saving covers it.

## 1.22.0 - 2026-11-08

- On the Entries page, each heading opens on its own page with its entries and the Add entry, Edit heading and Delete heading buttons. Back to Entries returns to the list.
- A new heading opens its page straight away, and adding an entry keeps you on the heading's page.

## 1.21.0 - 2026-11-08

- The Calculator opens on its own page from Settings instead of opening inside the Settings page. Back to Settings returns you.

## 1.20.0 - 2026-11-08

- The Calculator moved from its own tab into Settings, as a Calculator section you select to open. The tabs are back to Home, Entries and Settings.

## 1.19.0 - 2026-11-08

- New Calculator tab: compares keeping money in a savings account with slab interest (A), part in the savings account and the rest in a liquid fund (B), and an FD with monthly payouts (C). Results update as you type.
- Your amounts are saved in your encrypted budget, so they sync between devices and are never stored in the app's code. Rates and slab limits can be changed.

## 1.18.0 - 2026-11-08

- New Export section in Settings. Choose what to export (everything, overview, entries, summary by heading, accounts, income sources, or bills for the next 12 months) and a format.
- Formats: text for AI chatbots (tables with a short explanation, ready to paste), Excel (CSV file) and JSON.
- Copy puts it on the clipboard; Download file saves it. The export is not encrypted.

## 1.17.1 - 2026-11-08

- In Coming up, each month's main total now includes everything due. When a month has both kinds, Will pay and Set aside, if needed each show their own total underneath.

## 1.17.0 - 2026-11-08

- Coming up splits each month into bills that will be paid and a purple Set aside, if needed part, each with its own total. The month's main total counts only the bills that will be paid.

## 1.16.0 - 2026-11-08

- The Will there be enough? card is replaced by How much each account should hold. For each account with dated bills, it shows the amount the account should have at the start of each of the next 12 months, and the bills paid that month.
- If you enter the balance today in Settings, it shows whether the account is on track, or how much to add once to catch up.

## 1.15.0 - 2026-11-08

- Yearly entries can have a due month, and quarterly entries a first due month. Set it when adding or editing an entry.
- Home has a Coming up card listing the yearly and quarterly bills due in the next 3 months.
- Home has a Will there be enough? card. For each account with dated bills, it follows the balance over the next 12 months and warns about any month that would run short.
- Each account in Settings has an optional Balance today, which the check starts from.

## 1.14.0 - 2026-11-08

- Income can be split into sources in Settings, each with a name and a monthly amount. Monthly income is their total.
- Select Split into income sources to start. Your current income becomes the first source.
- Income sources from two devices are combined like entries.

## 1.13.0 - 2026-11-08

- Accounts moved into Settings, as an Accounts section you select to open. The Accounts tab is gone, so there are three tabs: Home, Entries and Settings.
- The Headings list was removed from Settings. Headings are added, edited and now also deleted on the Entries page.

## 1.12.0 - 2026-11-08

- New Set aside option on each entry, for money kept ready for a cost you may not have. Tick it when you add or edit an entry. It does not depend on the account or heading.
- Home has a third box, Set aside, in purple. Expenses and Savings and investments no longer include set-aside entries.
- Where your income goes and Summary by heading show Set aside as its own part.
- Set-aside entries have a purple tag on the Entries page and in the transfer list.
- Total to transfer is unchanged, because set-aside money is still moved each month.

## 1.11.0 - 2026-11-08

- Fixed: after unlocking, changes could stay on the device and not reach GitHub until the app was closed and opened again.
- Changes made on two devices are now combined instead of one device's save replacing the other's. If both devices change the same item, the device saving last wins for that item only.
- A save that gets no answer stops after 20 seconds, and the app keeps trying again every 30 seconds while changes are waiting.
- When you come back to the app, it loads changes made on your other devices.
- The app saves straight away when you leave it.

## 1.10.0 - 2026-11-08

- The Entries page shows only the headings at first, each with its monthly and yearly total, number of entries and kind.
- Select a heading to see its entries and the Edit heading and Add entry buttons. Select it again to close it.
- A heading stays open after you add an entry to it, and a new heading opens straight away.

## 1.9.1 - 2026-11-08

- Summary by heading no longer adds expenses and savings into one total. Each group shows its own total.

## 1.9.0 - 2026-11-08

- When you open an account in the transfer list, it shows its headings first, each with its monthly total and number of entries. Select a heading to see its entries.
- The Expenses and Savings and investments boxes work the same way.
- Amounts sit next to the names instead of at the far right of wide screens.
- New Appearance setting: choose Same as device, Normal (light) or Dark. It applies to this device only.

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
