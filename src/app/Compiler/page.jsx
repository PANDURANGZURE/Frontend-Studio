'use client';
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Footer from "../Components/Footer";

function App() {
  const [html, setHtml] = useState("<h1>Made with Efforts & ❤️ By Saurav Zure</h1>");
  const [css, setCss] = useState("h1 { color: green; }");
  const [js, setJs] = useState("console.log('Hello from JS')");
  const [srcDoc, setSrcDoc] = useState("");
  const [activeTab, setActiveTab] = useState('html');

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

  const getEditorValue = () => {
    if (activeTab === 'html') return html;
    if (activeTab === 'css') return css;
    if (activeTab === 'js') return js;
  };

  const handleEditorChange = (value) => {
    if (!value) return;
    if (activeTab === 'html') setHtml(value);
    if (activeTab === 'css') setCss(value);
    if (activeTab === 'js') setJs(value);
  };

  const handleDownloadZip = () => {
    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("style.css", css);
    zip.file("script.js", js);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "saurav.zip");
    });
  };

  return (
    <div className="bg-black w-full min-h-screen relative overflow-x-hidden">
      
      {/* Header & Title */}
      <Header />
      <div className="md:m-8 m-3">
        <p className="text-white text1 text-xl md:text-3xl p-2">HTML, CSS & JS Compiler</p>
        <p className="text-white px-2 text2 text-xs md:text-sm">Made with Love and Efforts By Saurav Zure</p>
      </div>

      {/* Tab Bar + Download Button */}
      <div className="bg-[#181818] md:m-10 m-5 rounded-xl z-50 ">
        <div className="flex gap-2 p-2 ">
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
        </div>
        <div className=" bg-[#202020] m-2  rounded-xl">

        <div className="flex flex-col z-50 md:flex-row md:justify-between md:items-center px-2 md:px- pt-2 md:pt-4 gap-2 md:gap-0">
        <div className="flex text-white font-mono space-x-2 md:space-x-4 justify-center md:justify-start">
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-4 py-2 rounded-t-md text-xs md:text-base ${
                activeTab === tab
                  ? 'bg-[#181818] border-b-2 border-blue-500'
                  : 'bg-[#3c3c3c] hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'html' && 'index.html'}
              {tab === 'css' && 'style.css'}
              {tab === 'js' && 'script.js'}
            </button>
          ))}
        </div>

        <button
          onClick={handleDownloadZip}
          className="before:ease text-white relative z-50 h-12 w-40 overflow-hidden border border-white bg-[#3c3c3c] mb-1 text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-purple-700 hover:before:-translate-x-40 rounded-3xl"
        >
          Download ZIP
        </button>
      </div>

      {/* Editor & Output Responsive Layout */}
      <div className="flex z-50 flex-col md:flex-row w-full h-[80vh] md:h-[70vh] border-t border-gray-800 mt-2 md:mt-0">
        {/* Editor */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gray-700">
          <Editor
            theme="vs-dark"
            language={activeTab === 'js' ? 'javascript' : activeTab}
            value={getEditorValue()}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              wordWrap: "on",
            }}
            height="100%"
          />
        </div>

        {/* Output */}
        <div className="w-full z-50 md:w-1/2 h-1/2 md:h-full border-t md:border-t-0 border-gray-700">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="bg-white"
          />
        </div>
      </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
