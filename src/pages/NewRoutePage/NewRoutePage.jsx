import { React, useState, useRef, useEffect } from "react";

export default function NewRoutePage( props ) {

    const [invalidForm, setValidForm] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        grade: "",
        description: ""
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddRoute(formData);
        setFormData({
            name: "",
            grade: "",
            description: ""
        });
    };

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    return (
        <>
          <h1>Add Puppy</h1>
          <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Route Name</label>
              <input
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Route's Grade</label>
              <input
                className="form-control"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Describe It</label>
              <input
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn" disabled={invalidForm}>
              Add Route
            </button>
          </form>
        </>
    );
    
}