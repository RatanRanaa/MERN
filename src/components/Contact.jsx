import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FiPhoneCall } from 'react-icons/fi'
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <>
        <Container style={{marginTop: '50px'}}>
            <Row>
                <Col md={6}>
                    <h1>Techinfo YT Pizza Shop</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, nobis modi cupiditate dolorum porro adipisci illum officia. At necessitatibus maxime sit odio fuga! Libero fugiat consequatur itaque tempore iste dicta delectus expedita similique alias error sequi nihil assumenda, laudantium nisi, est ipsam placeat obcaecati aut vitae quaerat quisquam autem odio illum. Quos sit odit a ipsa ab? Dolorem veritatis nesciunt corporis laudantium enim sed. Quam cupiditate illo ipsum, autem aut error, quia, quidem quasi amet corporis maxime. Aliquam magni ut dolore aut quae tempore fugit voluptatem ipsam sapiente quisquam nostrum necessitatibus iusto iste rem, labore saepe minima dolorum voluptate veniam eveniet perferendis. Ut sunt debitis nisi dolor sapiente? Minus, adipisci maxime sapiente error facilis dolorem? Eos nisi animi unde error quam numquam non facilis suscipit. Facere assumenda similique reiciendis sed iusto impedit quis laborum, dicta accusamus non quia recusandae at. Nesciunt maiores ea rem laudantium vel autem modi non magnam? Rerum eaque iure laudantium quod, excepturi sint culpa id nemo ipsa vitae consequatur veniam aliquid natus commodi officiis tenetur. Inventore rem consectetur reprehenderit a quam omnis suscipit vero, qui placeat? Perspiciatis blanditiis consequuntur consequatur sint doloribus illo dignissimos, nam quis. Dolorum voluptatibus sunt minima vero cumque quas corrupti aspernatur dolores.</p>
                    <table striped bordered hover class="table table-striped text-center">
                      <thead>
                        <tr>
                          <th className='bg-warning text-center' scope="col" colSpan={6}>Contact Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><FiPhoneCall /></th>
                          <td></td>
                          <td>Phone</td>
                          <td>0123-456789</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th scope="row"><ImMobile /></th>
                          <td></td>
                          <td>Call</td>
                          <td>0123456789</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <th scope="row"><AiOutlineMail /></th>
                          <td></td>
                          <td>Email</td>
                          <td>Help@urdomain.com</td>
                        </tr>
                      </tbody>
                    </table>
                </Col>
                <Col md={6}>
                <Image src='/images/farmhouse.jpg'
                style={{ width: '100%', height: '60%' }}
                />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact