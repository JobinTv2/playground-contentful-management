import "./styles.css";
import { createEntry, updateBlog } from "./ApiWithPackage";
import { createClient } from "contentful-management";
import { postData, deleteData, getData } from "./Api";
export default function App() {
  const connect = async () => {
    const client = await createClient({
      accessToken: "CFPAT-3C7Djw8BPcyqV8kEagSyhvUgIjZyXIkbEVdVMrF24D4"
    });

    const space = await client.getSpace("em13gt2p9z3x");
    return (await space).getEnvironment("master");
  };

  const client = async () => {
    const env = await connect();
    // updateBlog(env, "1zjjP0wcHInm353erc1gWp");
    // createEntry(env, "1zjjP0wcHInm353erc1gWp");
    try {
      // const result = await postData();
      // const result = await deleteData();
      const result = await getData();

      const res = await result.json();

      console.log(res, "re");
    } catch (e) {
      console.log(e, "err");
    }
  };
  client();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
