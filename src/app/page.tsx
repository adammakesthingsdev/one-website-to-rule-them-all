import { LucideMail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full bg-purple-200 h-80 flex flex-row items-center justify-center px-3 gap-3 sm:gap-10">
        <div className="text-left">
          <h1 className="text-5xl">Adam G</h1>
          <h3 className="text-xl italic w-44 sm:w-max">
            Engineering student and hobbyist
          </h3>
          <a
            href="mailto:adam@admk.dev"
            className="text-purple-900 hover:text-purple-900/80"
          >
            <span className="flex items-center gap-2">
              <LucideMail />
              adam@admk.dev
            </span>
          </a>
        </div>
        <div className="w-40 h-auto rounded-full bg-clip-content overflow-clip">
          <Image
            alt="Adam's logo"
            src={"/logo.png"}
            height={512}
            width={512}
            className="w-max h-auto"
          />
        </div>
      </div>

      <div className="w-full items-center my-5 text-2xl font-sans flex flex-col">
        <div className="max-w-md sm:w-lg md:w-2xl flex flex-col mx-3">
          <p>Hey! I'm Adam, and I like to make things!</p>
          <p>
            You can check out my portfolio here or click around and learn about
            me.
          </p>
        </div>
      </div>
    </>
  );
}
