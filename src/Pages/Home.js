import './Home.css'
function Home()
{
    return(
        <div id="main" className='mt-5'>
        <div className="container-fluid">
            <div className="row justify-content-center">
                    <div className="col-8 text-start p-0" id="code-area">

                        <div className="row br m-0 p-0" id='section-c'>
                            <div className="col-auto p-0">
                                <div className='d-flex p-3'>
                                    
                                        <span className='align-self-center'>
                                        <i class='bx bx-code-block'></i>
                                        </span>
                                        <h3 className='align-self-center ps-2 pt-2'>Code</h3>
                                </div>
                            </div>

                            <div className="col-4 p-0">
                                        <ul id='Themes' className='d-flex h-100 '>
                                            <li id='red-color'></li>
                                            <li id='black-color'></li>
                                            <li id='purple-color'></li>
                                        </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-3 br p-0" id="output-area">

                        <div id="section-t" className='d-flex br p-3'>
                            <span>
                                 <i class='bx bx-terminal' ></i>
                            </span>
                            <h3 className='align-self-center ps-2 pt-2'>Ouput</h3>
                        </div>


                    </div>
            </div>
        </div>
        </div>
    )
}
export default Home