import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Logo from "./Asset/Logo.png";
import { useStickyBox } from "react-sticky-box";
import {
	Managewisata,
	Wisata,
	Manageevent,
	Managemakanan,
	Managestaycation,
	Staycation,
	Makanan,
	Event,
	User,
	Userdetail,
	Home,
	Manage,
	Transaction,
	Report,
} from "./Pages";

import {
	IoHome,
	IoPerson,
	IoCash,
	IoBuild,
	IoNewspaper,
	IoHomeOutline,
	IoCashOutline,
	IoPersonOutline,
	IoBuildOutline,
	IoNewspaperOutline,
} from "react-icons/io5";

import {
	Flex,
	List,
	ListItem,
	Text,
	Box,
	Image,
	Center,
} from "@chakra-ui/react";

function App() {
	const stickref = useStickyBox({ offsetTop: 0, offsetBottom: 0 });
	return (
		<BrowserRouter>
			<Flex>
				<Box
					backgroundColor="#342F2A"
					w="fit-content"
					p='10'
					height="41rem"
					ref={stickref}
				>
					<List spacing={4}>
						<Center>
							<Box>
								<Image
									borderRadius="full"
									boxSize="100px"
									src={Logo}
									alt="No Images"
								/>
								<Text p={3} fontWeight="bold" fontSize={20} color="white">
									Nias Trip
								</Text>
							</Box>
						</Center>
						<ListItem>
							<NavLink
								to="/"
								children={({ isActive }) =>
									isActive ? (
										<Flex
											backgroundColor={"blue.400"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoHome color="white" size={20} />
											</Box>
											<Text fontWeight="bold" color="white">
												Home
											</Text>
										</Flex>
									) : (
										<Flex
											backgroundColor={"antiquewhite"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoHomeOutline color="blue" size={20} />
											</Box>
											<Text fontWeight="Regular" color={"blue"}>
												Home
											</Text>
										</Flex>
									)
								}
							/>
						</ListItem>
						<ListItem>
							<NavLink
								to="/Transaction"
								children={({ isActive }) =>
									isActive ? (
										<Flex
											backgroundColor={"blue.400"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoCash color="white" size={20} />
											</Box>
											<Text fontWeight="bold" color="white">
												Transaction
											</Text>
										</Flex>
									) : (
										<Flex
											backgroundColor={"antiquewhite"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoCashOutline color="blue" size={20} />
											</Box>
											<Text fontWeight="Regular" color={"blue"}>
												Transaction
											</Text>
										</Flex>
									)
								}
							/>
						</ListItem>
						<ListItem>
							<NavLink
								to="/User"
								children={({ isActive }) =>
									isActive ? (
										<Flex
											backgroundColor={"blue.400"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoPerson color="white" size={20} />
											</Box>
											<Text fontWeight="bold" color={"white"}>
												User
											</Text>
										</Flex>
									) : (
										<Flex
											backgroundColor={"antiquewhite"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoPersonOutline color="blue" size={20} />
											</Box>
											<Text fontWeight="Regular" color={"blue"}>
												User
											</Text>
										</Flex>
									)
								}
							/>
						</ListItem>
						<ListItem>
							<NavLink
								to="/Manage"
								children={({ isActive }) =>
									isActive ? (
										<Flex
											backgroundColor={"blue.400"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoBuild color="white" size={20} />
											</Box>
											<Text fontWeight="bold" color={"white"}>
												Manage
											</Text>
										</Flex>
									) : (
										<Flex
											backgroundColor={"antiquewhite"}
											p={2}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoBuildOutline color="blue" size={20} />
											</Box>
											<Text fontWeight="Regular" color={"blue"}>
												Manage
											</Text>
										</Flex>
									)
								}
							/>
						</ListItem>
						<ListItem>
							<NavLink
								to="/Report"
								children={({ isActive }) =>
									isActive ? (
										<Flex
											backgroundColor={"blue.400"}
											p={2}
											mb={5}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoNewspaper color="white" size={20} />
											</Box>
											<Text fontWeight="bold" color={"white"}>
												Report
											</Text>
										</Flex>
									) : (
										<Flex
											backgroundColor={"antiquewhite"}
											p={2}
											mb={5}
											borderRadius={10}
											w={"52"}
										>
											<Box mr={5}>
												<IoNewspaperOutline color="blue" size={20} />
											</Box>
											<Text fontWeight="Regular" color={"blue"}>
												Report
											</Text>
										</Flex>
									)
								}
							/>
						</ListItem>
					</List>
				</Box>
				<Center w="100%">
					<Box ml={"20"} display="flex" mt="20">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/Wisata" element={<Wisata />} />
							<Route path="/Tambahkandatawisata" element={<Managewisata />} />
							<Route path="/Tambahkandatamakanan" element={<Managemakanan />} />
							<Route path="/Tambahkandataevent" element={<Manageevent />} />
							<Route path="/Editwisata/:id" element={<Managewisata />} />
							<Route path="/User" element={<User />} />
							<Route path="/Transaction" element={<Transaction />} />
							<Route path="/Manage" element={<Manage />} />
							<Route path="/Report" element={<Report />} />
							<Route path="/Event" element={<Event />} />
							<Route path="/Makanan" element={<Makanan />} />
							<Route path="/Staycation" element={<Staycation />} />
							<Route path="/Editevent/:id" element={<Manageevent />} />
							<Route path="/Editmakanan/:id" element={<Managemakanan />} />
							<Route
								path="/Editstaycation/:id"
								element={<Managestaycation />}
							/>
							<Route
								path="/Tambahkandatastaycation"
								element={<Managestaycation />}
							/>
							<Route path="/User/:id" element={<Userdetail />} />
							<Route />
						</Routes>
					</Box>
				</Center>
			</Flex>
		</BrowserRouter>
	);
}

export default App;
