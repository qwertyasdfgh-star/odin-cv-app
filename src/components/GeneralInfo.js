import React, { useRef } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ data, onUpdate, placeholders }) => {
  const fileInputRef = useRef(null);

  const handleChange = (field, value) => {
    onUpdate({ ...data, [field]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate({ ...data, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="section">
      <h2>Personal Information</h2>
      
      <div className="profile-image-container">
        <div 
          className="profile-image" 
          onClick={handleImageClick}
          style={{ backgroundImage: `url(${data.image})` }}
        >
          {!data.image && <i className="fas fa-user"></i>}
          <div className="image-overlay">
            <i className="fas fa-camera"></i>
            <span>Change Photo</span>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={data.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder={placeholders.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={data.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder={placeholders.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={data.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder={placeholders.phone}
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={data.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder={placeholders.location}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Professional Summary</label>
        <textarea
          id="description"
          value={data.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder={placeholders.description}
          rows="4"
        />
      </div>
    </div>
  );
};

export default GeneralInfo;