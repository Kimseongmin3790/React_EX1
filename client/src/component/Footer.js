function Footer(props) {
    return <>
        <div>
            <a href="/" onClick={(e)=>{
                e.preventDefault();
                props.fnAlert();
            }}>{props.content}</a>
        </div>
    </>
}

export default Footer;