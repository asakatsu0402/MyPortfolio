// Modules
import React, {
  ReactNode
} from "react"

// *************** Type *************** //
type Props = {
  className?: string
  link: string
  children?: ReactNode
  text?: any
}

export const ExternalLink: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <a
      className={props.className}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      { props.children ? props.children : props.text }
    </a>
  )
}