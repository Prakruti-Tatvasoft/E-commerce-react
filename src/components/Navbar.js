import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    const total = useSelector(state => state.cart)
    const { user } = useSelector(state => state.member)
    return (
        <>
        { user && <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/home">Home</Link>
                    <Link className="nav-item nav-link" to="/cart">Cart</Link>
                    <Link className="nav-item nav-link" aria-disabled>total { total.length }</Link>
                    <Link className="nav-item nav-link" to='/logout'>Logout</Link>
                </div>
            </div>
        </nav>
    }
    </>
    )
}

export default Navbar
