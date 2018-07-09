import {withRouter} from "next/router"
import Layout from "../comps/MyLayout"
import Markdown from "react-markdown"

const Content = withRouter((props) => (
  <div>
    <div className="markdown">
      <Markdown source={`
 ## ${props.router.query.title}

 This is a great wine to drink.
 [Wine.com](https://www.wine.com/)
      `}/>
    </div>
    <style jsx global>{`
      body {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h2 {
        margin: 10px 0;
        padding: 0;
        text-transform: uppercase;
      }
   `}</style>
  </div>
))

const Page = (props) => (
  <Layout>
    <Content />
  </Layout>
)

export default Page
