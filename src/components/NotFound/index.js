import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
        style={{width: 'min(360px, 90%)', marginBottom: '18px'}}
      />
      <h1 style={{margin: '0 0 8px', color: 'var(--c-1e293b)'}}>
        Page Not Found
      </h1>
      <p style={{margin: 0, color: 'var(--c-64748b)'}}>
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
