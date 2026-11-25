// Session 23 · Demo 02: Embedding expressions with { }
// Slide 10. Copy everything into hello-react/src/App.jsx and save.
// Inside JSX, { } opens a window back into JavaScript.
// Whatever is inside is worked out, and the result goes on the page.

const student = {
  name: 'Arta',
  city: 'Prishtina',
  sessionsDone: 22,
};

const hour = 10; // try 20, then save

function getGreeting(hour) {
  if (hour < 12) {
    return 'Good morning';
  }
  return 'Good evening';
}

function App() {
  return (
    <div>
      {/* 1. A function call */}
      <h1>
        {getGreeting(hour)}, {student.name}!
      </h1>

      {/* 2. An object property */}
      <p>You are in {student.city}.</p>

      {/* 3. Maths */}
      <p>Today is session {student.sessionsDone + 1}.</p>

      {/* 4. A string method */}
      <p>Name in capitals: {student.name.toUpperCase()}</p>

      {/* 5. This is how you write a comment inside JSX */}
    </div>
  );
}

export default App;

// Try it: put a statement inside the braces, for example
//   {if (hour < 12) { 'morning' }}
// Expected: an error. { } only takes an EXPRESSION, something that gives back a value.
// if and for do something but give nothing back. Slides 11 and 12 solve that.
