import React from 'react';

const Footer = () => {
    const handleRepoLink = () => {
        window.open('https://github.com/chingu-voyages/V57-tier2-team-23');
    }

  return (
    <div className='footer'>
        <h1 className='voyage-tier-team' onClick={handleRepoLink}>Voyage 57 Tier 2 Team #23</h1>
        <p>Zephyr Koryami(Sokuen Ryan) 
            <span onClick={window.open('https://github.com/sokuenryan')}>Github</span><FontAwesomeIcon icon={byPrefixAndName.fab['github']} />
            /
            <span onClick={window.open('https://www.linkedin.com/in/sokuenryan')}>LinkedIn</span>
        </p>
        <p>Koby Syouvanh
            <span onClick={window.open('https://github.com/kobysysouvanh')}>Github</span><FontAwesomeIcon icon={byPrefixAndName.fab['github']} />
            /
            <span onClick={window.open('https://www.linkedin.com/in/kobysysouvanh')}>LinkedIn</span>
        </p>
        <p>Sarah Obi 
            <span onClick={window.open('https://github.com/soprettypink')}>Github</span><FontAwesomeIcon icon={byPrefixAndName.fab['github']} />
            /
            <span onClick={window.open('https://www.linkedin.com/in/prettypinkdesigns')}>LinkedIn</span>
        </p>
    </div>
  );
};

export default Footer;