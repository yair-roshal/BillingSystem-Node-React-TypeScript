 
 import axios from 'axios';
import { ClientForm } from './client-form';
import { IClient } from '../interfaces/IClient.interface';
import { initialData } from '../data/initialData';

export const CreateClient = () => {
  
  
  const onSubmit = (clientObject: IClient) => { 
    axios
      .post('http://localhost:4000/clients/create-client', clientObject)
      .then((res) => {
        if (res.status === 200) alert('Client successfully created');
        else Promise.reject();
      })
      .catch((err) => alert('Something went wrong'));
  };

   return (
    <ClientForm initialValues={initialData} onSubmit={onSubmit}>
      Create Client
    </ClientForm>
  );
};
