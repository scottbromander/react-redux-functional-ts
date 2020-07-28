import React, { FunctionComponent } from 'react';

type WelcomeProps = {
  name: string;
  position: string;
  location?: string;
};

export const Welcome: FunctionComponent<WelcomeProps> = ({
  name,
  position,
  location,
}: WelcomeProps) => (
  <div>
    <h2>{name}</h2>
    {location ? (
      <p>
        {position} - {location}
      </p>
    ) : (
      <p>{position}</p>
    )}
  </div>
);
