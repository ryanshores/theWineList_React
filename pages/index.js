import Layout from "../comps/MyLayout"
import Link from "next/link"

const PostLink = (props) => (
	<li>
		<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

export default () => (
	<Layout>
		<h1>My Wines</h1>
		<ul>
			<PostLink id="cab-sav" title="Cab Sav"/>
			<PostLink id="merlot" title="Merlot"/>
			<PostLink id="pinot-niore" title="Pinot Niore"/>
		</ul>
		<p>Hello Next.js</p>
	</Layout>
)
