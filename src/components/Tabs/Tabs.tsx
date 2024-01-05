import clsx from "clsx";
import { useState, type FC, useRef, createRef } from "react";
import IconMap from "../icons/IconMap";

interface Props {
  title: string;
  items: string[];
}

const Tabs: FC<Props> = ({ title, items }) => {
  return (
    <div className="my-4">
      <h2 className="text-teal-500 font-semibold">{title}</h2>
      <div className="flex flex-wrap gap-1">
        {items?.map((item, i) => {
          const icon = item ? IconMap?.[item] : null;
          return (
            <>
              <button
                key={item}
                className={clsx(
                  "bg-teal-950 bg-opacity-10 border w-[calc(50%-0.25rem)] md:w-[calc(33.33333%-0.25rem)] lg:w-[calc(16.6666%-0.25rem)] border-teal-950 flex gap-4 items-center slide-hover p-4"
                )}
              >
                <div className="w-8 h-8 flex">{icon}</div>
                <div>{item}</div>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
