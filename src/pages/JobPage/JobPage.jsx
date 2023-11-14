import {
  Box,
  CardHeader,
  Avatar,
  Typography,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Input,
  InputLabel,
} from "@mui/material";
import React from "react";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

const JobPage = () => {
  return (
    // Container
    <Box display="flex" justifyContent="center">
      {/* Left-Side */}
      <Box display="flex" flexDirection="column" width="1000px" rowGap={3}>
        <CardHeader
          avatar={
            <Avatar sx={{ width: 80, height: 80 }} aria-label="recipe">
              B
            </Avatar>
          }
          titleTypographyProps={{ variant: "h4", fontWeight: "bold" }}
          title="Employer Name"
          subheaderTypographyProps={{ variant: "h6" }}
          subheader="John.doe@cit.edu"
        />
        <Typography variant="h4" fontWeight="bold">
          Need a Front End Designer for New Project
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          Job Type:
        </Typography>
        <Box
          width="900px"
          height="470px"
          border="2px solid #000000"
          borderRadius="15px"
          padding="15px"
        >
          <Typography variant="h7" fontSize="21px">
            Description
          </Typography>
        </Box>
      </Box>
      {/* Right-Side */}
      <Box
        display="flex"
        flexDirection="column"
        height="100px"
        width="600px"
        marginTop="300px"
        alignItems="center"
      >
        <FactCheckOutlinedIcon sx={{ fontSize: "430px" }} />
        <TakeExam />
      </Box>
    </Box>
  );
};

const TakeExam = () => {
  const [TakeExam, setTakeExam] = React.useState(false);
  const handleTakeExam = () => setTakeExam(true);
  const handleCloseTakeExam = () => setTakeExam(false);

  return (
    <>
      <ButtonStyled onClick={handleTakeExam}>
        <Typography fontWeight="bold">Take Exam</Typography>
      </ButtonStyled>
      <Dialog
        fullWidth
        maxWidth="md"
        open={TakeExam}
        onClose={handleCloseTakeExam}
      >
        <DialogTitle textAlign="center" borderBottom="2px solid #808080">
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Assesment
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Stack>
            <InputLabel sx={{ paddingTop: "20px" }}>
              <Typography variant="h6" paddingLeft="10px">
                1. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                2. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                3. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                4. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
            <br />
            <InputLabel>
              <Typography variant="h6" paddingLeft="10px">
                5. Question
              </Typography>
            </InputLabel>
            <InputStyled
              onFocus="none"
              disableUnderline={true}
              placeholder="Answer"
            />
          </Stack>
          <br />
          <Box display="flex" justifyContent="end">
            <ButtonStyled sx={{ width: "160px" }}>
              <Typography fontWeight="bold">Submit</Typography>
            </ButtonStyled>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ButtonStyled = styled(Button)({
  width: "385px",
  height: "40px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "20px",
  textTransform: "none",
  "&:hover": { backgroundColor: "#000000" },
});

const InputStyled = styled(Input)({
  width: "800px",
  height: "70px",
  borderRadius: "20px",
  border: "1px solid #000000",
  paddingLeft: "20px",
});

export default JobPage;
