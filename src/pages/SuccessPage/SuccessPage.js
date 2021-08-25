import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import PageWrapper from '../../styledComponents/PageWrapper';
import DetailsTable from '../../components/DetailsTable/DetailsTable';
import ButtonLink from '../../styledComponents/ButtonLink';

import './SuccessPage.scss';
const imageList = [
  'https://cdn4.vectorstock.com/i/1000x1000/62/48/mission-complete-stamp-sign-seal-vector-16626248.jpg',
  'https://cdn1.vectorstock.com/i/1000x1000/24/65/complete-stamp-sign-seal-logo-vector-18772465.jpg',
  'https://cdn5.vectorstock.com/i/1000x1000/96/94/grunge-textured-complete-stamp-seal-vector-23329694.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC18w9wRB3CPMa1ncSx8JWrqgkHHyYXNLIdWl_OqfBEwugKzBW8yTmTrS6OMP7N3ZrIww&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1NWKzn4phXuJ6_oSCcpmJ_Tw1WU1fK1SKD5_Irk76g1a4BF-IO1HwcsJ4tyUgTUEkds&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxrUFC5Ioab7N4qodWf99y5wAbcgHG920LBpIcFAfvO9981UA1YATMpKdEqXsezukOKc&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YE2aQAFHtxMsJWS7dkEfyBX80KznDHCgODFjQ8wyScyktac3T-T-PUynOHBG0VU7_oM&usqp=CAU',
];

const random = Math.floor(Math.random() * imageList.length);
const SuccessPage = () => {
  return (
    <PageWrapper title='Success!'>
      <Container className='pb-2'>
        <Row className='text-center'>
          <Col xs={12}>
            <Image
              className='img-success'
              src={imageList[random]}
              roundedCircle
            />
          </Col>
          <Col xs={12}>
            <h1 className='text-secondary'>
              You have successfully completed the set
            </h1>
          </Col>
          <Col
            style={{ background: 'rgba(255,255,255,0.9)' }}
            xs={12}
            className='my-box'
          >
            <h1 className='text-primary'>DETAILS</h1>
            <DetailsTable />
          </Col>
          <ButtonLink to='/' className='mt-3' variant='secondary'>
            Choose Another set
          </ButtonLink>
        </Row>
      </Container>
    </PageWrapper>
  );
};
export default SuccessPage;
