import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiGithub,
  SiLinux,
  SiVisualstudiocode,
  SiGraphql,
  SiNodedotjs,
} from "react-icons/si";

type Stack = {
  icon: React.ComponentType;
  name: string;
};

const languageDatabaseStacks: Stack[] = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiPython, name: "Python" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTypescript, name: "TypeScript" },
];

const frameworkLibraryStacks: Stack[] = [
  { icon: SiTailwindcss, name: "TailWindCSS" },
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node" },
];

const otherToolsStacks: Stack[] = [
  { icon: SiGithub, name: "GitHub" },
  { icon: SiLinux, name: "Linux" },
  { icon: SiVisualstudiocode, name: "VS Code" },
  { icon: SiGraphql, name: "GraphQL" },
];

export default function Skills() {
  const renderStacks = (stacks: Stack[]) => {
    return stacks.map((stack) => (
      <div key={stack.name} className="flex flex-col space-y-2">
        <p className="text-6xl">{React.createElement(stack.icon)}</p>
        <h3 className="self-center">{stack.name}</h3>
      </div>
    ));
  };

  return (
    <section className="flex flex-col p-10 m-4 space-y-2" id="skills">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        Skills
      </h2>
      <hr className="bg-green-600 w-20 h-1.5 self-center mb-6 mt-0" />
      <div className="p-4 mt-2 md:grid md:grid-cols-3 md:gap-4 space-x-2">
        <div className="flex flex-col">
          <h2 className="my-4 font-bold self-center md:text-xl">
            Languages and Core
          </h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            {renderStacks(languageDatabaseStacks)}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="my-4 self-center font-bold md:text-xl">
            Frameworks and Libraries
          </h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            {renderStacks(frameworkLibraryStacks)}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="my-4 font-bold self-center md:text-xl">Other Tools</h2>
          <div className="flex flex-wrap items-center justify-start space-x-4">
            {renderStacks(otherToolsStacks)}
          </div>
        </div>
      </div>
    </section>
  );
}
