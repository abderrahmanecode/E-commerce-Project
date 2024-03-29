import React, { useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Row , Col , Image , ListGroup, Button , Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


function ProductScreen({match}) 
{
    const [product,setProduct]=useState([])

    useEffect(() => {
        async function fetchProduct(){
            const {data}=await axios.get('/api/products/${match.params.id}')
            setProduct(data)
        }
        fetchProduct()
    }, [])


   // const product=products.find((prod)=>prod._id===match.params.id)
    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Retour</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews}étoile`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price:${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                      
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Statut:</Col>
                                    <Col>
                                        <strong>${product.countInStock>0?'Disponible en stock': 'Rupture de stock'}</strong>
                                      
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock===0} type='button'>Ajouter</Button>

                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
