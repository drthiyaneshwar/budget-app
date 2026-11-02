# Changelog

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
