import clsx from "clsx";
import IconMap from "../icons/IconMap";
import type { FC } from "react";

interface Props {
  title: string;
  items: string[];
}

const Tabs: FC<Props> = ({ title, items }) => {
  const onClick = (item: string) => {
    const logsUrl = new URL(
      `${window.location.protocol}${window.location.host}/logs`
    );
    logsUrl.pathname = "/logs";
    logsUrl.searchParams.set("skill", item);
    window.location.href = logsUrl?.toString();
  };
  return (
    <div className="my-4">
      <h2 className="text-teal-500 font-semibold">{title}</h2>
      <div className="flex flex-wrap gap-1">
        {items?.map((item) => {
          const icon = item ? IconMap?.[item] : null;
          return (
            <a
              key={item}
              href={`/logs/?skill=${item}`}
              className="w-[calc(50%-0.25rem)] md:w-[calc(33.33333%-0.25rem)] lg:w-[calc(16.6666%-0.25rem)]"
            >
              <button
                className={clsx(
                  "w-full bg-teal-950 bg-opacity-10 border border-teal-950 flex gap-4 items-center slide-hover p-4"
                )}
                // onClick={() => onClick(item)}
              >
                <div className="w-8 h-8 flex">{icon}</div>
                <div className="text-ellipsis overflow-clip">{item}</div>
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
