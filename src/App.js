import "./styles.css";
import { createEntry, updateBlog } from "./Api";
import { createClient } from "contentful-management";
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
    updateBlog(env, "1zjjP0wcHInm353erc1gWp");
    createEntry(env, "1zjjP0wcHInm353erc1gWp");
  };
  client();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
