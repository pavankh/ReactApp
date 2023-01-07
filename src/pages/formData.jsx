import { useState } from 'react'

import FormInput from './formInput'
import '../styles/form-data.styles.scss'
import DateTimePicker from 'react-datetime-picker'

const defaultFormFields = {
    to: "Balaji Petroleum",
    from: "MANAJ RAMESHRAO KHADGI",
    // from: "Balaji Petroleum",

    amount: "450",
    orderId: "202212092038450083",
    transactionId: "15212095664265084929",
}

const FormData = ({ toggleReceipt }) => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { to, from, amount, orderId, transactionId, dateStr } = formFields
    const [value, onDateChange] = useState(new Date());


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = () => {
        try {
            resetFormFields()
            toggleReceipt({
                ...formFields,
                "dateStr": value
            })
        } catch (e) {
            console.log("Error::", e);

        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }
    // const handleDateChange = (event) => {
    //     console.log('Date str:-', event.target);

    //     const { name, value } = event.target;

    //     setFormFields({
    //         ...formFields,
    //         [name]: value
    //     })
    // }

    return (
        <div className="form-data-container">
            <h3>Welcome to Receipts section</h3>
            <form onSubmit={handleSubmit} >
                <FormInput
                    label="To:"
                    type="text"
                    onChange={handleChange}
                    name="to"
                    value={to}
                />
                <FormInput
                    label="From:"
                    type="text"
                    onChange={handleChange}
                    name="from"
                    value={from}
                />
                <FormInput
                    label="Amount:"
                    type="text"
                    onChange={handleChange}
                    name="amount"
                    value={amount}
                />
                <FormInput
                    label="Order Id:"
                    type="text"
                    onChange={handleChange}
                    name="orderId"
                    value={orderId}
                />
                <FormInput
                    label="Transaction Id:"
                    type="text"
                    onChange={handleChange}
                    name="transactionId"
                    value={transactionId}
                />
                {/* <FormInput
                    label="Select Date:"
                    type="date"
                    onChange={handleDateChange}
                    name="dateStr"
                    value={dateStr}
                /> */}
                <DateTimePicker onChange={onDateChange} value={value} />
<br />
<br />
                <div className="buttons-container">
                    <button type="submit" onClick={handleSubmit}>PayTm</button>
                    <button type="button" onClick={handleSubmit}>GPay</button>

                </div>
            </form>
        </div>
    )
}
export default FormData