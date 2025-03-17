import { FC } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  const fullStarElements = Array(fullStars)
    .fill(null)
    .map((_, index) => <FaStar key={`star-${index}`} />);

  let halfStarElement = null;

  if (decimalPart > 0) {
    halfStarElement = <FaStarHalf key="half-star" />;
  }

  return (
    <>
      {fullStarElements} {halfStarElement}
    </>
  );
};

export default Rating;
