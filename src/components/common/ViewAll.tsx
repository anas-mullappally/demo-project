
import Link from "next/link";
import { Button } from "../ui/button";

// Change the type definition to a string
type Redirect = string;

export default function ViewAll({ redirectTo }: { redirectTo: Redirect }) {
  return (
    <div className="w-100 py-1 flex justify-center">
      <Link href={redirectTo}>
        <Button variant={"viewAll"} className="border-customBlue">
          View All
        </Button>
      </Link>
    </div>
  );
}
