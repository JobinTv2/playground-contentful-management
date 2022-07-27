export const postData = () => {
  return fetch(
    "https://api.contentful.com/spaces/em13gt2p9z3x/environments/master/entries",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer CFPAT-3C7Djw8BPcyqV8kEagSyhvUgIjZyXIkbEVdVMrF24D4",
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "blog"
      },
      body: JSON.stringify({
        fields: {
          title: {
            "en-US": "Hello, World!"
          },
          description: {
            "en-US": "Bacon is healthy!"
          },
          id: {
            "en-US": 20
          }
        }
      })
    }
  );
};

export const deleteData = () => {
  return fetch(
    "https://api.contentful.com/spaces/em13gt2p9z3x/environments/master/entries/6bgghX1OxAHnXThVXqhKbP",
    {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer CFPAT-3C7Djw8BPcyqV8kEagSyhvUgIjZyXIkbEVdVMrF24D4",
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "blog"
      }
    }
  );
};

export const getData = () => {
  return fetch(
    "https://api.contentful.com/spaces/em13gt2p9z3x/environments/master/entries/1zjjP0wcHInm353erc1gWp",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer CFPAT-3C7Djw8BPcyqV8kEagSyhvUgIjZyXIkbEVdVMrF24D4",
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "blog"
      }
    }
  );
};
