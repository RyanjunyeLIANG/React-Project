import React from 'react';

import TopNav from './TopNav';
import Routes from './Routes';

export default function Shell() {
  return (
    <div>
      <TopNav />
      <main className="container">
        <Routes />
      </main>
    </div>
  );
}
