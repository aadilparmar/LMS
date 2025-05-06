import React from 'react';
import { assets } from '../../assets/assets';
const FounderProfileCard = () => {
  return (
    <div style={{
      maxWidth: '300px',
      margin: '20px auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }} className='flex flex-col items-center text-center bg-slate-300'>
      <img 
        src={assets.jayy_parmar }
        alt="Jayy Parmar" 
        className='rounded-full'
      />
      <h2 style={{ marginTop: '10px' }}>Jayy Parmar</h2>
      <h4 style={{ color: '#777' }}>Founder, QT-World</h4>
     
    </div>
  );
};

export default FounderProfileCard;