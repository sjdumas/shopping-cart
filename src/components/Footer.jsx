import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

export default function Footer() {
	return (
		<footer className="grid grid-cols-2 bg-neutral-900 text-neutral-50 py-4 px-6">
			<p>&copy; Copyright Vinyl Mania</p>
			<div className="socials flex gap-4 justify-end">
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faXTwitter} size="lg" />
				</a>
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faFacebook} size="lg" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagram} size="lg" />
				</a>
				<a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faTiktok} size="lg" />
				</a>
				<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faYoutube} size="lg" />
				</a>
			</div>
		</footer>
	);
};
