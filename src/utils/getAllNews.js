export const getAllNews = async () => {
  const res = await fetch(
    "https://the-dragon-news-server-ten-sepia.vercel.app/all-news",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  return res.json();
};
