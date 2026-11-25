// Session 23 · Demo 04: Rendering conditionals
// Slide 12. Copy everything into hello-react/src/App.jsx and save.
// The same three moments as the Blog Reader's ui.js: loading, error, data.

const isLoading = false; // try true
const errorMessage = ''; // try 'HTTP error 404'
// try an empty array: const posts = [];
const posts = [
  { id: 1, title: 'sunt aut facere repellat provident' },
  { id: 2, title: 'qui est esse' },
];

function App() {
  // Tool 1: a plain if BEFORE the return. Use it when the whole page is different.
  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <h1>Posts</h1>

      {/* Tool 2: && shows this OR NOTHING. Left side false: nothing. Left side true: the right side. */}
      {errorMessage !== '' && <p>Something went wrong: {errorMessage}</p>}

      {/* Tool 3: condition ? this : that  shows this OR THAT (the conditional, or "ternary", operator). */}
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}

export default App;

// Tip: put a real true/false on the left of &&, like errorMessage !== '' or posts.length > 0.
