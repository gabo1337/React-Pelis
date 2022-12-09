import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import { logout } from "./auth/handleJWT";
import Button from "./utils/Button";
import "./nav_style.css";
import { logo } from "./assets";

export default function Menu() {
	const { update, claims } = useContext(AuthenticationContext);

	function getUserEmail(): string {
		return claims.filter((x) => x.name === "email")[0]?.value;
	}

	return (
		<nav className="r_nav">
			<div className="content">
				<div className="logo">
					<img
						className="logo_icon"
						src={logo}
						alt="logo"
						width={50}
						height={50}
					/>
					<NavLink className="logo_title" to="/">
						React Movies
					</NavLink>
				</div>
				<Authorized
					role="admin"
					authorized={
						<div className="options">
							<li>
								<NavLink to="/genres">Generos</NavLink>
							</li>
							<li>
								<NavLink to="/actors">Actores</NavLink>
							</li>
							<li>
								<NavLink to="/movietheaters">Salas de Cine</NavLink>
							</li>
							<li>
								<NavLink to="/movies/create">Crear Peliculas</NavLink>
							</li>
							<li>
								<NavLink to="/users">Usuarios</NavLink>
							</li>
						</div>
					}
				/>
				<Authorized
					authorized={
						<>
							<span>Hello, {getUserEmail()}</span>
							<Button
								onClick={() => {
									logout();
									update([]);
								}}>
								Log out
							</Button>
						</>
					}
					notAuthorized={
						<div className="options">
							<Link to="/register" className="options_item_register">
								Register
							</Link>
							<Link to="/login" className="options_item_login">
								Login
							</Link>
						</div>
					}
				/>
			</div>
		</nav>
	);
}
