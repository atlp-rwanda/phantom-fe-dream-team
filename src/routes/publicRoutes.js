import Reset from "../components/ResetPassword/resetPassword";
import Email from "../components/ResetPassword/emailExist";
import Sent from "../components/ResetPassword/emailSent";

const publicRoutes = [
	{
		id: 1,
		exact: true,
		name: "Reset Password",
		path: "/ResetPassword",
		element: Reset,
	},
	{
		id: 2,
		exact: true,
		name: "Email Exists",
		path: "/ResetPassword/EmailExists",
		element: Email,
	},
	{
		id: 3,
		exact: true,
		name: "Email Sent Successfully",
		path: "/ResetPassword/EmailSentSuccessful",
		element: Sent,
	},
];

export default publicRoutes;
