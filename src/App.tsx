import { createStore } from "solid-js/store";
import type { Component } from 'solid-js';
import TreeView from './TreeView';
export const [selected, setSelected] = createStore({
  "name": "editable",
  "example": "object",
  "nested": {"nested": "object"
              ,"more nested": {
                "even more nested": "object3"
              }
            }
}) as any;

const App: Component = () => {
  return (
    
    <>
      <div class = "m-4 container-fluid">
        <h1>ParmTree</h1>
        <div class = "m-4">
          <TreeView tree= {selected} editable = {false}/>
        </div>
      </div>
    </>

  )
};

export default App;
