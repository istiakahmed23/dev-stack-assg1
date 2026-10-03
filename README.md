Answers:
1. JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX to describe what the UI should look like
2. Props are data passed from a parent component to a child component. And, State is data that a component manages and can change over time.
3. useState lets a React component store and update data. I used it in App.tsx to manage data, also used state for the loading and error status.
4. useEffect is used for side effects such as fetching data. I used it in App.tsx to fetch the technology data from data.json when the application loads.
5. A unique key helps React identify each item in a list and understand which items were added, removed, or changed.
6. Conditional rendering means showing different UI depending on a condition. For example in the sidebar, I show an empty message when no technology has been selected.
 {stack.length === 0 ? (
  <p>No technology selected</p>
) : (
  // selected technologies
)}

