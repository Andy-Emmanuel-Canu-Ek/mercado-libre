import React, { ReactElement } from 'react';
import Text from 'components/atoms/Text';

const Loading = (): ReactElement => {
  return (
    <div className="flex items-center justify-center h-screen w-scren">
      <div className="w-16 h-16 border-b-2 border-blue-color rounded-full animate-spin" />
      <Text text="Cargando..." size="16px" className="text-gray-color ml-4" />
    </div>
  );
};

export default Loading;
