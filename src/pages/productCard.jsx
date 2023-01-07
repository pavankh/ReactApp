import Card from 'react-bootstrap/Card'
import Success from '../Assets/successmark.png'
import CardBottom from '../Assets/cardBottom.jpg'
const converter = require('number-to-words')

// Background color = #def6ff
// bottom bar color= #002a6f
// prev to bottom bar = #01b9f3
// balagy petro color = #090909
// manoj khadgi = #191919
//postpaid account = #191919
//order id & transaction id= #030303
// Bottom date = #848484
// complete background = #848484
// dotted line = #e3e3e3
const ProductCard = ({data}) => {
    const amount = `Rupees ${converter.toWords(data.amount)} Only`

    return(
        <div style={{ borderRadius: '10px', borderBottomColor: '#92a8d1' }}>
            <Card border='light' style={{ width: '20rem', height: '12rem', backgroundColor: '#def6ff', borderWidth: 'none', borderRadius: '5px' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: '500', marginTop: '1rem', fontFamily: 'arial' }} >Paid Successfully</Card.Title>
                    <Card.Title style={{ fontSize: '2.3rem', fontWeight: '700', marginTop: '1rem' }} >{`₹${data.amount}`} <span><img src={Success} className="successImg"></img></span></Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem', color: 'gray', marginTop: '1rem' }} >
                        <p className="capitalize">{amount.replaceAll('-', ' ')}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <img src={CardBottom} className='cardBottom' />
        </div>
    )
}
export default ProductCard