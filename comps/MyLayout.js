import Header from "./Header"

const LayoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #eee'
}

const Layout = (props) => (
  <div style={LayoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
