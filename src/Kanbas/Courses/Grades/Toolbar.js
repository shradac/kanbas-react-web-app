import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileExport, faCog } from '@fortawesome/free-solid-svg-icons';

function Toolbar() {

  return (
    <div style={{paddingBottom: '10px'}}>
    
      <div className="float-end" style={{marginLeft: 'auto'}}>
      
        <button className="btn btn-secondary gray-btn margin-right-half">
          <FontAwesomeIcon icon={faFileImport} />
          Import
        </button>
        
        <button className="btn btn-secondary gray-btn margin-right-half"> 
         <FontAwesomeIcon icon={faFileExport} />
         Export
        </button>
        
        <button className="btn btn-secondary gray-btn">
          <FontAwesomeIcon icon={faCog} size="xl" style={{lineHeight: 1}} />
        </button>
      
      </div>
    
    </div>
  );
  

}
export default Toolbar;