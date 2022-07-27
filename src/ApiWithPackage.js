export const updateBlog = async (env, id) => {
  const blog = await env.getEntry(id);
  blog.fields.title["en-US"] = "Next js tutorial v 1.5";
  blog.update();
};
export const createEntry = async (env, id) => {
  env.createEntry("blog", {
    fields: {
      title: {
        "en-US": "Entry title"
      },
      description: {
        "en-US": "Entry des"
      },
      id: {
        "en-US": 15
      }
    }
  });
};
