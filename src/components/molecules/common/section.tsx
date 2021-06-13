// Modules
import React, {
  ReactNode
} from "react"

// *************** Type *************** //
type Props = {
  title
  children?: ReactNode
}

export const Section: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <section
      className="flex justify-between w-2/3 m-auto"
    >
      <h2 className="font-bold text-3xl">
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}