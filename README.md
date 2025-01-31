# Task 1 - UI/UX Challenge (10 minutes)

- You'll be presented with two options and must choose the one that aligns best with design and UI/UX principles.
- The challenge has three difficulty levels: easy, medium, and hard.
- You have 10 minutes to complete as many stages as you can.
- Get started here: [Can't Unsee](https://cantunsee.space/)

# Task 2A - Employee Of The Month Instructions (30 minutes)

#### Design Mockup

![Employees Of The Month](<public/Employees Of The Month Page.png>)

#### Demo Link

https://interview-challenge-gold.vercel.app/employees-of-the-month

#### Useful Documentation Links

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Random User Generator API Documentation](https://randomuser.me/documentation)

## Requirements

### 1. Fetch Data

- Fetch **20** random users from the Random User Generator API
- Perform the API fetch in the `/app/employees-of-the-month/page` component
- Iterate through the response data & pass the parsed response data as props to the `EmployeeCard` component to render each user's information **individually**

### 2. Generate TypeScript Types

- Generate the TypeScript types for the API response.
- Save the types in `/types/RandomPerson.d.ts`.
- _Optional if unfamiliar with TypeScript_

### 3. Create the `EmployeeCard` Component

- With reference to the design mockup, or [demo page](https://interview-challenge-gold.vercel.app/employees-of-the-month), create the `EmployeeCard` component.
- Only 1 instance the user object should be passed as props to the `EmployeeCard` component.

### 4. Truncation and Tooltips

- Email Address Link

  i. Clicking on the email address should open the user's email client.

- Truncation and Tooltips

  i. Ensure each line of text has a maximum of **1 line** with an ellipsis (`...`) for overflow.

  ii. Add a tooltip to display the full text when hovered. (You may use the `Tooltip` component from `@mui/material`.)

## Notes

- Use Material-UI (MUI) components for icons and styling where applicable.
- Ensure the page is visually appealing and adheres to the responsive layout design.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
