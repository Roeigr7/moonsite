import React from 'react';
import './HomePage.css';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import PageWrapper from '../../styledComponents/PageWrapper';
import ButtonLink from '../../styledComponents/ButtonLink';
import Toast from '../../components/Modals/Toast';
import { useClothesStore } from '../../Mobx/ClothesContext';
import { useObserver } from 'mobx-react';
import logo from '../../assets/logo.png';
const HomePage = () => {
  const { shirt, pants, shoes, props, handleCompletedSet } = useClothesStore();
  const checkShirt = Object.keys(shirt).length !== 0;
  const checkPants = Object.keys(pants).length !== 0;
  const checkShoes = Object.keys(shoes).length !== 0;

  return useObserver(() => (
    <PageWrapper title=''>
      <Toast />

      <img className='logo' src={logo} alt='logo' />
      <Container className='p-2 p-sm-2'>
        {props.time}
        <Row className='align-items-center justify-content-center text-center'>
          <Col className='my-box p-2' lg={6} sm={8} xs={12}>
            <h5 style={{ margin: 0 }}>
              Completed Sets: <span>{props.completedSets} </span>
            </h5>
          </Col>
          <div className='my-box m-3 p-2'>
            <Col
              xs={12}
              className='p-2 d-flex flex-column justify-content-center align-items-center'
            >
              <p className='h5'>
                completed: {props.itemsCnt} of 3 items to Complete another set
              </p>
              <div className='d-flex p-2'>
                <p className='h5 text-primary'>
                  shirt:{' '}
                  {checkShirt ? (
                    <CheckCircle color='royalblue' size={24} />
                  ) : (
                    <XCircle color='red' size={24} />
                  )}
                </p>
                <p className='h5 px-5 text-primary'>
                  Pants:{' '}
                  {checkPants ? (
                    <CheckCircle color='royalblue' size={24} />
                  ) : (
                    <XCircle color='red' size={24} />
                  )}
                </p>
                <p className='h5 text-primary'>
                  Shoes:{' '}
                  {checkShoes ? (
                    <CheckCircle color='royalblue' size={24} />
                  ) : (
                    <XCircle color='red' size={24} />
                  )}
                </p>
              </div>
            </Col>
            <Col xs={12} className='choose-btn-container p-2'>
              <ButtonLink size='lg' to='/shirt'>
                Choose Shirt
              </ButtonLink>
              <ButtonLink size='lg' className='choose-btn' to='/pants'>
                Choose Pants
              </ButtonLink>
              <ButtonLink size='lg' to='/shoes'>
                Choose Shoes
              </ButtonLink>
            </Col>
            <Col className='pt-4 pb-3 d-grid complete-btn' xs={12} lg={6}>
              <ButtonLink
                onClick={handleCompletedSet}
                disabled={props.itemsCnt === 3 ? false : true}
                variant='secondary'
                size='lg'
                to='/success'
              >
                Complete Set!
              </ButtonLink>
            </Col>
          </div>
        </Row>
      </Container>
    </PageWrapper>
  ));
};
export default HomePage;
