function getPathData(path) {
    if(!root) throw new Error("getPathData: No valid directory structure")

    if (path === "") {
        return {
            type:root.type,
            children: getDirectChildren(root)
        }
    } else {
        // if path is like a/b/c/ remove / so it will look a/b/c because we will use array split
        if (path[path.length-1] === "/") path=path.slice(0,-1)

        let target = findObjectInPath(path)
        if (!target) throw new Error("Invalid Path")

        return {
            type: target.type,
            children: getDirectChildren(target)
        };
    }
}

function findObjectInPath(path) {
    pathArray = path.split('/') 
    console.log(pathArray)
    let currentObject = root
    console.log("currentObject is", JSON.stringify(currentObject))
    for (let item of pathArray) {
        console.log('item is', item)
        currentObject = currentObject.children[item]
        console.log("currentObject is", JSON.stringify(currentObject))
    }
    return currentObject
}

function getDirectChildren(obj) {
    if (!obj.children) return ""
    let directChildren = {}
    for (const child in obj.children) {
        console.log(child)
        directChildren[child] = {type: obj.children[child].type}
    }
    return directChildren
}

// directory structure
let root = {
    type: "dir",
    children: {
        home: {
            type: "dir",
            children: {
                myname: {
                    type: "dir",
                    children: {
                        "filea.txt": {
                            type: "file",
                        },
                        "fileb.txt": {
                            type: "file",
                        },
                        "projects": {
                            type: "dir",
                            children: {
                                mysupersecretproject: {
                                    type: "dir",
                                    children: {
                                        mysupersecretfile: {
                                            type: "file",
                                        },
                                    },
                                }
                            },
                        },
                    }
                },
            },
        }
    },
};

module.exports = {
    getPathData: getPathData,
}