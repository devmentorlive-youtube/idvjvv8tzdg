export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <button
        onClick={() => fetch("/api/bot")}
        className="border py-1 px-6 bg-blue-500 text-white">
        Click me
      </button>
    </div>
  );
}

// https://discord.com/api/oauth2/authorize?client_id=872873901926015036&permissions=0&scope=bot%20applications.commands
