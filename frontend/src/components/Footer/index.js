

import './index.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-card">
                <div className="footer-logo-container">
                    <img
                        src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770663274/Frame_275_stlz5d.png"
                        alt="website log"
                    />
                    <h1 className="footer-logo-container-heading">Tasty Kitchens</h1>
                </div>
                <p className="footer-title">
                    The only thing we are serious about is food. Contact us on
                </p>

                <div className="footer-social-media-buttons">
                    <button type="button" className="footer-social-media-button">
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770663718/Frame_12_qwjhsk.png"
                            alt="pin"
                        />
                    </button>
                    <button type="button" className="footer-social-media-button">
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770663679/Frame_10_q7wgit.png"
                            alt="instagram"
                        />
                    </button>
                    <button type="button" className="footer-social-media-button">
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770663667/Frame_11_gasxoq.png"
                            alt="twitter"
                        />
                    </button>
                    <button type="button" className="footer-social-media-button">
                        <img
                            src="https://res.cloudinary.com/dokbp23jt/image/upload/v1770663648/Frame_13_e9abwh.png"
                            alt="facebook"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
