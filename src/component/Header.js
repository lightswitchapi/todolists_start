import { useAuth } from "../hooks/useAuth";

const Header = () => {
  let auth = useAuth();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Todo Lists - Sample App
        </a>
        {auth.validateToken() && (
          <a
            href="#"
            onClick={auth.logout}
            className="btn btn-secondary my-2 my-sm-0"
            type="submit"
          >
            Logout
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
