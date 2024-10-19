import { useEffect, useState } from "react";
import { timeline } from "../data";
import IconMap from "./icons/IconMap";
import { clsx } from "clsx";

const Timeline = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramSkill = searchParams.get("skill");
    setActiveSkill(paramSkill);
    const focusLog = paramSkill
      ? timeline.find((log) => log.skills?.includes(paramSkill))
      : null;
    document
      .getElementById(`log-${focusLog?.title}`)
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);

  return (
    <>
      {timeline.map((log) => (
        <div
          id={`log-${log.title}`}
          key={log.title}
          className={clsx("p-4 lg:p-8 transition-all duration-200 ", {
            "pulse-bg": activeSkill && log.skills?.includes(activeSkill),
          })}
        >
          <div className="border-b border-teal-700 pb-2">
            <div className="text-gray-600 stroke-teal-400 font-bold">
              {log.date}
            </div>
            <h1 className="text-teal-300 font-semibold text-xl">{log.title}</h1>
            <h2 className="text-teal-600 text-lg">{log.subtitle}</h2>
          </div>

          <div className="flex space-x-3 my-4 p">
            {log.skills?.map((skill) => {
              const Icon = IconMap?.[skill] ?? null;
              return (
                <div
                  key={skill}
                  className={clsx("w-8 h-8 flex items-center", {
                    "animate-bounce duration-1000": activeSkill === skill,
                  })}
                >
                  {Icon}
                </div>
              );
            })}
          </div>
          {/* <p>{log.description}</p> */}
          <ul className="flex-col pt-2">
            {log.jobs?.map((job) => (
              <li key={job} className="flex gap-4">
                <span className="font-2xl text-gray-500">-</span>
                <span>{job}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Timeline;
