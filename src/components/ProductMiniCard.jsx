import PropTypes from "prop-types";

export default function ProductMiniCard({ product }) {
	return (
		<div className="bg-white rounded-sm p-6 flex flex-col items-center text-center">
			<img
				src={product.image}
				alt={product.title}
				className="w-32 h-32 object-cover rounded-full mb-4"
			/>
			<h3 className="text-lg font-semibold text-neutral-800 mb-1">{product.title}</h3>
			<p className="text-sm text-neutral-600">{product.description.slice(0, 125)}...</p>
		</div>
	);
};

ProductMiniCard.propTypes = {
	product: PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
};
