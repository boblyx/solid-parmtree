import { onMount, For, Show , Switch, Match } from 'solid-js';
import type {Component} from 'solid-js';
import * as bootstrap from 'bootstrap';
import TreeField from './TreeField';

let innerTree = () => <div></div>;

let tree_root : HTMLDivElement

const IGNORE = ["mouseOffset", "svg", "baseSvg", "from_port", "to_port", "from", "to", 
  "html", "parent", "ports", "selected", "node", "tx", "line", "coords", "line_data"]

const EDITABLE = ["geometry", "category", "dimensions", "user_data", "name"]

const TreeView: Component<{tree : any, editable : boolean}> = (props) => {
  onMount(()=>{
    //document.addEventListener("update-selected", selectUpdate);
  });
  return (
    <>
      <For each = {Object.keys(props.tree)}>
        {(key, idx) => 
        <>
          <Switch>
            <Match when = {typeof props.tree[key] == 'object' && !(IGNORE.includes(key))}>
              <div class="ms-3">
                <details>
                  <summary class = "text-primary-emphasis fw-bold">{key}</summary>
                  <TreeView tree={props.tree[key]} editable = {props.editable || EDITABLE.includes(key)}/>
                </details>
              </div>
            </Match>
            <Match when = {typeof props.tree[key] != 'object' && !(IGNORE.includes(key))}>
              <TreeField key={key} value = {props.tree[key]} editable = {props.editable || EDITABLE.includes(key)}/>
            </Match>
          </Switch>
        </>
        }
      </For>
    </>
  );
}
export default TreeView;
