import React from 'react';
import BaseLayout from '../BaseLayout';
import ImageSection from '../Components/ParticleImageSection/ImageSection';
import TextSection from '../TextSection';

const HomePage = () => {
  return (
    <BaseLayout>
      <ImageSection />
      <TextSection />
    </BaseLayout>
  );
};

export default HomePage;
