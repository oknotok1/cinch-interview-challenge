import Image from "next/image";
import { Card, Chip, Tooltip } from "@mui/material";
import { RandomPerson } from "@/types/RandomPerson";
import { AccessTime, Cake, Email, Female, Male } from "@mui/icons-material";
import Link from "next/link";

const EmployeeCard = ({ person }: { person: RandomPerson }) => {
  const { gender, name, location, email, dob } = person;
  const { title, first: firstName, last: lastName } = name;
  const { city, state, timezone } = location;
  const { offset: timezoneOffset, description: timezoneDescription } = timezone;
  const { date: dobDate, age } = dob;

  const image = person.picture.large;
  const isOnline = Math.random() < 0.5;

  const genderIconMap = {
    male: <Male fontSize="small" />,
    female: <Female />,
  };

  return (
    <Card className="p-4 rounded-md flex flex-col gap-4 max-h-[45rem] bg-gray-200">
      <div className="flex gap-4 items-center">
        <div className="w-[60px] h-[60px] relative">
          <Image
            src={image}
            alt={title}
            width={60}
            height={60}
            objectFit="cover"
            className="rounded-full border-2 border-gray-100"
          />
          <span
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${
              isOnline ? "bg-green-500" : "bg-gray-500"
            } border-2 border-gray-100`}
          />
        </div>
        <div className="flex flex-col items-start">
          <Tooltip
            title={`${firstName} ${lastName} (${title})`}
            className="w-min-content"
          >
            <p className="text-xl leading-0 line-clamp-1">
              {firstName} {lastName}{" "}
              <small className="text-xs font-light">({title})</small>
            </p>
          </Tooltip>
          {/* <div className="flex items-center gap-1 -ml-[0.125rem]">
            <Chip
              size="small"
              icon={genderIconMap[gender]}
              label={gender}
              className="w-min-content capitalize text-xs"
            />
          </div> */}
          <Tooltip title={`${city}, ${state}`} className="w-min-content">
            <p className="leading-0 text-gray-600 line-clamp-1">
              {city}, {state}
            </p>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-sm text-gray-500">
          <Email fontSize="small" />
          <Link href={`mailto:${email}`} className="text-blue-600">
            {email}
          </Link>
        </div>
        <div className="flex gap-2 items-center text-sm text-gray-500">
          <Cake fontSize="small" />
          <p>
            {new Date(dobDate).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            ({age} years old)
          </p>
        </div>
        <div className="flex gap-2 items-center text-sm text-gray-500">
          <AccessTime fontSize="small" />
          <Tooltip
            title={`${timezoneDescription} (UTC ${timezoneOffset})`}
            className="w-min-content"
          >
            <p className="line-clamp-1">
              {timezoneDescription} (UTC {timezoneOffset})
            </p>
          </Tooltip>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeCard;
