function getPathData(path) {
    if(!root) throw new Error("getPathData: No valid directory structure")

    if (path === "") {
        return {
            type:root.type,
            children: getDirectChildren(root)
        }
    } else {
        return path;
    }
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