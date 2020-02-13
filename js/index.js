
window.addEventListener(`scroll`, event => { 

  let scrolledPxY = window.scrollY;
  console.log(scrolledPxY);
  
});

  // // Pixels scrolled after the scroll event was triggered
  // let scrolledPxY = window.scrollY  // pixels scrolled vertically
  // let scrolledPxX = window.scrollX  // pixels scrolled horizontally

// let $doc = document.documentElement
  // let windowH = $doc.clientHeight
  // let documentH = $doc.scrollHeight
  // let progress = ([$doc.clientHeight]/[$doc.scrollHeight] = getElementbyId)

// 

// let $doc = document.documentElement  // Select the <html> element (the bigger wrapper there is)

// // DIMENSIONS

// // Window, including scrolls bars (window's outside perimeter)
// let windowHsc = window.innerHeight  // window height (px)
// let windowWsc = window.innerWidth  // window width (px) 

// // Window, not including scrolls bars (inside of the scroll bars)
// let windowH = $doc.clientHeight  // window height (px)
// let windowW = $doc.clientWidth  // window width (px)
// // ** this is weird one! it's obtaining the windows true inner dimensions via the documentElement

// // Dimensions of any element (including content and padding, but not border or margin)
// let documentH = $doc.scrollHeight
// let documentW = $doc.scrollWidth




// var h = document.documentElement,
//   b = document.body,
//   st = 'scrollTop',
//   sh = 'scrollHeight',
//   progress = document.querySelector('.progress'),
//   scroll;

// document.addEventListener('scroll', function() {
//   scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
//   progress.style.setProperty('--scroll', scroll + '%');
// });