// src/components/Editor.jsx
import React from "react";

function Editor({ markdownText, setMarkdownText }) {
  return (
    <section className="w-full md:w-1/2 h-1/2 md:h-full p-4 border-r border-gray-300">
      <h2 className="font-bold mb-2">Editor</h2>
      <textarea
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        className="w-full h-full p-2 border rounded resize-none font-mono"
      />
    </section>
  );
}

export default Editor;
