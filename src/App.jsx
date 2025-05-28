
import './App.css'
import './bootstrap.min.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("")
  console.log(preview);

  const [details, setDetails] = useState(
    {
      name: "",
      age: "",
      phone: "",
      email: "",
      dob: "",
      profilepic: ""
    }
  )
  console.log(details);


  const handleClose = () => {
    handleCancel()
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    setDetails({
      name: "",
      age: "",
      phone: "",
      email: "",
      dob: "",
      profilepic: ""

    })
    setPreview("")
  }

  const handleFile = (e) => {
    console.log(e);
    setDetails({ ...details, profilepic: e.target.files[0] })


  }

  const handleSubmit = () => {
    const { name, age,
      phone,
      email,
      dob,
      profilepic } = details

      
  }
  useEffect(() => {
    if (details.profilepic) {
      setPreview(URL.createObjectURL(details.profilepic))
    }

  }, [details.profilepic])



  return (
    <>
      <div className='container-fluid'>
        <div className="row  ">
          <div className="col-md-4"></div>
          <div className="col-md-4   d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <button onClick={handleShow} className='btn btn-primary px-5 py-4 shadow rounded-0 ' style={{ fontWeight: "bold" }}>
              click here
            </button>

            {/* modal */}
            <Modal show={show} onHide={handleClose} size='lg' centered>
              <Modal.Header closeButton>
                <Modal.Title >Add Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='text-center'>
                  <label htmlFor="details">
                    <input type="file" id='details' onChange={(e) => handleFile(e)} style={{ display: "none" }} />
                    <img src={preview ? preview : "https://cdn3.iconfinder.com/data/icons/flat-rounded-7/50/617-1024.png"} alt="" className='w-50' />
                  </label>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <input type="text" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className='mt-lg-3 mt-2 rounded-0 form-control w-75 ' placeholder='Name' />
                  <input type="text" value={details.age} onChange={(e) => setDetails({ ...details, age: e.target.value })} className='mt-lg-3 mt-2 rounded-0 form-control w-75 ' placeholder='Age' />
                  <input type="text" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} className='mt-lg-3 mt-2 rounded-0 form-control w-75 ' placeholder='Phone Number' />
                  <input type="date" value={details.dob} onChange={(e) => setDetails({ ...details, dob: e.target.value })} className='mt-lg-4 mt-2 rounded-0 form-control w-75 ' placeholder='Date of Birth' />
                  <input type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} className='mt-lg-4 mt-2 rounded-0 form-control w-75 ' placeholder='Email id' />
                </div>
              </Modal.Body>
              <Modal.Footer className='d-flex justify-content-center gap-5 '>
                <Button variant="primary rounded-0 px-lg-5 " onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="secondary rounded-0 px-lg-5" onClick={handleCancel}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

    </>
  )
}

export default App
