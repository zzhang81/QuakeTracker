import React from 'react';


type StartUpProps = {
  config: ProjectConfigType
};

const StartUp: React.FC<StartUpProps> = (props) => {
  return <div className="p-8">
    Hello Project Start Page
  </div>;
};

export default StartUp;