import { useRef } from 'react';
import handleSubmit from 'handles/handlesubmit';

function AddDataSample() {

    // Handles adding data to the firestore using the submit handler
    const dataRef = useRef()
    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

    return (
        <div className="container-fluid">
            <form onSubmit={submithandler}>
                <input type= "text" ref={dataRef} />
                <button type = "submit">Save</button>
            </form>
        </div>
    );
}

export default AddDataSample;
