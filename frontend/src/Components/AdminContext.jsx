import { createContext, useState } from "react";
export const AdminContext = createContext();
// export const data = (props) => {
//   const [title, setTitle] = useState("");

//   return <AdminContext value={title}>{props.children}</AdminContext>;
// };
// export const Title = (props) => {
//   console.log("called", props);
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");

//   const getdata = () => {};
//   return <AdminContext.Provider>{props.children}</AdminContext.Provider>;
// };
