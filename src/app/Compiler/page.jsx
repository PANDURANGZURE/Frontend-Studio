'use client';
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [html, setHtml] = useState("<h1>Made with Efforts & ❤️ By Saurav Zure</h1>");
  const [css, setCss] = useState("h1 { color: green; }");
  const [js, setJs] = useState("console.log('Hello from JS')");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <Editor
          height="100%"
          width="33%"
          language="html"
          theme="vs-dark"
          value={html}
          onChange={(value) => setHtml(value)}
        />
        <Editor
          height="100%"
          width="33%"
          language="css"
          theme="vs-dark"
          value={css}
          onChange={(value) => setCss(value)}
        />
        <Editor
          height="100%"
          width="33%"
          language="javascript"
          theme="vs-dark"
          value={js}
          onChange={(value) => setJs(value)}
        />
      </div>
      <div style={{ height: "50vh", borderTop: "1px solid gray" }}>
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
