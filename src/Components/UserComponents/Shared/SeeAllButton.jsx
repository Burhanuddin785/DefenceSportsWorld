import React from 'react'
import PropTypes from 'prop-types';
import '../../../Css/UserComponents/Shared/FeaturedCategory.css'
import { useNavigate } from 'react-router-dom';

const SeeAll = ({onClick, className, vector }) => {
  let navigate = useNavigate();
    return (
      <div onClick={onClick} style={{cursor: 'pointer'}} className={`see-all ${className}`}>
        <div className="text-wrapper">
          See All
        </div>
  
        <img className="FCvector" alt="Vector" src={vector} />
      </div>
    );
  };
  
  SeeAll.propTypes = {
    vector: PropTypes.string,
  };

export default SeeAll