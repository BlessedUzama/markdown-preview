import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [markdownText, setMarkdownText] = useState("Hello Markdown");

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <ErrorBoundary>
        <Editor markdownText={markdownText} setMarkdownText={setMarkdownText} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Preview markdownText={markdownText} />
      </ErrorBoundary>
    </main>
  );
}

export default App;
