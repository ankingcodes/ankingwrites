import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "ankingwrites"
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hey developers{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my blog !</p>
        <p>
          I am <b>Ankush Bhardwaj</b> aka <b><a href="https://github.com/ankingcodes">
            @ankingcodes </a></b>.<br/> In this blog, I shall write about the "hockey stick"
            growth in my tech career. Currently, I am a <b>Google Summer of Code</b> developer
            for <a href="https://github.com/chapel">
            <b>Chapel</b>. </a> I was also the winner of <a href="https://njackwinterofcode.github.io/leaderboard.html">
            <b>NWOC 2019</b>. </a> I spend my time hacking my way through a variety of self projects ranging from Assemblers,
            Bootloaders to Full-stack Web projects, anything that would blow up my mind.
            <br/> I turn into an open source enthusiast past midnight.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
