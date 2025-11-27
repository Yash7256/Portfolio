import React from 'react';

export default function TestSpline() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Spline Test Page</h1>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '80%', height: '80%', border: '2px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
          <spline-viewer 
            url="/assets/spline/bg.spline" 
            style={{ width: '100%', height: '100%' }}
            loading-anim
            loading-anim-type="spinner-small-dark"
          />
        </div>
      </div>
      <p style={{ textAlign: 'center', margin: '20px 0' }}>
        If you can see the 3D model above, the Spline file is loading correctly.
      </p>
    </div>
  );
}
