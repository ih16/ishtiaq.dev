import clsx from "clsx";
import { useState, type FC } from "react";
import IconMap from "../icons/IconMap";

interface Props {
  title: string;
  items: {
    name: string;
    icon: string;
    label: string;
    content: string;
  }[];
}

const Tabs: FC<Props> = ({ title, items }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [hoveredTab, setHoveredTab] = useState<string>("");
  const activeItem = items?.find((item) => item?.name === activeTab);
  const hoveredItem = items?.find((item) => item?.name === hoveredTab);

  const handleTabClick = (name: string) => {
    if (activeTab === name) setHoveredTab("");
    setActiveTab((prev) => (prev === name ? "" : name));
  };

  const handleMouseIn = (name: string) => setHoveredTab(name);

  const handleMouseOut = (name: string) => {
    setTimeout(() => setHoveredTab((prev) => (prev !== name ? prev : "")), 100);
  };

  return (
    <div className="my-4">
      <h2 className="text-teal-500 font-semibold">{title}</h2>
      <div className="flex">
        {items?.map((item) => {
          const icon = item?.icon ? IconMap?.[item?.icon] : null;
          return (
            <button
              key={item?.name}
              className={clsx("flex gap-4 items-center slide-hover p-4", {
                "bg-teal-950 text-teal-400 tab-active !transition-none":
                  activeTab === item?.name,
              })}
              onClick={() => handleTabClick(item?.name)}
              onMouseEnter={() => handleMouseIn(item?.name)}
              onMouseLeave={() => handleMouseOut(item?.name)}
            >
              <div className="w-8 h-8">{icon}</div>
              <div>{item?.label}</div>
            </button>
          );
        })}
      </div>
      {hoveredItem ? (
        <div
          className={clsx("bg-teal-950 p-4", {
            "slide-down": !activeItem,
          })}
        >
          {hoveredItem?.content}
        </div>
      ) : null}
      {activeTab && !hoveredItem ? (
        <div
          className={clsx("bg-teal-950 p-4", {
            "slide-down": !activeItem,
          })}
        >
          {activeItem?.content}
        </div>
      ) : null}
    </div>
  );
};

export default Tabs;
