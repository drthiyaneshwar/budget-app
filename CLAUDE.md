# Working rules for this repository

This repository is **public**. It holds only the app's code and its general idea and logic.

## Never put personal data here

Nothing that belongs to the person using the app goes into any file, commit message, branch name, tag, test or log in this repository:

- names of their work types, employers, clients or services (use generic wording such as "daily-target type" or "other work"),
- rates, income, goals, targets, step or milestone numbers, balances or any real amounts,
- names of people, banks, accounts, insurance policies or subscriptions,
- tokens, passcodes, or any part of the encrypted budget data.

Personal settings are entered by the user inside the app and stored in their encrypted budget, never written into the code. Defaults in code must be generic (empty, or neutral example values).

## Tests and examples

- Use made-up data only (for example "Work A", "Bank A", round numbers).
- Keep test scripts and screenshots outside the repository.

## Before every commit and push

- Search the changes, including commit messages, for personal words and numbers, and remove any found.
- Do not push until the user explicitly says "push".
- Ask before deleting any repository, branch, tag or file.
