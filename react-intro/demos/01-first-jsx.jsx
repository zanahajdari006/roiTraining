// Session 23 · Demo 01: Your first JSX
// Slide 10. Copy everything into hello-react/src/App.jsx and save.
// The browser updates by itself: no refresh, no Live Server.

// A component is a function that returns what should be on the page.
// Its name starts with a capital letter: App, not app.
function App() {
  // The round brackets after return let the JSX run over several lines.
  return (
    // Rule 1: return ONE parent element. Here it is the <div>.
    // Rule 2: className, not class (class is a JavaScript keyword, Session 18).
    <div className="page">
      <h1>Hello, React!</h1>
      <p>This text is on the page, not in the console.</p>

      {/* Rule 3: close every tag, even the ones HTML lets you leave open. */}
      <hr />
      <p>
        Line one
        <br />
        Line two
      </p>
    </div>
  );
}

// main.jsx imports App, so App must be exported (Session 18).
export default App;

// Try it: delete the <div> and its closing </div>, then save.
// Expected: a red error box, because the elements have no single parent.
// Undo, save, and the page is back.
