// Session 23 · Practice solution: Writers page
// Slide 13. Includes the stretch.

// The names and cities are the first five writers from JSONPlaceholder.
// The post counts are made up for this exercise.
const writers = [
  { id: 1, name: 'Leanne Graham', city: 'Gwenborough', posts: 10 },
  { id: 2, name: 'Ervin Howell', city: 'Wisokyburgh', posts: 10 },
  { id: 3, name: 'Clementine Bauch', city: 'McKenziehaven', posts: 0 },
  { id: 4, name: 'Patricia Lebsack', city: 'South Elvis', posts: 3 },
  { id: 5, name: 'Chelsey Dietrich', city: 'Roscoeview', posts: 2 },
];

function App() {
  return (
    <div>
      {/* TODO 1 */}
      <h1>Blog Reader</h1>

      {/* TODO 2 */}
      <p>{writers.length} writers</p>

      {/* STRETCH: this OR that, around the whole list */}
      {writers.length === 0 ? (
        <p>No writers yet.</p>
      ) : (
        // TODO 3: one <li> per writer, with a key
        // TODO 4: this OR that, after the city
        // TODO 5: this OR nothing, at the end
        <ul>
          {writers.map((writer) => (
            <li key={writer.id}>
              {writer.name} ({writer.city}) - {writer.posts === 0 ? 'No posts yet' : writer.posts + ' posts'}
              {writer.posts >= 10 && <strong> Top writer</strong>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

// Common mistakes we saw:
//   - class="..." instead of className="..."
//   - no key on the <li>, so a warning in the console
//   - an if inside { }: use ? : or && instead
//   - two elements side by side with no parent around them
