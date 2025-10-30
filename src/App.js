function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: '#333', padding: 10, color: 'white' }}>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>Home</a>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>About</a>
        <a href="#" style={{ color: 'white', margin: '0 10px' }}>Contact</a>
      </nav>

      {/* --- Simple Form Section --- */}
      <div style={{
        marginTop: '20px',
        border: '1px solid #ccc',
        padding: '15px',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '8px'
      }}>
        <h2>Simple Form</h2>
        <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
        <button style={{ padding: '8px 12px', backgroundColor: '#333', color: 'white', border: 'none' }}>
          Submit
        </button>
      </div>
    </div>
  );
}

