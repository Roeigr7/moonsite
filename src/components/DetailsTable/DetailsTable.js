import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useClothesStore } from '../../Mobx/ClothesContext';
import { convertDateDifference } from '../../hooks/helpers';
import { toJS } from 'mobx';
const DetailsTable = () => {
  const { shirt, pants, shoes, props, resetStore } = useClothesStore();
  const sumPantsAndSize = pants.size + shoes.size;
  const timeTaken = convertDateDifference(props.diffTime);
  console.log(toJS(props));

  useEffect(() => {
    resetStore();
  });

  return (
    <>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>/</th>
            <th>Shirt</th>
            <th>Pants</th>
            <th>Shoes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Name</td>
            <td>{shirt.name}</td>
            <td>{pants.name}</td>
            <td>{shoes.name}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Brand</td>
            <td>{shirt.brand}</td>
            <td>{pants.brand}</td>
            <td>{shoes.brand}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Color</td>
            <td>{shirt.color}</td>
            <td>{pants.color}</td>
            <td>{shoes.color}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold' }}>Size</td>
            <td>{shirt.size}</td>
            <td>{pants.size}</td>
            <td>{shoes.size}</td>
          </tr>
        </tbody>
      </Table>
      <div className='d-flex flex-column align-items-start'>
        <p style={{ fontWeight: 'bold' }}>
          Sum of pants and shoes:{' '}
          <span className='text-secondary'> {sumPantsAndSize}</span>
        </p>
        <p style={{ fontWeight: 'bold' }}>
          The time it took you to complete:{' '}
          <span className='text-secondary'>{timeTaken}</span>
        </p>
      </div>
    </>
  );
};
export default DetailsTable;
