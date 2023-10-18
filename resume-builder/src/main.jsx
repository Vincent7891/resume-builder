import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GeneralInformation from './GeneralInformation.jsx'
import Education from './Education.jsx'
import ProfessionalInformation from './ProfessionalInformation.jsx'
import CV from './CV.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GeneralInformation/>
    <Education/>
    {/* <ProfessionalInformation/> */}
    <CV/>
  </React.StrictMode>,
)
