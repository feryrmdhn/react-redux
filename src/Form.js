import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { postData } from "./store/actions/app";


const FormTest = ({ postData }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        age: 0,
        nama: '',
        status: false
    })

    const change = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await postData(data)
        setLoading(false)
    }

    return (
        <>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" onChange={change} value={data.age} placeholder="Umur" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" name="nama" onChange={change} value={data.nama} placeholder="Nama" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" name="status" onChange={change} value={data.status} placeholder="Status" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {loading ? "Loading..." : "Submit"}
                </Button>
            </Form>
        </>
    )
}

const mapDispacthToProps = (dispatch) => {
    return {
        postData: (data) => dispatch(postData(data))
    };

};
export default connect(
    //There is no  mapStateToProps = null
    null,
    mapDispacthToProps
)(FormTest);