import './Breadcrumbs.css'

function Breadcrumbs(props) {

    function linkify(path) {
        if (!path.length) return "Error"
    
        // given path like /a/b/c
        // return JSX like: 
        //      /  --> links to /
        //      a/ --> links to /a/
        //      b/ --> links to /a/b/
        //      c/ --> links to /a/b/c/
        let pathArr = path.split('/').slice(0,-1)
        pathArr[0] = "/"
        let linkArr = []
        let pathSoFar = ""
        for (let item of pathArr) {
            pathSoFar = (item === "/") ? "/" : pathSoFar + item + "/"
            let cp = (' ' + pathSoFar).slice(1);
            linkArr.push(<button key={linkArr.length} onClick={()=>props.goTo(cp)}>{item}</button>)
        }
        return linkArr
    }
    return(
        <div className="Breadcrumbs">
            Current path: {linkify(props.path)}
        </div>
    )
}

export default Breadcrumbs;