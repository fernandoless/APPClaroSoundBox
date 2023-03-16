export const load = async ({ fetch }) => {
  const res = await fetch("http://caixadefitas.com.br/wp-json/wp/v2/posts");
  const allPosts = await res.json();
  const posts = allPosts.slice(0, 10);
  
  return {
    posts,
  };
};