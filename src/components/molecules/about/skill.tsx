// Modules
import React from "react"
// Config
import {
  languages,
  frameworks,
  libraries,
  tools
} from "../../../config/aboutConfig"

export const Skill: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <div className="flex">
      <ul>
        { languages.map((language: any, i: number) => (
         <li key={i}>
           <p>{language.label}</p>
         </li>
        ))}
      </ul>
      <ul>
        { frameworks.map((frame: any, j: number) => (
          <li
            key={j}
            className=""
          >
            <p>{frame.label}</p>
          </li>
        ))}
      </ul>
      <ul>
        { libraries.map((library: any, k: number) => (
          <li
            key={k}
            className=""
          >
            <p>{library.label}</p>
          </li>
        ))}
      </ul>
      <ul>
        { tools.map((tool: any, l: number) => (
          <li key={l}>
            <p>{tool.label}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}