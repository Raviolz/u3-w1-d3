import "./App.css"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import LibraryNav from "../src/components/LibraryNav.jsx"
import LibraryAlert from "../src/components/LibraryAlert.jsx"
import BookList from "../src/components/BookList.jsx"
import LibraryFooter from "../src/components/LibraryFooter.jsx"
import FantasyBooks from "../src/data/fantasy.json"

function App() {
  return (
    <>
      <LibraryNav></LibraryNav>
      <LibraryAlert></LibraryAlert>
      <BookList books={FantasyBooks}></BookList>
      <LibraryFooter></LibraryFooter>
    </>
  )
}

export default App
