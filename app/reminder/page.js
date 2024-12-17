import { BiBellPlus } from "react-icons/bi";

const ReminderPage = () => {
  const state = false;

  if (!state) {
    return (
      <div className="flex flex-col items-center  mt-36">
        <span className="text-6xl text-gray-300">
          <BiBellPlus />
        </span>
        <h1 className="text-2xl text-gray-300 mt-4">
          Your Reminders will appear here{" "}
        </h1>
      </div>
    );
  }

  return <div>ReminderPage</div>;
};

export default ReminderPage;