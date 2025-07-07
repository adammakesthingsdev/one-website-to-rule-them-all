import { ConstructionIcon } from "lucide-react";

export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col w-full h-full absolute top-0 items-center justify-center text-center">
      <ConstructionIcon className="w-16 h-auto text-yellow-400" />
      <h2 className="text-2xl font-sans font-bold text-center m-3">
        This page is under construction, sorry for the inconvenience!
      </h2>
      <h3>
        <a href="mailto:adam@admk.dev" className="text-purple-500">
          Contact me
        </a>{" "}
        if you have concerns :)
      </h3>
    </div>
  );
}
