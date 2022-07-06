export function Post(props) {
    console.log (props) 
    return (
        <>
            <p>{props.author}</p>
            <p>{props.content}</p>
        </>    
    )
}

