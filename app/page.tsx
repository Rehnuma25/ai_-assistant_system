/*export default function HomePage() {
  return (
    <div>
      <h1 className="text-5xl font-bold">
         Document Intelligence Assistant
      </h1>

      <p className="mt-4 text-gray-600">
        Corporate Document Intelligence Assistant
      </p>
    </div>
  );
}*/
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}