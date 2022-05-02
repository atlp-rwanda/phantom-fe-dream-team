import DriverAssignments from "../pages/DriverAssignments";

const privateRoutes = [
	{
		id: 1,
		exact: true,
		name: "Assign Driver to Bus",
		path: "/AssignDrivers",
		element: DriverAssignments,
	},
];

export default privateRoutes;
