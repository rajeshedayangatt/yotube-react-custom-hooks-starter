function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="wrapper">
      <h1>React Custom Hooks Tutorial</h1>
      <div>
        <h3>Theme customsation hook</h3>
      </div>
    </div>
  );
}

export default App;
