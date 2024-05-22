export function Header(headerText1, headerText2) {
    const myStyle = {
        backgroundColor: '#20232a',
        color: '#ffffff',
        padding: '12px',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '18px'
      };
    return (
      <div style={{display:'flex'}}>
        <div style={myStyle}>
        This site is no longer updated. 
        <a href="https://legacy.reactjs.org/docs/getting-started.html" style={{color: 'red'}}> Go to react.dev </a>
        </div>
      </div>
    );
  }
