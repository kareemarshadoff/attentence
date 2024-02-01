import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import 'bootstrap/dist/css/bootstrap.min.css'

import './StaffFeedback.css';
import './nav.css'


const StaffFeedback = () => {
  const [ratings, setRatings] = useState({});
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedCommunication, setSelectedCommunication] = useState('');
  const [selectedAptitude, setSelectedAptitude] = useState('');
  

 

  const handleRatingChange = (staff, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [staff]: value }));
  };

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleCommunicationChange = (event) => {
    setSelectedCommunication(event.target.value);
  };

  const handleAptitudeChange = (event) => {
    setSelectedAptitude(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ratings:', ratings);
    console.log('Selected Domain:', selectedDomain);
    console.log('Selected Communication:', selectedCommunication);
    console.log('Selected Aptitude:', selectedAptitude);

    // Reset state after submission
    setRatings({});
    setSelectedDomain('');
    setSelectedCommunication('');
    setSelectedAptitude('');
  };

  

  return (
    <div>
      <div>
     
    </div>
    <div className={`feedback-container mt-3  `}>
      {/* ... (rest of the component) */}
      <h2>Trainer Ratings and Feedback</h2>
      {/* Ratings Form */}
      <form className="ratings-form" onSubmit={handleSubmit}>
        {/* Communication */}
        <div className="rating-item">
          <label className="staff-label">Communication:</label>
          <Rating
            count={5}
            value={ratings['Communication'] || 0}
            onChange={(value) => handleRatingChange('Communication', value)}
            size={24}
            activeColor="#ffd700"
            isHalf={false}
            emptyIcon={<i className="far fa-star" />}
            fullIcon={<i className="fas fa-star" />}
          />
          <select
            value={selectedCommunication}
            onChange={handleCommunicationChange}
            className="communication-selector"
            required
          >
            <option value="">Select Communication Staff</option>
            <option value="Communication 1">Communication 1</option>
            <option value="Communication 2">Communication 2</option>
            <option value="Communication 3">Communication 3</option>
            <option value="Communication 4">Communication 4</option>
          </select>
          <textarea
            className="feedback-textarea"
            placeholder={`Feedback about ${selectedCommunication} staff`}
            required
            rows="4"
          />
        </div>

        {/* Aptitude */}
        <div className="rating-item">
          <label className="staff-label">Aptitude:</label>
          <Rating
            count={5}
            value={ratings['Aptitude'] || 0}
            onChange={(value) => handleRatingChange('Aptitude', value)}
            size={24}
            activeColor="#ffd700"
            isHalf={false}
            emptyIcon={<i className="far fa-star" />}
            fullIcon={<i className="fas fa-star" />}
          />
          <select
            value={selectedAptitude}
            onChange={handleAptitudeChange}
            className="aptitude-selector"
            required
          >
            <option value="">Select Aptitude Staff</option>
            <option value="Aptitude 1">Aptitude 1</option>
            <option value="Aptitude 2">Aptitude 2</option>
            <option value="Aptitude 3">Aptitude 3</option>
            <option value="Aptitude 4">Aptitude 4</option>
          </select>
          <textarea
            className="feedback-textarea"
            placeholder={`Feedback about ${selectedAptitude} staff`}
            required
            rows="4"
          />
        </div>

        {/* Domain Selector */}
        <div className="rating-item">
          <label className="staff-label">Domain:</label>
          <Rating
            count={5}
            value={ratings['Aptitude'] || 0}
            onChange={(value) => handleRatingChange('Aptitude', value)}
            size={24}
            activeColor="#ffd700"
            isHalf={false}
            emptyIcon={<i className="far fa-star" />}
            fullIcon={<i className="fas fa-star" />}
          />
          <select
            value={selectedDomain}
            onChange={handleDomainChange}
            className="domain-selector"
            required
          >
            <option value="">Select Domain Staff</option>
            <option value="Domain1">Domain 1</option>
            <option value="Domain2">Domain 2</option>
            <option value="Domain3">Domain 3</option>
          </select>
          <textarea
            className="feedback-textarea"
            placeholder={`Feedback about ${selectedDomain} staff`}
            required
            rows="4"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-button">
          Submit Ratings and Feedback
        </button>
      </form>
    </div>
    </div>
  );
};

export default StaffFeedback;
