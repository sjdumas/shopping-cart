import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-grid">
				<div className="footer-brand">
					<Link to="/" className="copyright-link">
						&copy; {new Date().getFullYear()} Shopper's Delight
					</Link>
				</div>
				<div className="footer-socials">
					<a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faXTwitter} size="lg" />
					</a>
					<a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebook} size="lg" />
					</a>
					<a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faInstagram} size="lg" />
					</a>
					<a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTiktok} size="lg" />
					</a>
					<a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faYoutube} size="lg" />
					</a>
				</div>
				<div className="footer-links">
					<Link to="/privacy" className="footer-link">Privacy</Link>
					<Link to="/terms" className="footer-link">Terms</Link>
				</div>
			</div>
		</footer>
	);
};
