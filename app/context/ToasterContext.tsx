
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContext: FC = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          border: '#713200',  // Added "1px solid" as it was missing in your code
          color: 'dodgerblue',
        },
        success: {
          iconTheme: {
            primary: 'lightblue',
            secondary: 'black',
          },
          style: {
            color: '#4D7EB3' // This color is in between lightblue and blue
          }
        },
        
      }}
    />
  );
};

export default ToasterContext;
