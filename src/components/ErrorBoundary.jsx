import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '40px 20px',
          backgroundColor: '#FFFDF9', /* Cream base */
          fontFamily: "'Quicksand', sans-serif"
        }}>
          <div style={{ fontSize: '6rem', marginBottom: '24px' }}>🩹</div>
          <h1 style={{ color: '#1D7A8C', marginBottom: '16px', fontSize: '2.5rem' }}>
            Something Fell Off the Shelf!
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#5F737C',
            maxWidth: '500px',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            Don't worry, our pediatric team has been notified. Let's try reloading the page to put the toys back in place.
          </p>
          <button 
            onClick={this.handleReload} 
            style={{
              background: 'linear-gradient(135deg, #1D7A8C 0%, #145967 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '14px 32px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(29, 122, 140, 0.25)',
              transition: 'all 0.25s ease'
            }}
          >
            Reload Playroom (Page) 🔄
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
