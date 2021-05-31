// Modules
import React from "react"
// Components
import { Layout } from "../layouts/layout"
import { PageHead } from "../layouts/pageHead"
// Styles
// import styles from '../styles/Home.module.scss'

export const About = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="About"
      />
      <div>
        <p>About</p>
      </div>
    </Layout>
  )
}

export default About