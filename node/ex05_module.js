console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

// module.exports.digaOi = () => console.log('Oi!!!')
this.digaOi = () => console.log('Oi!!!')