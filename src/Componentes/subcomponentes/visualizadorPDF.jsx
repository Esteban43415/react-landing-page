import React from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

export const App = ({fileUrl}) => {

    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
    

    return (
        
        <div style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '550px',
        }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js" >
                    <Viewer 
                    fileUrl={fileUrl}
                    plugins={[defaultLayoutPluginInstance]} />
                </Worker>


            </div>

        
    )
}

export default App