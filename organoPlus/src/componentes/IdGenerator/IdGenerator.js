
const IdGenerator = name => {
    const idNunberOne = Math.random() * 1000
    const idNunberTwo = Math.random() * 1000
    return parseInt(idNunberOne) + name + parseInt(idNunberTwo)
}

export default IdGenerator