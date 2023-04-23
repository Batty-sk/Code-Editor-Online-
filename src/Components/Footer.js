import './Footer.css'
function Footer()
{
    return (

        <footer>
                <div className="container-fluid mt-5 p-3">
                        <div className="row justify-content-between">
                            <div className="col-3 org-name">
                                <div>
                                <h3>Sheesh Code Editor</h3>
                                <i>@Challenge Everything.</i>
                                </div>
                            </div>

                            <div className="col-auto text-center">

                            <h4>Follow us</h4>
                                <ul className="d-flex f-socials justify-content-center">
                                    
                                    <li><i class='bx bxl-facebook-circle'></i></li>
                                    <li><i class='bx bxl-twitter' ></i></li>
                                    <li><i class='bx bxl-discord-alt' ></i></li>
                                </ul>
                            
                            <h6>@Copyrighted by sk Artworks.</h6>
                            </div>
                        </div>
                </div>
        </footer>
    )
}

export default Footer