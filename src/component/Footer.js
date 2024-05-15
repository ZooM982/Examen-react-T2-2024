import Img2 from "../images/img2.png"
const Footer = () => {

 return (
    <div id="footer" className="container">
        <div className="row">
            <div className="col-md-2 mx-auto">
                <div className="d-flex justify-content-between">
                <img src={Img2} alt="..." /> 
                <h3>Marketing</h3>
                </div>
                <p>Nam posuere accumsan porta. Integer id tincidunt si tamet sed libero </p>
                <p> &copy; Haurky roll Theme 2024</p>
            </div>
            <div className="col-md-2 mx-auto">
                <h2>COMPANY</h2>
                <p> <a href="/"> Donec dignissim </a></p>
                <p> <a href="/">Curabitur egestas </a></p>
                <p> <a href="/">Nam posuere </a></p>
                <p> <a href="/">Aenean facillis</a> </p>
            </div>
            <div className="col-md-2 mx-auto">
            <h2>SERVICES</h2>
                <p> <a href="/">Cras convallis</a></p>
                <p> <a href="/"> vestibulum faucibus</a> </p>
                <p> <a href="/"> Quisque lacinia purus</a></p>
                <p> <a href="/"> Aliquam nec ex</a></p>
            </div>
            <div className="col-md-2 mx-auto">
            <h2>RESSOURCES</h2>
                <p> <a href="/">Suspendiss pottitor</a></p>
                <p> <a href="/">Nam posuere</a> </p>
                <p> <a href="/">Curabitur egestas</a></p>
            </div>
            <div className="col-md-2 mx-auto">
                <div className="social-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-instagram"></i>
                </div>
                <select >
                    <option >Englais</option>
                    <option >Francais</option>
                    <option >Wolof</option>
                </select>
            </div>
        </div>
    </div>
 )
}

export default Footer