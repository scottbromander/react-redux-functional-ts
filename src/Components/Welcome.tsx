import React, { FunctionComponent, MouseEvent, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

// type WelcomeProps = {
//   name: string;
//   position: string;
//   location?: string;
// };

export function Welcome({
  name,
  position,
  location,
  children,
}: InferProps<typeof Welcome.propTypes>) {
  const [upvote, setUpvote] = useState(0);

  const onButtonClick = (event: MouseEvent) => {
    setUpvote(upvote + 1);
  };

  return (
    <div>
      <h2>{name}</h2>
      {location ? (
        <p>
          {position} - {location}
        </p>
      ) : (
        <p>{position}</p>
      )}
      <button onClick={onButtonClick}>Upvote: {upvote}</button>
      {children}
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Welcome.defaultProps = {
  location: 'Online',
};
