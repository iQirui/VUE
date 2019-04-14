//全局自定义指令
const importDirective = (Vue: any) => {
    // Vue.directive('qr-rainbow', {
    //     bind(el: any, binding: any, vnode: any) {
    //         debugger;
    //         el.style.color = `#${Math.random().toString().slice(2, 8)}`;
    //     }
    // });
}

//自定义过滤器
const importFilter = (Vue: any) => {
    // Vue.filter('qr-to-uppercase', (value: string) => {
    //     debugger;
    //     return value.toUpperCase();
    // });
    // Vue.filter('qr-snippet', (value: string) => {
    //     debugger;
    //     return `${value.slice(1, 10)}...`;
    // });
}

const init = (Vue: any) => {
    importDirective(Vue);
    importFilter(Vue);
}
export default init;