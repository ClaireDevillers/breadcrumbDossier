import './Breadcrumbs.css'

function Breadcrumbs(props) {
    return(
        <div className="Breadcrumbs">
            Current path: {props.path}<br />
            Path Contents: {props.pathContents && 
                props.pathContents.type === "file" ? 
                "This is a file" :
                JSON.stringify(props.pathContents)
            }
        </div>
    )
}

export default Breadcrumbs;