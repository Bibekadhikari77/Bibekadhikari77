// const demoA =() => {
//     setTimeout(() => {
//         console.log('from demoA')

//     }, 2000);
// }

// const demoB =() => {
//     console.log('from demoB')
// }

// demoA()
// demoB()

//callback function

// const demoA =(callback) => {
//     setTimeout(() => {
//         console.log('from demoA')
//         callback()
//     }, 2000);
// }

// const demoB =() => {
//     console.log('from demoB')
// }

// demoA(demoB)

/*promise*/

// const demoA = (showError = false) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (showError) {
//             reject('Error while processing.')
//         }else {
//             resolve('from demoA')
//         }
//     }, 2000);
// })
// const demoB = () => 'from demoB'

// const demoC = async () => await demoA()
// try {
// console.log(await demoA())
// } catch(err) {
//     console.error(err)
//     console.log(demoB())

// }
// console.log('after try')


// const demoA = (showError = false) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (showError) {
//             reject('Error while processing.')
//         }else {
//             resolve('from demoA')
//         }
//     }, 2000);
// })
// const demoB = () => 'from demoB'

// demoA().then(resp => {
//     console.log(resp)
// })
// .catch(err => console.log(err))
