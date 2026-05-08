import { Link } from "@tanstack/react-router";
import { LogInIcon } from "lucide-react";

const Navbar = () => (
	<nav className="navbar">
		<div className="brand">
			<div className="mark">
				<div className="glyph" />
			</div>
			<Link to="/">
				<span>Skild</span>
			</Link>
		</div>
		<div className="actions">
			<Link to="/sign-in/$" className="btn-primary">
				<LogInIcon size={16} /> Sign in
			</Link>
		</div>
	</nav>
);

export default Navbar;
