const os = require('os')

//  info about the user
const user = os.userInfo()
console.log(user)

// method returns the system uptiime in seconds

const uptime = os.uptime()
// const hours = uptime/600
function hours (){
    return uptime/3600

}

console.log ('system is up for ${hours() hours}')

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem()/1000000,
    freemem: os.freemem()/1000000,
}
console.log(currentOS)
