# Budget Tracker App

A simple budget tracker application built with TypeScript and SASS

## Link to the demo

[https://integrify-budget-app.netlify.app/](https://integrify-budget-app.netlify.app/)

## Table of content

- [Technologies](#technologies)
- [Project structure](#project-structure)
- [Getting started](#getting-started)

<a name="technologies"></a>

## Technologies

- SASS
- TypeScript
- Redux / Redux Toolkit

<a name="project-structure"></a>

## Project structure

```
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│
└───src
    │   App.scss
    │   App.test.tsx
    │   App.tsx
    │   global.scss
    │   index.css
    │   index.tsx
    │
    ├───components
    │   │   index.scss
    │   │   index.ts
    │   │
    │   ├───Button
    │   │       Button.scss
    │   │       Button.tsx
    │   │
    │   ├───ExpenseInputForm
    │   │       ExpenseInputForm.scss
    │   │       ExpenseInputForm.tsx
    │   │
    │   ├───IncomeInputForm
    │   │       IncomeInputForm.scss
    │   │       IncomeInputForm.tsx
    │   │
    │   ├───InputItem
    │   │       InputItem.scss
    │   │       InputItem.tsx
    │   │
    │   └───TargetInputForm
    │           TargetInputForm.scss
    │           TargetInputForm.tsx
    │
    ├───hooks
    │       useInput.ts
    │
    ├───redux
    │   │   hooks.ts
    │   │   store.ts
    │   │
    │   └───features
    │           budgetSlice.ts
    │
    ├───types
    │       type.ts
    │
    ├───utils
    │       utils.ts
    │
    └───views
        ├───BalanceDisplay
        │       BalanceDisplay.scss
        │       BalanceDisplay.tsx
        │
        └───BudgetPanelUI
                BudgetPanelUI.scss
                BudgetPanelUI.tsx
```

<a name="getting-started"></a>

## Getting started

Clone the repository from github:

```
git clone https://github.com/tramnguyenhere/integrify_ts_budget-app.git
```
