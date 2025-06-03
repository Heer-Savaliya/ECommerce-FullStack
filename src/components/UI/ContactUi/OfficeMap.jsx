import React from 'react';

function OfficeMap() {
  return (
    <div className='pt-10'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.836289066295!2d72.87667047472003!3d21.23833948054838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa66a508317%3A0x6376f434eae8ee86!2sSemicolon%20Solution!5e0!3m2!1sen!2sin!4v1748925238864!5m2!1sen!2sin"
      width="100%"
      height="180vh"
      style={{ border: 0 ,borderRadius: 10}}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Office Location"
    ></iframe>
    </div>
  );
}

export default OfficeMap;
