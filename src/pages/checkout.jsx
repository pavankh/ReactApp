import '../styles/checkout.styles.scss'
import ProductCard from './productCard'
import Pump from '../Assets/Pump.png'
import DP from '../Assets/dp-img.png'
import Topbar from '../Assets/topBar.jpg'
import BottomCut from '../Assets/bottomCut.jpg'
import Logo from '../Assets/Logo.png'
import moment from 'moment'


const Checkout = ({ formFields }) => {

    const currentDate = moment(formFields.dateStr).format('hh:MM A, DD MMM YYYY');

    return (
        <div className="checkout-container">
            <img src={Logo} className="logo"></img>
            <ProductCard data={formFields} />
            <br />
            <img src={Topbar} className='separator'></img>
            <div style={{ width: '19rem', backgroundColor: 'white'}}>
                <div className="checkout-header">
                    <label className="labelStyle">{`To: ${formFields.to}`}</label>
                    <img src={Pump} className='pumpImg1' />
                </div>
                <label style={{ borderBottom: '2px dotted lightGray', padding: '2px', width: '19vw', height: '1px' }} />

                <div className="checkout-header">
                    <label className="labelStyle">{`From: ${formFields.from}`}</label>
                    <img src={DP} className="dpImg"></img>
                </div>
                <div className="checkout-header">
                    <label className="left">Paytm Postpaid A/c</label>

                </div>
                <br ></br>
                <div className="checkout-header">
                    <label className="left">{`Order ID: ${formFields.orderId}`}</label>

                </div>
                <div className="checkout-header">
                    <label className="left">{`Transaction ID: ${formFields.transactionId}`}</label>

                </div>

                <div className="checkout-header">
                    <label className="leftDate">{currentDate}</label>

                </div>
                <br />
                <img src={BottomCut} className='bottom-cut'></img>

            </div>
        </div>
    )
}

export default Checkout;