import Img2 from "../images/img2.png"
const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div className="d-flex justify-content-between">
                <img src={Img2} alt="..." /> 
                <a class="navbar-brand" href="/"> Marketing</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <p><a href="/"> Login</a> </p>

                </div>
            </div>
        </nav>
    )
}

export default NavBar