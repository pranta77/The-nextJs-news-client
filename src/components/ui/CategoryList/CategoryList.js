import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  // console.log(allCategories);
  return (
    <Box className="mt-5 bg-gray-100 px-5 py-2">
      <Typography variant="h5">Categories</Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        {allCategories.map((catagory) => (
          <Button variant="outlined" key={catagory.id}>
            <Link href={`/categories/news?category=${catagory.title}`}>
              {catagory.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
