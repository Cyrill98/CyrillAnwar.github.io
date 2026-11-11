// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-surface border-fg/10 relative rounded-lg border bg-gradient-to-r to-surface w-full shadow-md shadow-fg/5 overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent to-indigo-500"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative bg-fg/[0.04]">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-accent text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-fg/10 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-syn-kw">const</span>
            <span className="mr-2 text-syn-prop">project</span>
            <span className="mr-2 text-syn-kw">=</span>
            <span className="text-syn-pun">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-syn-prop">name:</span>
            <span className="text-syn-pun">{`'`}</span>
            <span className="text-syn-str">{project.name}</span>
            <span className="text-syn-pun">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-syn-prop">tools:</span>
            <span className="text-syn-pun">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-syn-str">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-syn-pun">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-syn-pun">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-syn-prop">myRole:</span>
            <span className="text-syn-num">{project.role}</span>
            <span className="text-syn-pun">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-syn-prop">Description:</span>
            <span className="text-syn-var">{' ' + project.description}</span>
            <span className="text-syn-pun">,</span>
          </div>
          <div><span className="text-syn-pun">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;