import React from "react";
import {Worker, Viewer} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {pdfjs} from "react-pdf";

// Use the worker from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewerComponent = ({pdfUrl}) => (
  <div style={{height: "500px"}}>
    <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
  </div>
);

export default PDFViewerComponent;
