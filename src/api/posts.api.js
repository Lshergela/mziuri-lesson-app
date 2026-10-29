export const GetPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  return data;
};

export const GetPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  const data = await response.json();

  return data;
};

export const UpdatePost = async ({ id, post }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    },
  );

  const data = await response.json();

  return data;
};
