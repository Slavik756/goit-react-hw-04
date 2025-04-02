
const ErrorMessage = ({ message }) => {
    return (
      <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
        <h2>Error!</h2>
        <p>{message}</p>
      </div>
    );
  };
  
  export default ErrorMessage;
  