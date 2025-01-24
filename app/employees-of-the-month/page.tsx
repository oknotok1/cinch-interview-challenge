import type { RandomUserApiResponse } from "@/types/RandomPerson";
import EmployeeCard from "./components/EmployeeCard";

export default async function People() {
  const url = "https://randomuser.me/api/?results=20";
  const response = await fetch(url);
  const data: RandomUserApiResponse = await response.json();
  const { results: people } = data;

  return (
    <div className="max-w-[1400px] mx-auto p-4 lg:p-8 flex flex-col gap-4">
      <h1 className="text-4xl">Employees of the Month</h1>
      <p>
        These are our top performing employees of the month, and we would like
        to recognize them.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-2">
        {people.map((person, index) => (
          <EmployeeCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}
