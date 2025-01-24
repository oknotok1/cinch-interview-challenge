/**
 * API Documentation: https://randomuser.me/documentation
 *
 * Instructions:
 * 1. Fetch 20 random users from the Random User Generator API
 * 3. Generate the Typescript types for the API response & use it to Create an EmployeeCard component that displays the following information about each user:
 *   a. Store the API response in a file in `/types/RandomPerson.ts`
 * 4. Following the design in `/public/Employees Of The Month Page, create a page that displays the following information about each user:
 *   a. Name & Title (name.first, name.last, name.title)
 *     i. Format: "firstName lastName (title)"
 *   b. An avatar image (picture.large) with a status indicator (online/offline).
 *     i. Create a random boolean value to determine if the user is online or offline.
 *   c. Location (city, state)
 *   d. Email address (email) with the Email MUI Icon that when clicked, opens the user's email client
 *   e. Date of birth in DD MMM YYYY format (dob.date), and age (dob.age)
 *   f. The time zone offset (timezone.offset) and description (timezone.description) in UTC±X format with the AccessTime MUI Icon
 * 5. Every line should have a maximum of 1 line of text with an ellipsis for overflow
 *   a. Add a tooltip to show the full text on hover
 * 6. The page layout should be responsive with:
 *   a. A maximum of 4 cards per row on large screens
 *   b. A maximum of 2 cards per row on medium screens
 *   c. A single card per row on small screens
 */

import type { RandomUserApiResponse } from "@/types/RandomPerson";
import EmployeeCard from "./components/EmployeeCard";

export default async function People() {
  return (
    <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-4">
      <h1 className="text-4xl">Employees of the Month</h1>
      <p>
        These are our top performing employees of the month, and we would like
        to recognize them.
      </p>
    </div>
  );
}
