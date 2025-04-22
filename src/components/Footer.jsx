import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

export default function Footer() {
	return (
		<footer className="site-footer">
			<p>&copy; Shopper's Delight</p>
			<div className="socials">
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
		</footer>
	);
};
