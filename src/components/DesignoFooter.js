export default function DesignoFooter(){
    return (
        <div className="designo-footer">   
            <div className="footers">
                <div className="nav-logo">
                        <img src="/images/Oval (11).svg" alt=""/>
                        <img src="/images/designo3.svg" alt="" className="logo"/>
                </div>
                <div className="designo-footer-intro">
                        <h3 className="footer-item">OUR COMPANY</h3>
                        <h3 className="footer-item">LOCATIONS</h3>
                        <h3 className="footer-item items">CONTACT</h3>
                </div>
            </div>
              <hr className="hr"/>

              <div className="ul-footer">
                    <div className="fot-1">
                        <p className="fot-text">Designo Central Offic</p>
                        <p className="fot-text">3886 Wellington StreetToronto</p>
                        <p className="fot-text">Ontario M9C 3J5</p>
                    </div>
               
                    <div className="fot-2">
                        <p className="fot-text">Contact Us (Central Office)</p>
                        <p className="fot-text">P : +1 253-863-8967</p>
                        <p className="fot-text">M : contact@designo.co</p>
                    </div>
                    <div className="fot-3">
                        <img src="/images/icon1.svg" className="fot-icon" alt=""/>
                        <img src="/images/icon2.svg" className="fot-icon" alt=""/>
                        <img src="/images/icon3.svg" className="fot-icon" alt=""/>
                        <img src="/images/icon4.svg" className="fot-icon" alt=""/>
                        <img src="/images/icon53.svg" className="fot-icon" alt=""/>
                    </div>
              </div>
        </div>
    );
}