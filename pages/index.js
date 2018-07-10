import Layout from "../comps/MyLayout"
import Link from "next/link"

function getWines () {
	return [
		{id: "cab-sav", title: "Cabernet Sauvignon"},
		{id: "pinot-nior", title: "Pinot Nior"},
		{id: "merlot", title: "Merlot"},
	]
}

const WineLink = ({wine}) => (
	<li>
		<Link as={`/w/${wine.id}`} href={`/wine?title=${wine.title}`}>
			<a>{wine.title}</a>
		</Link>
		<style jsx>{`
	      li {
	        list-style: none;
	        margin: 5px 0;
	      }

	      a {
	        text-decoration: none;
	        color: blue;
	        font-family: "Arial";
	      }

	      a:hover {
	        opacity: 0.6;
	      }
	    `}</style>
	</li>
)

export default () => (
	<Layout>
		<h1>My Wines</h1>
		<ul>
			{getWines().map((wine) => (
				<WineLink key={wine.id} wine={wine}/>
			))}
		</ul>
		<style>{`
			h1, a {
				font-family: "Arial";
			}

			ul {
				padding: 0;
			}
		`}</style>
	</Layout>
)
