import './Viewer.css'

function Viewer(props) {
    function displayContents(pathContents) {
        if (!pathContents || !pathContents.children) return <div>Empty</div>
        let childrenArr = []
        for (const child in pathContents.children) {
            childrenArr.push(<div><button onClick={()=>props.goTo(props.path + child + '/')}>{child}</button></div>)
        }
        return childrenArr;
    }
    
    return (
        <div className="Viewer">
            Path Contents: {props.pathContents && 
                props.pathContents.type === "file" ? 
                "This is a file" :
                displayContents(props.pathContents)
            }
        </div>
    )
}

export default Viewer;