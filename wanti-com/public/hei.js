// function ajax(method, url) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.open(method, url);
//         request.onreadystatechange = () => {
//             if (request.readyState === 4) {
//                 if (request.status === 200) {
//                     resolve(request.response);
//                 } else {
//                     reject(request);
//                 }
//             }
//         };
//         request.send();
//     });
// }
// ajax("get", "http://qq.com:8888/friends.json").then(response => {
//     console.log("这是 AJAX");
//     console.log(response);
// });
// function jsonp(url) {
//     return new Promise((resolve, reject) => {
//         const random = "frankJSONPCallbackName" + Math.random();
//         window[random] = data => {
//             resolve(data);
//         };
//         const script = document.createElement("script");
//         script.src = `${url}?callback=${random}`;
//         script.onload = () => {
//             script.remove();
//         };
//         script.onerror = () => {
//             reject();
//         };
//         document.body.appendChild(script);
//     });
// }
const random = Math.random()
console.log(random)
window[random] = (data) => {
    console.log(data)
}

const script = document.createElement('script')
script.src = `http://qq.com:8888/public/friends.js?functionName=${random}`
script.onload = () => {
    script.remove()
}
document.body.appendChild(script);
