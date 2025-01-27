# Live Preview

https://interview-challenge-gold.vercel.app/

# Task 1 - UI/UX Challenge (10 minutes)

- You'll be presented with two options and must choose the one that aligns best with design and UI/UX principles.
- The challenge has three difficulty levels: easy, medium, and hard.
- You have 10 minutes to complete as many stages as you can.
- Get started here: [Can't Unsee](https://cantunsee.space/)

# Task 2A - Employee Of The Month Instructions (30 minutes)

## API Documentation

- [Random User Generator API Documentation](https://randomuser.me/documentation)

## Requirements

### 1. Fetch Data

- Fetch **20** random users from the Random User Generator API.

### 2. Generate TypeScript Types

- Generate the TypeScript types for the API response.
- Save the types in `/types/RandomPerson.d.ts`.

### 3. Create the `EmployeeCard` Component

- Display the following information about each user:

  1. **Name & Title**

     - Combine the following fields: `name.first`, `name.last`, and `name.title`.
     - Format: `"firstName lastName (title)"`.

  2. **Avatar with Status Indicator**

     - Display the user's avatar image using `picture.large`.
     - Add a status indicator (online/offline) based on a randomly generated boolean value.

  3. **Location**

     - Show the user's `city` and `state`.

  4. **Email Address**

     - Display the user's `email` with the Email MUI Icon.
     - Clicking the icon should open the user's email client.

  5. **Date of Birth & Age**

     - Display the date of birth in the `DD MMM YYYY` format using `dob.date`.
     - Show the user's `age` from `dob.age`.

  6. **Time Zone Information**

     - Show the user's `timezone.offset` and `timezone.description` in `UTC±X` format.
     - Use the AccessTime MUI Icon for this information.

### 4. Truncation and Tooltips

- Ensure each line of text has a maximum of **1 line** with an ellipsis (`...`) for overflow.
- Add a tooltip to display the full text when hovered.
- You may use the `Tooltip` component from `@mui/material`.

### 5. Responsive Page Layout

- Design the page based on the layout in `/public/Employees Of The Month Page`.
- Ensure the page is responsive with the following card distribution:
  - **Large Screens**: Maximum of 4 cards per row.
  - **Medium Screens**: Maximum of 2 cards per row.
  - **Small Screens**: Single card per row.

### Design Mockup

![Employees Of The Month](<public/Employees Of The Month Page.png>)

## Notes

- Use Material-UI (MUI) components for icons and styling where applicable.
- Ensure the page is visually appealing and adheres to the responsive layout design.

---

# Task - 2B RecipeCard Page Instructions (30 minute)

## Requirements

### 1. Import Recipes Data

- Import the recipes data from `@/data/recipes`.

### 2. Generate TypeScript Types

- Generate the TypeScript type for the recipes data.
- Save the types in `/types/Recipe.d.ts`.

### 3. Create the `RecipeCard` Component

- Display the following information about each recipe:

  1. **Image**

     - Display the `image` of the recipe that fills the width of the card.
     - Use the `Image` component from `next/image`.

  2. **Title**

     - Display the `title` of the recipe.

  3. **Source Name**

     - Show the source name of the recipe.

  4. **Dish Types**

     - Render the `dishTypes` as badges.
     - You may use the `Chip` component from `@mui/material`.

  5. **Additional Info**

     - Show the following details:
       - **Ready in minutes** (`readyInMinutes`)
       - **Servings** (`servings`)

  6. **Summary**

     - Display the `summary` of the recipe with a maximum of 4 lines.
     - Add a tooltip to show the full summary when hovered.
     - You may use the `Tooltip` component from `@mui/material`.

  7. **Source URL Button**

     - Add a button that links to the `sourceUrl` in a new tab.

### 4. Iterate Through Recipes

- Iterate through the `recipes` object and render the `RecipeCard` component.
  - Render the `RecipeCard` component by passing the `recipe` object as a prop.

### 5. Responsive Page Layout

- Design the page based on the layout in `/public/Recipes Page`.
- Ensure the page is responsive with the following card distribution:
  - **Large Screens**: Maximum of 4 cards per row.
  - **Medium Screens**: Maximum of 2 cards per row.
  - **Small Screens**: Single card per row.

### Design Mockup

![Recipes Page](<public/Recipes Page.png>)

## Notes

- Use proper styling to make the component visually appealing.
- Ensure the layout and design are responsive.

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
