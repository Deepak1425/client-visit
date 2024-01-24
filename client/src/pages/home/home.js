import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Home = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])

  const docs = [
      { uri: require("../../files/sample.pdf"),
      fileType:"pdf",
      fileName:"sample.pdf"
     }
  ];

  return (
    <div>
      <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      style={{height:1000 }}
    />
    </div>
  )
}

export default Home