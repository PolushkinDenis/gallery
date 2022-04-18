import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  
  console.log(data)
  return (
    <>
      {data && (
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={data.url} />
          <Card.Body>
            <Card.Title>Информация о картинке №{data.id}</Card.Title>
            <Card.Text>
              {data.title}
            </Card.Text>
            <Card.Text>
              Ссылка на картинку: {data.url}
            </Card.Text>
            <Button variant="primary" onClick={() => navigate(-1)}>Назад</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Details;
