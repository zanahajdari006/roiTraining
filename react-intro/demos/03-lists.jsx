// Session 23 · Demo 03: Rendering lists with .map()
// Slide 11. Copy everything into hello-react/src/App.jsx and save.
// The writers are the first four from JSONPlaceholder, the API our Blog Reader uses.

const writers = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
];

// Blog Reader, ui.js, did this:
//   users.forEach((user) => console.log(user.id + '. ' + user.name));
// We can't put a loop inside { }, but .map() GIVES BACK a new array (Session 17),
// and React can show an array of elements.

function App() {
  return (
    <div>
      <h1>Writers</h1>
      <ul>
        {writers.map((writer) => (
          // key: a unique, unchanging id, so React can tell the items apart.
          <li key={writer.id}>
            {writer.id}. {writer.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Try it: delete key={writer.id}, save, and open the console (F12).
// Expected: a warning that each child in a list should have a unique "key" prop.
// Put the key back and the warning goes away.
