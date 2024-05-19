/**
 * TreeField.tsx
 * @author Bob Lee
 * TODO:
 * [ ] Embed the value type in the html attribute e.g., number is Number
 * [ ] Update value of the object
 */
import { Switch, Match } from 'solid-js';
import type {Component} from 'solid-js';

/**
 * Checks if a string / number is numeric
 * @param {any} num: the string / number to check.
 */
export const isNumeric = (num: any) => (typeof(num) === 'number' || (typeof(num) === "string" && num.trim() !== '')) && !isNaN(num as number);

/**
 * Checks if a string is valid (empty string)
 */
export const isString = (num: any) => (num.trim() !== '');

function updateValue(e : KeyboardEvent ){
  let target = e.target as HTMLInputElement;
  // TODO
  if(target.getAttribute('data-type') === "string"){
    if(!(isString(target.value))){
      console.log("Not string");
    }else{
      console.log("valid string");
    }
  }
  else if(target.getAttribute('data-type') === "number"){
    if(!(isNumeric(target.value))){
      console.log("Not number");
    }else{
      console.log("valid number");
    }
  }
}

const TreeField: Component<{key: any, value: any, editable : boolean }> = (props) => {
  return(
    <>
      <div class = "ms-2 mb-1"><span class = "ms-2 text-primary">{props.key} </span> 
        <Switch>      
          <Match when = {props.editable === true }>
            <span>: <input onKeyUp={(e) => {updateValue(e)}} type = "text" value = {props.value} data-type={typeof props.value}></input></span><br/>
          </Match>
          <Match when = {props.editable === false }>
            <span>: {props.value}</span><br/>
          </Match>
        </Switch>
      </div>
    </>
  )
}

export default TreeField;
