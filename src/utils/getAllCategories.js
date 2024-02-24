export const getAllCategories = async () => {
  const res = await fetch(
    "https://the-dragon-news-server-ten-sepia.vercel.app/categories"
  );
  return res.json();
};
