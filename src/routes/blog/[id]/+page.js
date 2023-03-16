export const load = async ({ fetch, params: { id } }) => {
  const res = await fetch(`http://caixadefitas.com.br/wp-json/wp/v2/posts/${id}`);
  const post = await res.json();

  return {
    post,
  };
};