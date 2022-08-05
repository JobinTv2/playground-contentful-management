import "./styles.css";
import { createEntry, updateBlog } from "./ApiWithPackage";
import { createClient } from "contentful-management";
import { postData, deleteData, getData, uploadAsset } from "./Api";
import { useState } from "react";
export default function App() {
  const [file, setFile] = useState();
  const connect = async () => {
    const client = await createClient({
      accessToken: "CFPAT-3C7Djw8BPcyqV8kEagSyhvUgIjZyXIkbEVdVMrF24D4"
    });

    const space = await client.getSpace("em13gt2p9z3x");
    return (await space).getEnvironment("master");
  };
  console.log(file, "file");
  const client = async () => {
    const env = await connect();
    // updateBlog(env, "1zjjP0wcHInm353erc1gWp");
    // createEntry(env, "1zjjP0wcHInm353erc1gWp");
    try {
      // const result = await postData();
      // const result = await deleteData();
      const result = await getData();

      const res = await result.json();

      // console.log(res, "re");
    } catch (e) {
      console.log(e, "err");
    }
  };
  client();

  const handleClick = () => {
    const formData = new FormData();
    formData.append("randomfile", file);
    uploadAsset(file);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button type="button" onClick={handleClick}>
        {" "}
        Upload{" "}
      </button>
    </div>
  );
}
