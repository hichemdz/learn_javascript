

// const open = document.querySelector('#open')
// const close = document.querySelector('#close')
//
// console.log('window');
// console.log('innerHeight',window.innerHeight);
// console.log('innerWidth',window.innerWidth);
// console.log('document clientHeight',document.body.clientHeight);
// console.log('document clientWidth',document.body.clientWidth);
// console.log('documentElement clientHeight',document.documentElement.clientHeight);
// console.log('documentElement clientWidth',document.documentElement.clientWidth);
// console.log('\n');
//
// console.log('screen');
//
// console.log('width',screen.width);
// console.log('height',screen.height);
// console.log('availWidth',screen.availWidth);
// console.log('availHeight',screen.availHeight);
// console.log('colorDeth',screen.colorDepth);
// console.log('pixelDeth',screen.pixelDepth);
// console.log('\n');
//
// console.log('window.location');
// let wl = window.location;
// console.log('href', wl.href);
// console.log('hostname', wl.hostname);
// console.log('pathname', wl.pathname);
// console.log('protocol', wl.protocol);
// console.log('port', wl.port);
// //console.log('assign', wl.assign());
// console.log('\n');
//
// console.log('window.navigator');
// let wn = window.navigator;
// console.log('appName', wn.appName);
// console.log('appVersion', wn.appVersion);
// console.log('appCodeName', wn.appCodeName);
// console.log('platform', wn.platform);
// console.log('product', wn.product);
// console.log('userAgent', wn.userAgent);
// console.log('language', wn.language);
// console.log('onLine', wn.onLine);
//
//
// console.log('\n');
//
// console.log('window.history', window.history);

// const ele   = document.querySelector('#root')
// let re = ele.innerHTML;
// let obtion = {
// rootMargin:'-200px',

// }
// const observe = new IntersectionObserver((entries,obsorve)=>{
//   let count = 1;
//   entries.map((entry) => {
//       let l = (ele.children.length +1) * 100;
//       let div = document.createElement('div');
//       div.innerHTML = l;
//       entry.target.appendChild(div);
//     //  console.log(entry.time);
//     if (entry.isIntersecting) {
//       let elem = entry.target;

//       if (entry.intersectionRatio >= 0.75) {
//           intersectionCounter++;
//           console.log(intersectionCounter);
//       }
//     }


//   });

// },obtion)

// observe.observe(ele);


const main = document.querySelector('main');
const header = document.querySelector('header');
const classfideIn = document.querySelectorAll('section');


const option ={
  rootMargin:'-96px 0px 0px 0px'
}

const optionFide ={
  //threshold:1,
  rootMargin:'0px 0px -96px 0px'
}

let hClass = header.classList;

const observe = new IntersectionObserver((entries,obsorve)=>{

     entries.forEach(entry=>{


      !entry.isIntersecting? hClass.add('scrool_header'):hClass.remove('scrool_header')
            
     })


},option)


observe.observe(main)







const Findin = new IntersectionObserver((entries,observe) =>{

     entries.forEach(entry=>{
          
        if(entry.isIntersecting){
          
           console.log(entry.target.innerHTML)
           entry.target.classList.add('apper')
           //observe.unobserve(entry.target)
        }else{

          return ;
        }
           

      })

   }
  ,optionFide);


classfideIn.forEach(cls=>{
   
   Findin.observe(cls);

})


























