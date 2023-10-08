
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContext: FC = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          border: '#713200',  
          color: 'black',
        },
        success: {
          iconTheme: {
            primary: 'lightblue',
            secondary: 'black',
          },
          style: {
            color: '#4D7EB3' 
          }
        },
        
      }}
    />
  );
};

export default ToasterContext;
