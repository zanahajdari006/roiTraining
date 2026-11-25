// Session 23 · Practice: Writers page
// Slide 13. 15 minutes. Copy everything into hello-react/src/App.jsx, save,
// then complete TODO 1 to 5 inside App.
//
// EXPECTED RESULT ON THE PAGE
//   Blog Reader
//   5 writers
//   • Leanne Graham (Gwenborough) - 10 posts Top writer
//   • Ervin Howell (Wisokyburgh) - 10 posts Top writer
//   • Clementine Bauch (McKenziehaven) - No posts yet
//   • Patricia Lebsack (South Elvis) - 3 posts
//   • Chelsey Dietrich (Roscoeview) - 2 posts
//
// STRETCH (finished early?)
//   If there are no writers, show "No writers yet." INSTEAD of the list.
//   Test it by changing the array to: const writers = [];
//
// HINTS
//   - Anything JavaScript inside JSX goes in { }.
//   - writers.length gives you the number of writers.
//   - .map turns each writer into an <li>. Every <li> needs key={writer.id}.
//   - This OR that:      {condition ? 'this' : 'that'}
//   - This OR nothing:   {condition && <strong>this</strong>}
//   - Page went blank or red? Read the error in the browser first: it names the line.
//   - Still stuck? Check: className not class, one parent element, every tag closed.

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
      {/* TODO 1: an <h1> that says Blog Reader */}

      {/* TODO 2: a <p> that says "5 writers". Use writers.length, not the number 5. */}

      {/* TODO 3: a <ul> with one <li> per writer, showing the name and city:
                  Leanne Graham (Gwenborough) */}

      {/* TODO 4: inside each <li>, after the city: "No posts yet" when posts is 0,
                  otherwise the number of posts, like "10 posts" */}

      {/* TODO 5: inside each <li>, at the end: the words "Top writer",
                  but only when posts is 10 or more */}
    </div>
  );
}

export default App;
