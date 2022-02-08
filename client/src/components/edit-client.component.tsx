import { useState, useEffect } from 'react';
import axios from 'axios';
import { ClientForm } from './client-form';
import { IClient } from '../interfaces/IClient.interface';
import { initialDataClean } from '../data/initialDataClean';

export const EditClient = (props: any) => {
    const [formValues, setFormValues] = useState(initialDataClean);

    const onSubmit = (clientObject: IClient) => {
        axios
            .put(
                'http://localhost:4000/clients/update-client/' +
                    props.match.params.id,
                clientObject,
            )
            .then((res) => {
                if (res.status === 200) {
                    alert('Client successfully updated');
                    props.history.push('/client-list');
                } else Promise.reject();
            })
            .catch((err) => alert('Something went wrong'));
    };

    useEffect(() => {
        axios
            .get(
                'http://localhost:4000/clients/update-client/' +
                    props.match.params.id,
            )
            .then((res) => {
                setFormValues({ ...res.data });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <ClientForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Update Client
        </ClientForm>
    );
};
