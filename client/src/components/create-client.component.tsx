 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClientForm } from './client-form';
import { IClient } from '../interfaces/IClient.interface';

export const CreateClient = () => {
  const [formValues, setFormValues] = useState({
    customer_id: 'number',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    gender: 'string',
    country: 'string',
    city: 'string',
    street: 'string',
    phone: 'number',
    total_price: 'number',
    currency: 'string',
    cerdit_card_type: 'string',
    cerdit_card_number: 'number',
  });

  //   export class ArticlesService {
  // 	async getArticles({
  // 	  category,
  // 	  page,
  // 	}: {
  // 	  category: number;
  // 	  page: number;
  // 	}): Promise<Array<IArticleItem>> {
  // 	  try {

  //   const one = new Promise<string>((resolve, reject) => {
  // Promise<Array<IArticleItem>>

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
    <ClientForm initialValues={formValues} onSubmit={onSubmit}>
      Create Client
    </ClientForm>
  );
};
