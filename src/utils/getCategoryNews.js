export const getCategoryNews = async (category) => {
  const res = await fetch(
    `https://the-dragon-news-server-ten-sepia.vercel.app/news?category=${category}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
