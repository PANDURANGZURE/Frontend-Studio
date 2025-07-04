'use client';
import { useRef, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { VscRunAll } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa6";

function App() {
  const [html, setHtml] = useState("<h1>Made with Love and Efforts By Saurav Zure</h1>");
  const [css, setCss] = useState(" ");
  const [js, setJs] = useState("console.log('Made with Love and Efforts By Saurav Zure')");
  const [srcDoc, setSrcDoc] = useState("");
  const [activeTab, setActiveTab] = useState('html');
  const runButtonRef = useRef(null);

  const getEditorValue = () => {
    if (activeTab === 'html') return html;
    if (activeTab === 'css') return css;
    if (activeTab === 'js') return js;
  };

  const handleEditorChange = (value = "") => {
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
      saveAs(content, "Frontend-Studio.zip");
    });
  };

  const handleRun = () => {
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
  };

   useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        runButtonRef.current?.click(); // Step 2: Simulate click
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <div className="bg-black w-full min-h-screen relative overflow-x-hidden">
      <Header />

      <div className="md:m-8 m-3">
        <p className="text-white text1 text-xl md:text-3xl p-2">HTML, CSS & JS Compiler</p>
        <p className="text-white px-2 text2 text-xs md:text-sm">Made with Love and Efforts By <span className="text-purple-600">Saurav Zure</span></p>
      </div>

      <div className="bg-[#181818] md:m-10 m-5 rounded-xl z-50">
        {/* Tab + Buttons */}
        <div className="flex items-center ">
          <div className="flex gap-2 p-2">
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
          <div className="h-4 w-4 rounded-2xl bg-[#3c3c3c]"></div>
        </div>

        <div className=" p-2 flex  ml-auto">
          <p className="text-[#4c4c4c] text-xs font-semibold text2 md:text-sm px-2 ">Tip: Press <span className="text-purple-600"><kbd>Ctrl</kbd> + <kbd>S</kbd></span>  to Run</p>
        </div>
        </div>

        <div className="bg-[#202020] m-2 rounded-xl">
          <div className="flex flex-col md:flex-row flex-col-reverse md:justify-between items-center px-2 pt-2 gap-2">
            {/* Tab Buttons */}
            <div className="flex text-white font-mono space-x-2 md:space-x-4">
              {['html', 'css', 'js'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-4 py-2 rounded-t-md text-xs md:text-base ${
                    activeTab === tab
                      ? 'bg-[#181818] border-b-2 border-white'
                      : 'bg-[#3c3c3c] hover:bg-gray-600'
                  }`}
                >
                  {tab === 'html' && 'index.html'}
                  {tab === 'css' && 'style.css'}
                  {tab === 'js' && 'script.js'}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 md:m-0 m-2 ">
              <button
                onClick={handleRun}
                 ref={runButtonRef}
                className="text-white flex justify-center items-center gap-2 z-50 md:h-12 md:w-32 w-20 bg-[#181818] border border-white rounded-3xl hover:shadow-purple-700 transition-all"
              >
                <VscRunAll className="h-10"/>Run
              </button>
              <button
                onClick={handleDownloadZip}
                className="text-white z-50 flex justify-center items-center gap-2 h-12 w-40 bg-[#181818] border border-white rounded-3xl hover:shadow-purple-700 transition-all"
              >
                <FaDownload/>Download ZIP
              </button>
            </div>
          </div>

          {/* Editor and Output */}
          <div className="flex flex-col md:flex-row w-full h-[80vh] md:h-[70vh] border-t border-gray-800 mt-2">
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

            <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center border-t md:border-t-0 border-gray-700">
              <iframe
                srcDoc={srcDoc}
                title="Output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                className="bg-white rounded-br-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
