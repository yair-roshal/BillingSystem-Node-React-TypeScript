import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import { dataNameTypes } from '../data/dataNameTypes';
import { initialData } from '../data/initialData';

interface Values {
    email: string;
}

export const ClientForm = (props: any) => {
    console.log('props ClientForm:>> ', props);
    console.log('props.initialValues ClientForm:>> ', props.initialValues);
    return (
        <>
            <Container maxWidth="sm">
                <Formik
                    {...props}
                    initialValues={props.initialValues}
                    validate={(values) => {
                        const errors: Partial<Values> = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                values.email,
                            )
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        props.onSubmit(values);
                    }}
                >
                    {({ submitForm }) => (
                        <Form>
                            {Object.entries(dataNameTypes).map(
                                (keyElem: any, index: number) => (
                                    <>
                                        <Field
                                            style={{
                                                margin: '10px',
                                                height: '50px',
                                            }}
                                            key={index}
                                            component={TextField}
                                            label={keyElem[0]}
                                            name={keyElem[0]}
                                            type={keyElem[1]}
                                        />
                                    </>
                                ),
                            )}

                            <Button
                                style={{
                                    margin: '10px',
                                    height: '55px',
                                    width: '210px',
                                }}
                                variant="contained"
                                color="primary"
                                onClick={submitForm}
                            >
                                {props.children}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    );
};
