import { useState } from "react";

function AddProperty() {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        location: "",
        type: "",
        bedrooms: "",
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Property Added Successfully 💖");
    };

    return (
        <div className="add-container">
            <div className="glass-card">
                <h2 className="form-title">List Your Property</h2>

                <form onSubmit={handleSubmit} className="form-grid">
                    <div className="input-group">
                        <input
                            type="text"
                            name="title"
                            placeholder="Property Title"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <select name="type" onChange={handleChange} required>
                            <option value="">Select Type</option>
                            <option value="Sale">For Sale</option>
                            <option value="Rent">For Rent</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <input
                            type="number"
                            name="bedrooms"
                            placeholder="Bedrooms"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <textarea
                            name="description"
                            placeholder="Property Description"
                            rows="3"
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button className="aesthetic-btn">Publish Property</button>
                </form>
            </div>
        </div>
    );
}

export default AddProperty;