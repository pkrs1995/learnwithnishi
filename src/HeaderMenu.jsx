export function HeaderMenu() {
    const myStyle = {
        backgroundColor: 'grey',
        color: '#ffffff',
        padding: '16px',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '18px',
        alignItems: 'centre',
        display:'flex'
      };
    return (
      <div>
        <div style={myStyle}>
          <div>Docs</div>
          <div>Tutorial</div>
          <div>Blog</div>
        </div>
      </div>
    );
  }