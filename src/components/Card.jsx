import PropTypes from "prop-types";
import { StyledCard } from "./styles/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
	return (
		<StyledCard $layout={id % 2 === 0 && "row-reverse"}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>

			<div>
				<img src={`./images/${image}`} alt="" />
			</div>
		</StyledCard>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}),
};
export default Card;
