import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../components/LePoste/LePoste.css'
import { useState } from 'react';


function TextEditor() {
  const modulesRef = {
    toolbar: [
      ["bold", "italic","link", "image"],
      [{ header: [1, 2, 3, false] }],
      [
        { list: "ordered" },
        { list: "bullet" },
      ],
      [ { indent: "-1" }],
      ["clean"]
    ]
  };
   

  return (
    <div>
      <ReactQuill 
       modules={modulesRef}
      theme="snow" 
  />
    </div>
  );
}

export default TextEditor;