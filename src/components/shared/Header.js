import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="my-5">
      <Container>
        <Image
          src={headingImage}
          width={500}
          height={500}
          className="mx-auto "
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-4"
        >
          Journalism Without Fear Of Favor
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
