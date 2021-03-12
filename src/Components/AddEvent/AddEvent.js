import { useForm } from 'react-hook-form';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}

const AddEvent = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (e) => {
        // const formData = new FormData()
        // formData.append('file', file)
        // formData.append('email', loggedInUser.email)
        // formData.append('title', loggedInUser.title)
        // formData.append('name', loggedInUser.name)
        // formData.append('img', loggedInUser[0].img)
        // formData.append('description', loggedInUser.description)   
        // formData.append('price', loggedInUser.price)

        // console.log(loggedInUser,"this is all data");

        // fetch('http://localhost:5000/order', {
        //   method: 'POST',
        //   body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //   if(data){
        //     alert("data submitted") 
        //    }
        // })
        // .catch(error => {
        //   console.error(error)
        // })

        // history.push("/orderList"); 
        // e.preventDefault();

    }
    const handleBlur = (e) => {

    }
    const handleFileChange = (e) => {

    }
    return (
        <main className="order container-fluid row">

            <div className="row">

                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div style={containerStyle} className="col-md-8 p-4 pr-5 ml-5 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '670px' }}>

                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            
                        </div>

                        <input onBlur={handleBlur} type="email" name="title" placeholder="Event title" className="form-control" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger"><small>Event <title></title></small></span>}
                        <br />
                        <input onBlur={handleBlur} type="text" name="date" placeholder="Event Date" className="form-control" ref={register({ required: true })} />
                        {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                        <br />
                        <textarea onBlur={handleBlur} name="description" placeholder="Description" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                        {errors.projectDetails && <span className="text-danger"><small>Details is required</small></span>}
                        {/* <br />
                    <div className="row">

                        <div className="col">
                            <div className="custom-file ">
                                <input onChange={handleFileChange} type="file" className="custom-file-input" name="file" id="customFile" />
                                <label style={{ backgroundColor: '#1dd1a1' }} className="custom-file-label" htmlFor="customFile"> <FontAwesomeIcon className="mr-5" icon={faCloudUploadAlt} />Upload Project File</label>
                            </div>
                        </div>
                    </div> */}
                        <br />
                        <input type="submit" className="btn btn-dark pl-5 pr-5 px-4 py-2" value="Send" />
                    </form>
                </div>

            </div>
        </main >
    );
};

export default AddEvent;