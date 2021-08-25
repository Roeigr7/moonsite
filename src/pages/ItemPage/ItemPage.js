import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import Spinner from '../../styledComponents/Spinner';
import PageWrapper from '../../styledComponents/PageWrapper';
import './ItemPage.scss';
import Popup from '../../components/Modals/Popup';
import Error from '../../components/Error';

import { useObserver } from 'mobx-react';
const ItemPage = ({ title, type }) => {
  const { data, loading, error } = useFetch(type);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState({
    id: '',
    name: '',
    brand: '',
    color: false,
    size: '',
  });
  useEffect(() => {
    setFilteredData(data || []);
  }, [data]);
  const handleActiveBtn = (itemId, value, property) => {
    return (
      itemId === selectedItem.id && selectedItem[property] === value && 'active'
    );
  };
  const handleOpenModal = (selectedSize) => {
    setSelectedItem({ ...selectedItem, size: selectedSize });
    setShowModal(true);
  };
  const handleSearch = (e) => {
    const term = e.target.value;
    const tempArr = [];
    setSearch(term);

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name.toString().toLowerCase().includes(term) ||
        data[i].brand.toString().toLowerCase().includes(term)
      ) {
        tempArr.push(data[i]);
      } else {
        for (let j = 0; j < data[i].colors.length; j++) {
          if (data[i].colors[j].toString().toLowerCase().includes(term)) {
            tempArr.push(data[i]);
            break;
          } else if (j === data[i].colors.length - 1) {
            for (let k = 0; k < data[i].sizes.length; k++) {
              if (data[i].sizes[k].toString().toLowerCase().includes(term)) {
                tempArr.push(data[i]);
                break;
              }
            }
          }
        }
      }
    }
    if (term.length < 2) return setFilteredData(tempArr.slice(0, 5));
    setFilteredData(tempArr);
  };

  return useObserver(() => (
    <PageWrapper type={type} title={title}>
      {loading && <Spinner />}
      {error && <Error error={error} />}
      {!loading && !error && (
        <>
          <Row className='justify-content-center'>
            <Col xs={12} className='text-center'>
              <h3>
                <span>{data && data.length}</span> items were found
              </h3>
            </Col>
            <Col md={6} className='text-center'>
              <Form.Group className='mb-3'>
                <Form.Label>Search {type}</Form.Label>
                <Form.Control
                  onChange={handleSearch}
                  value={search}
                  type='text'
                  placeholder='search...'
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {data &&
              filteredData.map((item) => (
                <Col key={item.id} className='pb-3' xs={12} sm={6} lg={4}>
                  <Card
                    style={{
                      textAlign: 'center',
                      minHeight: '100%',
                    }}
                  >
                    <Card.Body>
                      <Card.Title className='card-title'>
                        {item.name}
                      </Card.Title>

                      <p className='brand-title'>
                        <span> Brand: </span>
                        {item.brand}
                      </p>

                      <div className='colors-container'>
                        {item.colors.map((color, idx) => (
                          <div key={idx}>
                            <Button
                              onClick={() =>
                                setSelectedItem({
                                  ...selectedItem,
                                  color: color,
                                  type: item.type,
                                  id: item.id,
                                  brand: item.brand,
                                  name: item.name,
                                })
                              }
                              variant='outline-secondary'
                              className={handleActiveBtn(
                                item.id,
                                color,
                                'color'
                              )}
                              style={{
                                color: color,
                                minWidth: '80px',
                                margin: '0px 5px',
                              }}
                            >
                              {color}
                            </Button>
                          </div>
                        ))}
                      </div>

                      {item.id === selectedItem.id && (
                        <>
                          <p className='brand-title'>
                            <span> Choose size: </span>
                          </p>

                          <div className='sizes-container'>
                            {item.sizes.map((size, idx) => (
                              <div key={idx}>
                                <Button
                                  onClick={() => handleOpenModal(size)}
                                  variant='outline-secondary'
                                  className={handleActiveBtn(
                                    item.id,
                                    size,
                                    'size'
                                  )}
                                  style={{
                                    minWidth: '80px',
                                    margin: '0px 5px',
                                  }}
                                >
                                  {size}
                                </Button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          <Popup
            show={showModal}
            setShow={setShowModal}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </>
      )}
    </PageWrapper>
  ));
};
export default ItemPage;
