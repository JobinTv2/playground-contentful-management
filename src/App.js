import "./styles.css";
import { createClient } from "contentful-management";
export default function App() {
  const connect = async () => {
    const client = await createClient({
      accessToken: "CFPAT-3C7Djw8BPcyqV8kEagSyhvUgIjZyXIkbEVdVMrF24D4"
    });

    const space = await client.getSpace("em13gt2p9z3x");
    return (await space).getEnvironment("master");
  };

  const updateBlog = async (env, id) => {
    const blog = await env.getEntry(id);
    blog.fields.title["en-US"] = "Next js tutorial v 1.5";
    return blog.update();
  };
  const client = async () => {
    const env = await connect();
    console.log(updateBlog(env, "1zjjP0wcHInm353erc1gWp"));
  };
  client();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
