// src/App.jsx
import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [markdownText, setMarkdownText] = useState("Hello Markdown");

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <Editor markdownText={markdownText} setMarkdownText={setMarkdownText} />
      <Preview markdownText={markdownText} />
    </main>
  );
}

export default App;
