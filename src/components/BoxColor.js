export default function BoxColor({r, g, b}){

    const bgColor = `rgb(${r}, ${g}, ${b})`;

    const inlineStyle = {

    backgroundColor: bgColor,
    height: '100px',
    width: '300px',
    border: '1px solid black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',

    }

    return(
        <div style={inlineStyle}>

            <p>{bgColor}</p>

        </div>
    )

}