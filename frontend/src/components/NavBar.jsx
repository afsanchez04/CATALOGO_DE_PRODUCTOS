import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const NavBar = () => {

  const { user, logout } = useAuth()

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {
                user ? (
                  <>
                    <li class="nav-item">
                      <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li class="nav-item">
                      <button className="nav-link" onClick={logout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li class="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                  </>
                )
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
