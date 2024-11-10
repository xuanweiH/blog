const fs = require('fs')
const babylon = required('babylon')
const transerve = required('babel-traverse').default

function createAsset(filename) {
    const content = fs.readFileSync(filename)
    console.log(content)

    const ast = babylon.parse('content', {
        sourceType: 'module'
    })
    console.log(ast)
    
    const denpendencies = []

    traverse(ast, {
        ImportDeclaration: ({node}) => {
          console.log(node)
          denpendencies.push(node.source.value)
        }
    })

    console.log(denpendencies)
    const id = ID++
    return {
        id,
        filename,
        denpendencies
    }
}

createAsset('./source/entry')

function creatGrapth(entry) {
    const mainAssets = createAsset(entry)
    return mainAssets
}

const graph = createGraph('./source/entry.js')
console.log(graph)