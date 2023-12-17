import {
	Box,
	Button,
	DialogContent,
	DialogTitle,
	Typography,
	styled,
	Dialog,
	CardHeader,
	Avatar,
	Stack,
	CardContent,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostCard } from "../Home/Home";
import { JobPost } from "../Home/Home";
import useAuth from "../../hooks/useAuth";

const EmployerProfile = () => {
	const [posts, setPosts] = useState([]);
	const { user, isLoading } = useAuth();
	const [userDetails, setUserDetails] = useState();
	const [employerDetails, setEmployerDetails] = useState();

	const getPosts = async () => {
		await axios
			.get(`http://localhost:8080/post/${user.id}/employer`)
			.then(response => {
				setPosts(response.data.data);
				console.log(response);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		if (user.isAuthenticated) {
			getPosts();
			const fetchUserDetails = async () => {
				await axios
					.get(`http://localhost:8080/user/getUser?userId=${user.userId}`)
					.then(response => {
						setUserDetails(response.data.data);
					})
					.catch(error => {
						console.log("Fetching UserDetails Error: ", error);
					});
				await axios
					.get(
						`http://localhost:8080/employer/getEmployerByUserId?userId=${user.id}`
					)
					.then(response => {
						setEmployerDetails(response.data.data);
					})
					.catch(error => {
						console.log("Fetching EmployerDetails Error: ", error);
					});
			};
			fetchUserDetails();
		}
	}, [isLoading, user]);

	if (!userDetails || !employerDetails) {
		return "...";
	}

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					verflowY: "auto",
					marginTop: "70px",
					marginLeft: "200px",
				}}>
				{/* Company Profile */}
				<Box
					width="1500px"
					display="flex"
					flexDirection="column"
					rowGap="40px">
					<Box display="flex">
						<Box
							width="812px"
							height="302px"
							borderRadius="15px"
							border="2px solid #000000"
							marginRight="40px"
							display="flex">
							{/* Profile Details */}
							<Box
								width="400px"
								display="flex"
								justifyContent="center">
								<Box
									sx={{
										width: "400px",
										height: "302px",
										display: "flex",
										alignItems: "center",
										flexDirection: "column",
										paddingTop: "20px",
									}}>
									<CardHeader
										avatar={
											<Avatar
												src={`http://localhost:8080/user/${user.userId}/image`}
												sx={{
													width: 70,
													height: 70,
													marginTop: "35px",
												}}></Avatar>
										}
									/>
									<CardContent sx={{ textAlign: "center" }}>
										{
											<Typography variant="h4">
												{userDetails.firstName} {userDetails.lastName}
											</Typography>
										}
									</CardContent>
								</Box>
							</Box>
							<Box
								width="400px"
								display="flex"
								flexDirection="column"
								rowGap="10px"
								textAlign="start"
								paddingLeft="20px"
								paddingTop="20px">
								<Typography
									variant="h5"
									fontWeight="bold">
									About Us
								</Typography>
								<Typography
									variant="p"
									paddingBottom="15px"
									sx={{ wordBreak: "break-word" }}>
									{employerDetails.companyDescription}
								</Typography>
								<Typography
									variant="h5"
									fontWeight="bold">
									Employer Email
								</Typography>
								<Typography
									variant="p"
									paddingBottom="10px">
									{userDetails.email}
								</Typography>
								<Button
									component={Link}
									to="/editemployer"
									sx={{
										maxWidth: "200px",
										height: "27px",
										borderRadius: "15px",
										border: "3px solid #20A4E6",
										color: "#20A4E6",
										textTransform: "none",
									}}>
									<Typography variant="p">Edit Profile</Typography>
								</Button>
							</Box>
						</Box>

						{/* Application Status */}
						<Box
							display="flex"
							flexDirection="column"
							rowGap={5}>
							<Box
								borderRadius="15px"
								border="2px solid #000000"
								width="320px"
								height="128px"
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column">
								<Typography
									variant="h6"
									fontWeight="bold">
									Number of Applicants
								</Typography>
								<Typography
									variant="h5"
									fontWeight="bold"
									color="#FF0404">
									2
								</Typography>
								<ApplicantsCard posts={posts} />
							</Box>
							<Box
								borderRadius="15px"
								border="2px solid #000000"
								width="320px"
								height="128px"
								display="flex"
								justifyContent="center"
								alignItems="center"
								flexDirection="column">
								<Typography
									variant="h6"
									fontWeight="bold">
									Company Name
								</Typography>
								<Typography
									variant="p"
									paddingBottom="10px">
									{employerDetails.companyName}
								</Typography>
								<Typography
									variant="h6"
									fontWeight="bold">
									Company Email
								</Typography>
								<Typography
									variant="p"
									paddingBottom="10px">
									{employerDetails.companyEmail}
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box
						borderRadius="15px"
						border="2px solid #000000"
						width="1300px"
						height="164px"
						display="flex"
						justifyContent="center"
						alignItems="center">
						<PostCard getPosts={getPosts} />
					</Box>
					<Box
						display="flex"
						flexDirection="column"
						rowGap={5}>
						{posts.map(post => (
							<JobPost
								post={post}
								getPosts={getPosts}
								key={post.id}
							/>
						))}
					</Box>
				</Box>
			</Box>
		</>
	);
};

const ApplicantsCard = ({ posts }) => {
	const [openJobPostings, SetopenJobPostings] = React.useState(false);
	const handleOpenJobPostings = () => SetopenJobPostings(true);
	const handleCloseJobPosting = () => SetopenJobPostings(false);
	const [openApplicants, SetOpenApplicants] = React.useState(false);
	const handleOpenApplicants = () => SetOpenApplicants(true);
	const handleCloseApplicants = () => SetOpenApplicants(false);
	const [appliedPosts, setAppliedPosts] = useState([]);
	const [currentPostId, setCurrentPostId] = useState(null);
	const [currectExamId, setCurrectExamId] = useState(null);

	useEffect(() => {
		const fetchAppliedPosts = async () => {
			console.log("asdf;lasjf;lkasdjf;lksadjl;fksjd");
			await axios
				.get(
					`http://localhost:8080/application/getApplications?postId=${currentPostId}`
				)
				.then(response => {
					setAppliedPosts(response.data.data);
				})
				.catch(error => {
					console.log("Fetching Applied Posts Error: ", error);
				});
		};
		if (currentPostId) fetchAppliedPosts();
	}, [currentPostId]);

	return (
		<>
			<Button
				onClick={handleOpenJobPostings}
				sx={{
					width: "150px",
					height: "27px",
					borderRadius: "15px",
					border: "3px solid #20A4E6",
					color: "#000000",
					textTransform: "none",
				}}>
				<Typography
					variant="p"
					color="#20A4E6">
					View Job Postings
				</Typography>
			</Button>
			<Dialog
				fullWidth
				maxWidth="md"
				open={openJobPostings}
				onClose={handleCloseJobPosting}>
				<DialogTitle
					textAlign="center"
					borderBottom="2px solid #808080"
					fontSize="30px"
					fontWeight="bold">
					Job Postings
				</DialogTitle>
				<DialogContent>
					<Stack
						spacing={3}
						justifyContent="center"
						alignItems="center"
						paddingTop="20px">
						{posts.map(post => (
							<Box
								key={post.id}
								width="800px"
								height="126px"
								border="2px solid #808080"
								borderRadius="20px"
								display="flex"
								alignItems="center"
								paddingLeft="30px">
								<Stack
									direction="row"
									columnGap="180px"
									alignItems="center">
									<Box width="400px">
										<Typography
											variant="h4"
											fontWeight="bold">
											{post.title}
										</Typography>
									</Box>
									<Box textAlign="center">
										<Button
											onClick={handleOpenApplicants}
											sx={{
												width: "190px",
												height: "42px",
												backgroundColor: "#000000",
												color: "#FFFFFF",
												borderRadius: "20px",
												"&:hover": { backgroundColor: "#000000" },
											}}>
											<Typography fontWeight="bold">
												<ButtonStyled
													onClick={() => {
														setCurrentPostId(post.id);
														setCurrectExamId(post.examId);
													}}>
													View
												</ButtonStyled>
											</Typography>
										</Button>
									</Box>
								</Stack>
							</Box>
						))}
					</Stack>
				</DialogContent>
			</Dialog>
			<Dialog
				fullWidth
				maxWidth="md"
				open={openApplicants}
				onClose={handleCloseApplicants}>
				<DialogTitle
					textAlign="center"
					borderBottom="2px solid #808080"
					fontSize="30px"
					fontWeight="bold">
					Applicants
				</DialogTitle>
				<DialogContent>
					<Stack
						spacing={3}
						justifyContent="center"
						alignItems="center"
						paddingTop="20px">
						{currentPostId &&
							appliedPosts.map(app => (
								<Box
									key={app.student.id}
									width="800px"
									height="126px"
									border="2px solid #808080"
									borderRadius="20px"
									display="flex"
									alignItems="center"
									paddingLeft="30px">
									<Stack
										direction="row"
										columnGap="180px"
										alignItems="center">
										<Box width="400px">
											<Typography
												variant="h4"
												fontWeight="bold">
												{app.student.user.firstName} {app.student.user.lastName}
											</Typography>
										</Box> 
										<Box textAlign="center">
											<Button
												sx={{
													width: "190px",
													height: "42px",
													backgroundColor: "#000000",
													color: "#FFFFFF",
													borderRadius: "20px",
													"&:hover": { backgroundColor: "#000000" },
												}}>
												<Typography fontWeight="bold">
													<LinkStyled
														to="/employerprofile/applicants"
														state={{
															app: app
														}}>
														View
													</LinkStyled>
												</Typography>
											</Button>
										</Box>
									</Stack>
								</Box>
							))}
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	);
};

const LinkStyled = styled(Link)({
	width: "210px",
	height: "40px",
	backgroundColor: "#000000",
	color: "#FFFFFF",
	textDecoration: "none",
	textTransform: "none",
});

const ButtonStyled = styled(Button)({
	width: "210px",
	height: "40px",
	backgroundColor: "#000000",
	color: "#FFFFFF",
	textDecoration: "none",
	textTransform: "none",
});

export default EmployerProfile;
