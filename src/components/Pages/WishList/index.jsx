import React from 'react'
import './style.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const WishList = () => {
  const list = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <div className='div-img'>
        <h1>My Wishlist</h1>
      </div>

      {
        list.length ? <div>

          <div className='table-cart'>
            <TableContainer
              component={Paper}
              sx={{ height: "500px" }}
            >
              <Table aria-label="customized table" >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Product name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    list?.map((product, i) => (
                      <TableRow key={i}>
                        <TableCell><button style={{ all: "unset" }}
                          onClick={() => dispatch({ type: "REMOVEWISH", payload: product })}><ClearIcon /></button></TableCell>
                        <TableCell>
                          <img className='img-table' src={require(`../../../assets/images/products/${product.image}`)} alt='Product' />
                        </TableCell>
                        <TableCell>
                          {product.name}
                        </TableCell>
                        <TableCell>
                          {`$${product.price}.00`}
                        </TableCell>
                        <TableCell>
                          <div className='div-table'>

                            <p>{product.quantity}</p>

                          </div>
                        </TableCell>
                        <TableCell>{`$${product.price} .00`}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>

          </div>

        </div>
          :
          <div className='empty-card'>
            <SentimentVeryDissatisfiedIcon />
            <h1>There are no products in your wishlist</h1>
          </div>

      }

    </>
  )
}

export default WishList