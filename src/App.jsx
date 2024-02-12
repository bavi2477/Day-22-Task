import React from 'react';
import Cards from './components/Cards';

const App = () => {

  const arrObj =  [
    {
      title: 'FREE',
      amount: '$0/month',
      numberOfUsers : 'Single User',
      storage : '50GB Storage',
      publicProjects : 'Unlimited Public Projects',
      access : 'Community Access',
      privateProjects : 'Unlimited Private Projects',
      phoneSupport : 'Dedicated Phone Support',
      subDomain : 'Free Subdomain',
      statusReports : 'Monthly Status Reports'
    },
    {
      title: 'PLUS',
      amount: '$9/month',
      numberOfUsers : '5 Users',
      storage : '50GB Storage',
      publicProjects : 'Unlimited Public Projects',
      access : 'Community Access',
      privateProjects : 'Unlimited Private Projects',
      phoneSupport : 'Dedicated Phone Support',
      subDomain : 'Free Subdomain',
      statusReports : 'Monthly Status Reports'
    },
    {
      title: 'PRO',
      amount: '$49/month',
      numberOfUsers : 'Unlimited Users',
      storage : '50GB Storage',
      publicProjects : 'Unlimited Public Projects',
      access : 'Community Access',
      privateProjects : 'Unlimited Private Projects',
      phoneSupport : 'Dedicated Phone Support',
      subDomain : 'Free Subdomain',
      statusReports : 'Monthly Status Reports'
    }
  ]
  return (
    <div>

      <Cards arrObj = {arrObj} />
      
    </div>
  );
};

export default App;