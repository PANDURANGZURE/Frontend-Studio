'use client';
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";

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
    <>
    
    <div className="bg-black w-screen h-full">
    <img className="absolute top-0 right-0 -z-0  pointer-events-none " src="https://github.com/MiladiCode/3D-startup-app/blob/main/gradient.png?raw=true" alt="" />
      <div className="absolute top-0 z-10 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-30  pointer-events-none" />

      <Header/>
      <div className="md:m-8 m-5 " >
        <p className="text-white text1 md:text-3xl p-2">HTML , CSS & JS Complier</p>
        <p className="text-white px-2 text2 text-sm">Made with Love ans Efforts By Saurav Zure </p>
      </div>

      {/*  */}
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
  {/* Editors Section */}
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

  {/* Output Section */}
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


    </div>
    </>
  );
}

export default App;
