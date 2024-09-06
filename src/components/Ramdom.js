export default function Ramdom ({ min, max }){

    const ramdomNumber = Math.floor(Math.random()*(max - min + 1)) + min;

    return(
        <div>
            <p>Random value between {min} and {max} =&gt;  {ramdomNumber}</p>
        </div>
    )

}



