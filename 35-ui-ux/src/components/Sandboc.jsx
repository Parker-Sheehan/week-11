import React, { useReducer } from "react";
import SandboxSquare from "./SandboxSquare";

const initialState = {
  flexDirection: "",
  justifyContent: "",
  alignItems: "",
  flexwrap: "",
  gap: "",
};

const Sandboc = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FLEXDIRECTION":
        return { ...state, flexDirection: action.payload };
      case "JUSTIFYCONTENT":
        return { ...state, justifyContent: action.payload };
      case "ALIGNITEMS":
        return { ...state, alignItems: action.payload };
      case "FLEXWRAP":
        return { ...state, flexwrap: action.payload };
      case "GAP":
        return { ...state, gap: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="sandbox-container">
      <div className="selector-container">
        <select
          onChange={(e) =>
            dispatch({ type: "FLEXDIRECTION", payload: e.target.value })
          }
        >
          <option value="row">Flex Direction</option>
          <option value="row">Row</option>
          <option value="column">Column</option>
        </select>
        <select
          onChange={(e) =>
            dispatch({ type: "JUSTIFYCONTENT", payload: e.target.value })
          }
        >
          <option value="left">Justify Content</option>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="space-around">Space Around</option>
          <option value="space-between">Space Between</option>
        </select>
        <select
          onChange={(e) =>
            dispatch({ type: "ALIGNITEMS", payload: e.target.value })
          }
        >
          <option value="flex-start">Align Items</option>
          <option value="flex-start">Start</option>
          <option value="flex-end">End</option>
          <option value="center">Center</option>
        </select>
        <select
          onChange={(e) =>
            dispatch({ type: "FLEXWRAP", payload: e.target.value })
          }
        >
          <option value="none">Flex Wrap</option>
          <option value="none">None</option>
          <option value="wrap">Wrap</option>
        </select>
        <input
          type="text"
          placeholder="Gap"
          onChange={(e) =>
            dispatch({ type: "GAP", payload: e.target.value })
          }
        />
      </div>
      
      <SandboxSquare state={state}></SandboxSquare>
    </div>
  );
};

export default Sandboc;
