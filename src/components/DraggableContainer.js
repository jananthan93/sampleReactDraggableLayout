import React from 'react';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import GridLayout from 'react-grid-layout';
import DataTable from './DataTable';
import DataForm from './DataForm';

const DraggableContainer =({layouts,isDashboard,setCurrentLayouts})=>{
  const layoutsArr =[...layouts]
    return (
      <>
      {/*  */}
      <div className={isDashboard ? "dashboard-bg":"rgl-container"}>
      <GridLayout className="layout resizable-handle" layout={layoutsArr} cols={14} rowHeight={30} width={1400}
       isBounded={true} 
       isDraggable={!isDashboard} 
       isResizable={!isDashboard}
       onLayoutChange={l=>{
        setCurrentLayouts(l)
        console.log({l})
        }}>
       {
          layoutsArr.map(layout=>(
            <div key={layout.i} style={{backgroundColor:'gray',borderWidth:15,borderColor:'black'}} border-width="3" >
                {layout.i.includes('form')?<DataForm/>:<DataTable/>}
            </div>)) 
       }
      </GridLayout>
      </div>
      {/* <DataTable/> */}
      </>
    )
}
export default DraggableContainer;