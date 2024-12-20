import React from "react"

export default function Nav({ login, register, logout, user, loading }) {
    return (
      <nav>
        <div className="logo">Frontend Simplified</div>
        <div className="nav__list">
          {loading ? (
            <div className="img__skeleton">
              <div className="skeleton link__skeleton"></div>
              <div className="skeleton link__skeleton--logout"></div>
            </div>
          ) : user ? (
            <button className="logout" onClick={logout}>
              E
            </button>
          ) : (
            <>
              <button className="nav__link login" onClick={login}>
                Login
              </button>
              <button className="nav__link register" onClick={register}>
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    );
  }
  