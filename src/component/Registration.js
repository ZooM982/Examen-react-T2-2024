import Img1 from "../images/img1.png"
const Registration = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 registation-body">
                    <h3>Create Your Account</h3>
                    <div className="social-btn d-flex justify-content-between">
                        <button className="btn btn-facebook d-flex justify-content-around">
                        <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/000000/facebook-f--v1.png" alt="facebook-f--v1"/>
                            <p>FACEBOOK</p>
                        </button>
                        <button className="btn btn-twitter d-flex justify-content-around">
                        <img width="20" height="20" src="https://img.icons8.com/android/20/000000/twitter.png" alt="twitter"/>
                            <p>TWITTER</p>
                        </button>
                        <button className="btn btn-google d-flex justify-content-around">
                        <img width="20" height="20" src="https://img.icons8.com/material/20/000000/google.png" alt="google"/>
                            <p>GOOGLE</p>
                        </button>
                    </div>
                    <p className="register"> or register with email</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="nameInp" aria-describedby="emailHelp" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="emailInp" aria-describedby="emailHelp" placeholder="email" />
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <input type="password" className="form-control w-30" id="PasswordInp" placeholder="Password" />
                            <input type="password" className="form-control w-30" id="RpasswordInp" placeholder="Repeate password" />
                        </div>
                        <div>
                            <div class="mb-3 form-check d-flex justify-content-between">
                                <input type="checkbox" class="form-check-input" id="btncheck" />
                                <label class="form-check-label" for="exampleCheck1">i have read and accept the Terms of <a href="/">Service & Privacy Policy</a> </label>
                                <button type="submit" className="btn btn-continu">Continue </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 illustrator-body">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>consectetur adipsicing elit.Suspenfisse sed urna in justo eyismod condimentum</p>
                    <img src={Img1} alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Registration