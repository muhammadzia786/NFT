import React from "react";
import { useState } from "react";

export default function Slid() {
  const [loom, setLoom] = useState(false);
  function clickme() {
    setLoom(!loom);
  }

  return (
    <div>
      <div>
        <button onClick={clickme}>Click me</button>
        {loom ? (
          <tr>
            <td>bvkjdbvcjbxc Lorem</td>
          </tr>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
