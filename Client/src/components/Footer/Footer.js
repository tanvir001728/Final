import React from "react"
import './Footer.css'

import { FacebookFilled, TwitterSquareFilled  } from "@ant-design/icons"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left footer">
        <footer className="footer-body">
            <div class="container-fluid bg-copyright">
                <div class="container">
                    <p class="copyright" style={{color: "#ffffff ! important"}}>
                        &copy; <a href="https://www.vivasoftltd.com/">Vivasoft</a> 2022 • All rights reserved.
                    </p>
                </div>
            </div>
            {/* <div className="row ">
                <span className="footer-row">
                    <FacebookFilled className="footer-icons"/>
                    <TwitterSquareFilled className="footer-icons"/>
                </span>
            </div> */}


        </footer>
    </div>


</footer>

export default Footer