import "./App.css";
import ContactListContainer from "./ContactList/ContactListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar fixed-top navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1 navbar-custom">Navbar</span>
      </nav>
      <ContactListContainer />
    </div>
  );
}

export default App;
