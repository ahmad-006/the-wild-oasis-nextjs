function SpinnerMini() {
  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '2px solid #c69963',
        borderRightColor: 'transparent',
        animation: 'rotate 1s infinite linear',
      }}
    ></div>
  );
}

export default SpinnerMini;
