export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">

     <h2 className="font-semibold text-lg text-black">
        Corporate Document Intelligence Assistant
      </h2>

      <div className="flex items-center gap-4">

        <span className="text-sm text-gray-600">
          Admin
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600"></div>

      </div>

    </header>
  );
}
