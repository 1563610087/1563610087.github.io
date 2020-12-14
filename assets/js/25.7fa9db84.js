(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{385:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-router"}},[t._v("#")]),t._v(" react-router")]),t._v(" "),e("p",[t._v("使用React构建的单页面应用，要想实现页面间的跳转，首先想到的就是使用路由。在React中，常用的有两个包可以实现这个需求，那就是react-router和react-router-dom。")]),t._v(" "),e("p",[e("code",[t._v("react-router")]),t._v(" React Router 核心")]),t._v(" "),e("p",[e("code",[t._v("react-router-dom")]),t._v(" 用于 DOM 绑定的 React Router")]),t._v(" "),e("p",[e("code",[t._v("react-router-native")]),t._v(" 用于 React Native 的 React Router")]),t._v(" "),e("p",[e("code",[t._v("react-router-redux")]),t._v(" React Router 和 Redux 的集成")]),t._v(" "),e("p",[e("code",[t._v("react-router-config")]),t._v(" 静态路由配置的小助手")]),t._v(" "),e("h2",{attrs:{id:"_1-使用react-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用react-router"}},[t._v("#")]),t._v(" 1 使用react-router")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install --save react-router-dom\n")])])]),e("h3",{attrs:{id:"_1-1-组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-组件"}},[t._v("#")]),t._v(" 1.1 组件")]),t._v(" "),e("h4",{attrs:{id:"_1-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-router"}},[t._v("#")]),t._v(" 1 Router")]),t._v(" "),e("ul",[e("li",[t._v("路由器组件，用来包含各个路由组件，用来管理路由")]),t._v(" "),e("li",[t._v("属性：history={hashHistory}用来监听浏览器地址栏的变化，并将url解析成一个地址对象，供React Router匹配")]),t._v(" "),e("li",[t._v("子组件：Route")])]),t._v(" "),e("h4",{attrs:{id:"_2-route"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-route"}},[t._v("#")]),t._v(" 2 route")]),t._v(" "),e("ul",[e("li",[t._v("路由组件，注册路由")]),t._v(" "),e("li",[t._v("属性1：path=''")]),t._v(" "),e("li",[t._v("属性2:component={xx}")])]),t._v(" "),e("h4",{attrs:{id:"_3-hashhistory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hashhistory"}},[t._v("#")]),t._v(" 3 hashHistory")]),t._v(" "),e("ul",[e("li",[t._v("路由的切换由URL的hash变化决定，即url的#部分发生变化")])]),t._v(" "),e("h4",{attrs:{id:"_4-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-link"}},[t._v("#")]),t._v(" 4 link")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("路由链接组件，生成a标签")])]),t._v(" "),e("li",[e("p",[t._v("属性1:to='/xxx'")])]),t._v(" "),e("li",[e("p",[t._v("属性2:activeClassName='active'")]),t._v(" "),e("h4",{attrs:{id:"to-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-object"}},[t._v("#")]),t._v(" to: object")]),t._v(" "),e("p",[t._v("一个对象形式的链接地址，可以具有以下任何属性：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("pathname")]),t._v(" - 要链接到的路径")]),t._v(" "),e("li",[e("code",[t._v("search")]),t._v(" - 查询参数")]),t._v(" "),e("li",[e("code",[t._v("hash")]),t._v(" - URL 中的 hash，例如 #the-hash")]),t._v(" "),e("li",[e("code",[t._v("state")]),t._v(" - 存储到 location 中的额外状态数据")])])])]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<Link to=\"/courses\" />   //跳转到指定路径\n<Link to={{\n  pathname: '/course',\n  search: '?sort=name',\n  state: { price: 18 }\n}} />    //跳转到指定路径并且携带参数\n")])])]),e("h4",{attrs:{id:"_5-navlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-navlink"}},[t._v("#")]),t._v(" 5 NavLink")]),t._v(" "),e("p",[t._v("这是 Link的特殊版，顾名思义这就是为页面导航准备的。因为导航需要有 “激活状态”")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<NavLink\n  to="/about"\n  activeClassName="selected"\n>MyBlog</NavLink>\n //activeClassName: string\n//导航选中激活时候应用的样式名，默认样式名为 active\n\n//如果不想使用样式名就直接写style\n<NavLink\n  to="/about"\n  activeStyle={{ color: \'green\', fontWeight: \'bold\' }}\n>MyBlog</NavLink>\n')])])]),e("h4",{attrs:{id:"_6-switch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-switch"}},[t._v("#")]),t._v(" 6 Switch")]),t._v(" "),e("p",[t._v("只渲染出第一个与当前访问地址匹配的 "),e("code",[t._v("<Route>")]),t._v(" 或 "),e("code",[t._v("<Redirect>")]),t._v("。")]),t._v(" "),e("p",[t._v("思考如下代码，如果你访问 "),e("code",[t._v("/about")]),t._v("，那么组件 About User Nomatch 都将被渲染出来，因为他们对应的路由与访问的地址 "),e("code",[t._v("/about")]),t._v(" 匹配。这显然不是我们想要的，我们只想渲染出第一个匹配的路由就可以了，于是 "),e("code",[t._v("<Switch>")]),t._v(" 应运而生！")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<Route path="/about" component={About}/>\n<Route path="/:user" component={User}/>\n<Route component={NoMatch}/>\n')])])]),e("p",[t._v("也许你会问，为什么 RR4 机制里不默认匹配第一个符合要求的呢，答：这种设计允许我们将多个 "),e("code",[t._v("<Route>")]),t._v("组合到应用程序中，例如侧边栏（sidebars），面包屑 等等。")]),t._v(" "),e("p",[e("strong",[t._v("children: node")]),t._v(" "),e("code",[t._v("<Switch>")]),t._v(" 下的子节点只能是 "),e("code",[t._v("<Route>")]),t._v(" 或 "),e("code",[t._v("<Redirect>")]),t._v(" 元素。只有与当前访问地址匹配的第一个子节点才会被渲染。"),e("code",[t._v("<Route>")]),t._v(" 元素用它们的 "),e("code",[t._v("path")]),t._v(" 属性匹配，"),e("code",[t._v("<Redirect>")]),t._v(" 元素使用它们的 "),e("code",[t._v("from")]),t._v(" 属性匹配。如果没有对应的 "),e("code",[t._v("path")]),t._v(" 或 "),e("code",[t._v("from")]),t._v("，那么它们将匹配任何当前访问地址。")]),t._v(" "),e("h4",{attrs:{id:"_7-redirect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-redirect"}},[t._v("#")]),t._v(" 7 Redirect")]),t._v(" "),e("p",[e("code",[t._v("<Redirect>")]),t._v(" 渲染时将导航到一个新地址，这个新地址覆盖在访问历史信息里面的本该访问的那个地址")]),t._v(" "),e("p",[e("strong",[t._v("to: string")]),t._v("\n重定向的 URL 字符串")]),t._v(" "),e("p",[e("strong",[t._v("to: object")]),t._v("\n重定向的 location 对象")]),t._v(" "),e("p",[e("strong",[t._v("push: bool")]),t._v("\n若为真，重定向操作将会把新地址加入到访问历史记录里面，并且无法回退到前面的页面。")]),t._v(" "),e("p",[t._v("代码示例看9withrouter")]),t._v(" "),e("h4",{attrs:{id:"_8-prompt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-prompt"}},[t._v("#")]),t._v(" 8 Prompt")]),t._v(" "),e("p",[t._v("当用户离开当前页面前做出一些提示。")]),t._v(" "),e("p",[e("strong",[t._v("message: string")]),t._v("\n当用户离开当前页面时，设置的提示信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<Prompt message="确定要离开？" />\n')])])]),e("p",[e("strong",[t._v("message: func")]),t._v("\n当用户离开当前页面时，设置的回掉函数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<Prompt message={location => (\n  `Are you sue you want to go to ${location.pathname}?` \n)} />\n")])])]),e("p",[e("strong",[t._v("when: bool")]),t._v("\n通过设置一定条件要决定是否启用 Prompt")]),t._v(" "),e("h4",{attrs:{id:"_9-withrouter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-withrouter"}},[t._v("#")]),t._v(" 9 withRouter")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import NotFound from './NotFound'\n/*或者直接在组件上使用‘@withRouter’*/\nclass App extends Component{\n    //此时才能获取this.props,包含（history, match, location）三个对象\n    console.log(this.props);  //输出{match: {…}, location: {…}, history: {…}, 等}\n    render(){return (<div className='app'>\n            <NavLink to='/one/users'>用户列表</NavLink>\n            <NavLink to='/one/companies'>公司列表</NavLink>\n            <Switch>\n                <Route path='/one/:type?' component={One} />\n                <Redirect from='/' to='/one' exact />\n                <Route component={NotFound} />\n            </Switch>\n        </div>)\n    }\n}\nexport default withRouter(App);  //这里要执行一下WithRouter\n")])])]),e("p",[t._v("**作用：**把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上")]),t._v(" "),e("p",[t._v("默认情况下必须是经过路由匹配渲染的组件才存在this.props，才拥有路由参数，才能使用编程式导航的写法，执行this.props.history.push('/detail')跳转到对应路由的页面")]),t._v(" "),e("p",[t._v("然而不是所有组件都直接与路由相连（通过路由跳转到此组件）的，当这些组件需要路由参数时，使用withRouter就可以给此组件传入路由参数，此时就可以使用this.props")]),t._v(" "),e("h3",{attrs:{id:"_1-2-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-示例"}},[t._v("#")]),t._v(" 1.2 示例")]),t._v(" "),e("p",[t._v("Router是一个组件容器，里面的路由通过Route来定义")]),t._v(" "),e("p",[t._v("route属性path是路由的路径，component是需要渲染的组件")]),t._v(" "),e("p",[t._v("IndexRoute在react-router4里面已经不存在了")]),t._v(" "),e("p",[t._v("Exact 是路径的精确匹配")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Route"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hashHistory "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-router'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Index "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Index'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Repos "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Repos'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" About "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./About'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Router history"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hashHistory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  \t "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t \t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route exact path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \t\t \t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/repos"')]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Repos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \t\t \t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/about"')]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("About"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Router"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"_2-对象和方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-对象和方法"}},[t._v("#")]),t._v(" 2 对象和方法")]),t._v(" "),e("h4",{attrs:{id:"history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" history")]),t._v(" "),e("p",[t._v("histoty 是 RR4 的两大重要依赖之一（另一个当然是 React 了），在不同的 javascript 环境中， history 以多种能够行驶实现了对会话（session）历史的管理。")]),t._v(" "),e("p",[t._v("我们会经常使用以下术语：")]),t._v(" "),e("ul",[e("li",[t._v('"browser history" - history 在 DOM 上的实现，用于支持 HTML5 history API 的浏览器')]),t._v(" "),e("li",[t._v('"hash history" - history 在 DOM 上的实现，用于旧版浏览器。')]),t._v(" "),e("li",[t._v('"memory history" - history 在内存上的实现，用于测试或非 DOM 环境（例如 React Native）。')])]),t._v(" "),e("p",[t._v("history 对象通常具有以下属性和方法：")]),t._v(" "),e("ul",[e("li",[t._v("length: number  浏览历史堆栈中的条目数")]),t._v(" "),e("li",[t._v("action: string 路由跳转到当前页面执行的动作，分为 PUSH, REPLACE, POP")]),t._v(" "),e("li",[t._v("location: object 当前访问地址信息组成的对象，具有如下属性：")]),t._v(" "),e("li",[t._v("pathname: string URL路径")]),t._v(" "),e("li",[t._v("search: string URL中的查询字符串")]),t._v(" "),e("li",[t._v("hash: string URL的 hash 片段")]),t._v(" "),e("li",[t._v("state: string 例如执行 push(path, state) 操作时，location 的 state 将被提供到堆栈信息里，state 只有在 browser 和 memory history 有效。")]),t._v(" "),e("li",[t._v("push(path, [state]) 在历史堆栈信息里加入一个新条目。")]),t._v(" "),e("li",[t._v("replace(path, [state]) 在历史堆栈信息里替换掉当前的条目")]),t._v(" "),e("li",[t._v("go(n) 将 history 堆栈中的指针向前移动 n。")]),t._v(" "),e("li",[t._v("goBack() 等同于 go(-1)")]),t._v(" "),e("li",[t._v("goForward 等同于 go(1)")]),t._v(" "),e("li",[t._v("block(prompt) 阻止跳转")])]),t._v(" "),e("p",[t._v("history 对象是可变的，因为建议从 "),e("code",[t._v("<Route>")]),t._v(" 的 prop 里来获取 location，而不是从 history.location 直接获取。这样可以保证 React 在生命周期中的钩子函数正常执行，例如以下代码：")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Comp extends React.Component {\n  componentWillReceiveProps(nextProps) {\n    // locationChanged\n    const locationChanged = nextProps.location !== this.props.location\n\n    // 错误方式，locationChanged 永远为 false，因为history 是可变的\n    const locationChanged = nextProps.history.location !== this.props.history.location\n  }\n}\n")])])]),e("h4",{attrs:{id:"location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" location")]),t._v(" "),e("p",[t._v("location 是指你当前的位置，将要去的位置，或是之前所在的位置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{\n  key: 'sdfad1'\n  pathname: '/about',\n  search: '?name=minooo'\n  hash: '#sdfas',\n  state: {\n    price: 123\n  }\n}\n")])])]),e("p",[t._v("在以下情境中可以获取 location 对象")]),t._v(" "),e("ul",[e("li",[t._v("在 "),e("code",[t._v("Route component")]),t._v(" 中，以 this.props.location 获取")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("Route render")]),t._v(" 中，以 ({location}) => () 方式获取")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("Route children")]),t._v(" 中，以 ({location}) => () 方式获取")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("withRouter")]),t._v(" 中，以 this.props.location 的方式获取")])]),t._v(" "),e("p",[t._v("location 对象不会发生改变，因此可以在生命周期的回调函数中使用 location 对象来查看当前页面的访问地址是否发生改变。这种技巧在获取远程数据以及使用动画时非常有用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("componentWillReceiveProps(nextProps) {\n  if (nextProps.location !== this.props.location) {\n    // 已经跳转了！\n  }\n}\n")])])]),e("p",[t._v("可以在不同情境中使用 location：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("<Link to={location} />")])]),t._v(" "),e("li",[e("code",[t._v("<NaviveLink to={location} />")])]),t._v(" "),e("li",[e("code",[t._v("<Redirect to={location />")])]),t._v(" "),e("li",[t._v("history.push(location)")]),t._v(" "),e("li",[t._v("history.replace(location)")])]),t._v(" "),e("h4",{attrs:{id:"match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#match"}},[t._v("#")]),t._v(" match")]),t._v(" "),e("p",[t._v("match 对象包含了"),e("code",[t._v("<Route path>")]),t._v("如何与 URL 匹配的信息，具有以下属性：")]),t._v(" "),e("ul",[e("li",[t._v("params: object 路径参数，通过解析 URL 中的动态部分获得键值对")]),t._v(" "),e("li",[t._v("isExact: bool 为 true 时，整个 URL 都需要匹配")]),t._v(" "),e("li",[t._v("path: string 用来匹配的路径模式，用于创建嵌套的 "),e("code",[t._v("<Route>")])]),t._v(" "),e("li",[t._v("url: string URL 匹配的部分，用于嵌套的 "),e("code",[t._v("<Link>")])])]),t._v(" "),e("p",[t._v("在以下情境中可以获取 match 对象")]),t._v(" "),e("ul",[e("li",[t._v("在 "),e("code",[t._v("Route component")]),t._v(" 中，以 this.props.match获取")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("Route render")]),t._v(" 中，以 ({match}) => () 方式获取")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("Route children")]),t._v(" 中，以 ({match}) => () 方式获取")]),t._v(" "),e("li",[t._v("在 "),e("code",[t._v("withRouter")]),t._v(" 中，以 this.props.match的方式获取")]),t._v(" "),e("li",[t._v("matchPath 的返回值")])]),t._v(" "),e("p",[t._v("当一个 Route 没有 path 时，它会匹配一切路径。")]),t._v(" "),e("p",[t._v("作者：梁相辉")]),t._v(" "),e("p",[t._v("链接：https://www.jianshu.com/p/e3adc9b5f75c/")]),t._v(" "),e("p",[t._v("来源：简书")]),t._v(" "),e("p",[t._v("简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。")]),t._v(" "),e("h2",{attrs:{id:"_3-路由跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-路由跳转"}},[t._v("#")]),t._v(" 3 路由跳转")]),t._v(" "),e("p",[t._v("实现路由跳转有三种组件")]),t._v(" "),e("ul",[e("li",[t._v("BrowserRouter")]),t._v(" "),e("li",[t._v("HashHistory")]),t._v(" "),e("li",[t._v("MemoryHistory")])]),t._v(" "),e("h3",{attrs:{id:"_3-1-browserrouter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-browserrouter"}},[t._v("#")]),t._v(" 3.1 BrowserRouter")]),t._v(" "),e("p",[e("code",[t._v("<BrowserRouter>")]),t._v(" 使用 HTML5 提供的 history API ("),e("code",[t._v("pushState")]),t._v(", "),e("code",[t._v("replaceState")]),t._v(" 和 "),e("code",[t._v("popstate")]),t._v(" 事件) 来保持 UI 和 URL 的同步。")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import  { BrowserRouter }  form 'react-router-dom';\n< BrowserRouter \n  basename = { optionalString } //所有位置的基本UR \n  forceRefresh = { optionalBool } //如果true路由器将在页面导航上使用整页刷新 通常用于不支持html5 history api的浏览器上\n  getUserConfirmation = { optionalFunc }// 用户确认导航的功能回调函数\n  keyLength = { optionalNumber } //location.key的长度 默认6\n>\n  < App />\n</ BrowserRouter >\n")])])]),e("ul",[e("li",[e("strong",[t._v("basename: string")])])]),t._v(" "),e("p",[t._v("所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。"),e("code",[t._v("basename")]),t._v(" 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。")]),t._v(" "),e("p",[e("strong",[t._v("使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 "),e("code",[t._v("basename")]),t._v(" 设置到此目录。")])]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<BrowserRouter basename="/calendar">\n  <Link to="/today" />\n</BrowserRouter>\n')])])]),e("p",[t._v("上例中的 "),e("code",[t._v("<Link>")]),t._v(" 最终将被呈现为：")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<a href="/calendar/today" />\n')])])]),e("ul",[e("li",[e("strong",[t._v("forceRefresh: bool")])])]),t._v(" "),e("p",[t._v("如果为 "),e("code",[t._v("true")]),t._v(" ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const supportsHistory = 'pushState' in window.history;\n\n<BrowserRouter forceRefresh={!supportsHistory} />\n")])])]),e("ul",[e("li",[e("strong",[t._v("getUserConfirmation: func")])])]),t._v(" "),e("p",[t._v("用于确认导航的函数，默认使用 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.confirm"),e("OutboundLink")],1),t._v("。例如，当从 "),e("code",[t._v("/a")]),t._v(" 导航至 "),e("code",[t._v("/b")]),t._v(" 时，会使用默认的 "),e("code",[t._v("confirm")]),t._v(" 函数弹出一个提示，用户点击确定后才进行导航，否则不做任何处理。译注：需要配合 "),e("code",[t._v("<Prompt>")]),t._v(" 一起使用。")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 这是默认的确认函数\nconst getConfirmation = (message, callback) => {\n  const allowTransition = window.confirm(message);\n  callback(allowTransition);\n}\n\n<BrowserRouter getUserConfirmation={getConfirmation} />\n")])])]),e("ul",[e("li",[e("strong",[t._v("keyLength: number")])])]),t._v(" "),e("p",[e("code",[t._v("location.key")]),t._v(" 的长度，默认为 "),e("code",[t._v("6")]),t._v("。")]),t._v(" "),e("p",[t._v("（key的作用：点击同一个链接时，每次该路由下的 "),e("code",[t._v("location.key")]),t._v("都会改变，可以通过 key 的变化来刷新页面。）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<BrowserRouter keyLength={12} />\n")])])]),e("h3",{attrs:{id:"_3-2-hashrouter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-hashrouter"}},[t._v("#")]),t._v(" 3.2 HashRouter")]),t._v(" "),e("p",[t._v("Hash history 不支持 "),e("code",[t._v("location.key")]),t._v(" 和 "),e("code",[t._v("location.state")]),t._v("。另外由于该技术只是用来支持旧版浏览器，因此更推荐大家使用 BrowserRouter")]),t._v(" "),e("p",[e("code",[t._v("<HashRouter>")]),t._v(" 使用 URL 的 "),e("code",[t._v("hash")]),t._v(" 部分（即 "),e("code",[t._v("window.location.hash")]),t._v("）来保持 UI 和 URL 的同步。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { HashRouter } from 'react-router-dom';\n\n<HashRouter>\n  <App />\n</HashRouter>\n")])])]),e("blockquote",[e("p",[t._v("注意： 使用 "),e("code",[t._v("hash")]),t._v(" 记录导航历史不支持 "),e("code",[t._v("location.key")]),t._v(" 和 "),e("code",[t._v("location.state")]),t._v("。在以前的版本中，我们视图 shim 这种行为，但是仍有一些问题我们无法解决。任何依赖此行为的代码或插件都将无法正常使用。由于该技术仅用于支持旧式（低版本）浏览器，因此对于一些新式浏览器，我们鼓励你使用 "),e("code",[t._v("<BrowserHistory>")]),t._v(" 代替。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("basename: string")])])]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashRouter")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("basename")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/calendar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/today"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// renders <a href="#/calendar/today">')]),t._v("\n")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-3-memoryhistory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-memoryhistory"}},[t._v("#")]),t._v(" 3.3 "),e("strong",[t._v("MemoryHistory")])]),t._v(" "),e("h3",{attrs:{id:"_3-4-三种组件的对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-三种组件的对比"}},[t._v("#")]),t._v(" 3.4 三种组件的对比")]),t._v(" "),e("p",[t._v("区别：")]),t._v(" "),e("p",[t._v("1 url表现不一致")]),t._v(" "),e("p",[t._v("BrowserRouter使用HTML5 history API，保证UI界面和URL保存同步")]),t._v(" "),e("p",[t._v("HashRouter使用URL（即window.location.hash）的哈希部分来保持UI与URL同步的。哈希历史记录不支持location.key和location.state 。 用来支持旧版浏览器，官方不建议使用。")]),t._v(" "),e("p",[t._v("刷新页面或者直接浏览器回退一步，然后再前进时，BowserRouter的页面依然可以获取到state中的值，也就是进入路由后即使我们刷新页面上一个页面传递过来的参数依然有效！ 看以下打印结果~")]),t._v(" "),e("p",[t._v("** 测试步骤是先通过点击出发js跳转，然后回退上一页然后再点击下一页回到路由about页面")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('class About extends Component {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        console.log(this.props.location);\n        return (\n            <div className="demo">\n                我是一个路由跳转后的子页面\n                <br />\n                <div>\n                    参数：{JSON.stringify(this.props.location)}\n                </div>\n                <Link to="/">回首页</Link>\n            </div>\n        );\n    }\n}\n')])])]),e("p",[t._v("通过js执行跳转")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("this.props.history.push({\n    pathname: '/about',\n    state: {\n        msg: '来自首页的问候！by state'\n    }\n});\n")])])]),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('HashRouter\n//第一次进入页面打印结果\n{"pathname":"/about","state":{"msg":"来自首页的问候！by state"},"search":"","hash":""}\n//刷新页面或者后退再前进\n{"pathname":"/about","search":"","hash":""}\n')])])]),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('BowserRouter\n//第一次进入页面打印结果\n{"pathname":"/about","state":{"msg":"来自首页的问候！by state"},"search":"","hash":"","key":"1m6gz4"}\n//刷新页面或者后退再前进\n{"pathname":"/about","state":{"msg":"来自首页的问候！by state"},"search":"","hash":"","key":"1m6gz4"}\n')])])]),e("p",[t._v("到这儿，应该知道为啥说location不支持key和state了吧，当我们通过state传递参数的时候，因为hashRouter没有使用html5中history的api，无法从历史记录中获取到key和state值，所以当刷新路由后state值会丢失导致页面显示异常。")]),t._v(" "),e("p",[e("strong",[t._v("总结，实现路由页面页面刷新数据不丢失的方案")])]),t._v(" "),e("ul",[e("li",[t._v("BorwserRouter有三种方式（url传值，路由参数传值，以及state）")]),t._v(" "),e("li",[t._v("HashRouter有两种方式（url传值，路由参数传值）")]),t._v(" "),e("li",[t._v("本地缓存或者状态管理方案")])]),t._v(" "),e("h2",{attrs:{id:"_4-路由传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-路由传参"}},[t._v("#")]),t._v(" 4 路由传参")]),t._v(" "),e("h4",{attrs:{id:"_4-1-query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-query"}},[t._v("#")]),t._v(" 4.1 query")]),t._v(" "),e("p",[e("code",[t._v("通过query")]),t._v("\n前提：必须由其他页面跳过来，参数才会被传递过来\n注：不需要配置路由表。路由表中的内容照常："),e("Route",{attrs:{path:"/user",component:"{User}"}})],1),t._v(" "),e("p",[e("strong",[t._v("传参")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HTML方式\n<Link to={{ pathname: ' /user' , query : { day: 'Friday' }}}>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("js方式\nthis.props.history.push({ pathname : '/user' ,query : { day: 'Friday'} })\n")])])]),e("p",[e("strong",[t._v("调用")])]),t._v(" "),e("p",[t._v("user页面：this.props.location.query.day")]),t._v(" "),e("h4",{attrs:{id:"_4-2-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-state"}},[t._v("#")]),t._v(" 4.2 state")]),t._v(" "),e("p",[e("code",[t._v("通过state")]),t._v("\n同query差不多，只是属性不一样，而且state传的参数是加密的，query传的参数是公开的，在地址栏")]),t._v(" "),e("p",[e("strong",[t._v("传参")])]),t._v(" "),e("p",[t._v("Link处")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  HTML方式：<Link to={{ pathname : ' /user' , state : { day: 'Friday' }}}> \n")])])]),e("p",[t._v("JS方式：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("this.props.history.push({ pathname:'/user',state:{day : 'Friday' } })\n")])])]),e("p",[e("strong",[t._v("调用")])]),t._v(" "),e("p",[t._v("//user页面"),e("br"),t._v("\nthis.props.location.state.day")]),t._v(" "),e("h4",{attrs:{id:"_4-3-url-传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-url-传参"}},[t._v("#")]),t._v(" 4.3 url ？传参")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<Switch>\n    <Route exact path="/" component={Home} />\n    <Route exact path="/about" component={About} />\n    <Route component={Home} />\n</Switch>\n\n\n//link方式跳转\n<Link to="/about?msg=\'我是url参数\'">去关于我的页面 url传递参数</Link>\n//js方式跳转\n this.props.history.push({ pathname:"/about?msg=\'我是url参数\'"});\n//about中获取参数\nconsole.log(this.props.location)\n//{pathname: "/about", search: "?msg=\'我是url参数\'", hash: "", state: undefined}\n')])])]),e("p",[t._v("优缺点：参数比较灵活，参数直接在url中暴露，刷新路由页面时传递参数依然可以正常访问。缺点是还需要js通过search中解析类似getParameter(msg)方式获取真实值")]),t._v(" "),e("h4",{attrs:{id:"_4-4-通过-id方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-通过-id方式"}},[t._v("#")]),t._v(" 4.4 通过:id方式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<Route exact path="/about/:msg" component={About} />\n//link方式\n<Link to="/about/我是url参数">去关于我的页面 路由配置传递参数</Link>\n//js方式跳转\n this.props.history.push({ pathname:"/about/\'我是url参数\'"});\n//about中获取参数\nconsole.log(this.props.match.params.msg)\n//我是url参数\n')])])]),e("p",[t._v("优缺点：参数比较灵活，参数直接在url中暴露,刷新路由页面时传递参数依然可以正常访问。但每增加一个参数需要在Route中注册一个，而且顺序需要一致。")]),t._v(" "),e("h2",{attrs:{id:"_5-路由的使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-路由的使用场景"}},[t._v("#")]),t._v(" 5 路由的使用场景")]),t._v(" "),e("h3",{attrs:{id:"_5-1-嵌套路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-嵌套路由"}},[t._v("#")]),t._v(" 5.1 嵌套路由")]),t._v(" "),e("h3",{attrs:{id:"_5-2-路由导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-路由导航"}},[t._v("#")]),t._v(" 5.2 路由导航")]),t._v(" "),e("p",[e("strong",[t._v("1 声明式导航")])]),t._v(" "),e("p",[t._v("采用link，navlink标签进行导航")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import { BrowserRouter as Router, Route, NavLink} from \'react-router-dom\';\n<div className="tab-bar">\n    <Route path="/index" exact component={Index}></Route>\n    <Route path="/index/news" component={News}></Route>\n    <Route path="/index/course" component={Course}></Route>\n    <Route path="/index/mine" component={Mine}></Route>\n    <ul className="footer">\n        <li><NavLink exact to="/index" activeStyle={{ color: \'#4dc060\' }}>首页列表项目 </NavLink></li>\n        <li><NavLink to="/index/news" activeStyle={{ color: \'#4dc060\' }}>资讯</NavLink></li>\n        <li><NavLink to="/index/course" activeStyle={{ color: \'#4dc060\' }}>课程</NavLink></li>\n        <li><NavLink to="/index/mine" activeClassName="selected">我的</NavLink></li>\n    </ul>\n')])])]),e("p",[e("strong",[t._v("2 编程式导航")])]),t._v(" "),e("p",[t._v("之前的导航都是用"),e("code",[t._v("link")]),t._v("标签或者直接操作地址栏的形式完成的，那如果在业务逻辑代码中需要跳转页面我们如何操作？编程式导航，就是在业务逻辑代码中实现导航.")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import {withRouter} from 'react-router-dom';\n\ngoBack(){\n    this.props.history.goBack();\n}  \ngoDetail(){\n    this.props.history.push('/detail');\n}  \ngoDetailWithParam(item){\n    this.props.history.push({pathname : '/cart',state:{item}});\n}\n    \n<span className=\"ico\" onClick={this.goBack.bind(this)}>\n    <i className=\"iconfont\">&#xe501;</i>\n</span>\n//这里的item来自for循环的每一项\n<li onClick={this.goDetailWithParam.bind(this,item)} key={encodeURI(item.imgUrl)}>\n\nexport default withRouter(Header);\n")])])]),e("blockquote",[e("p",[t._v("引入"),e("code",[t._v("withRouter")]),t._v("之后,就可以使用编程式导航进行点击跳转, 需要注意的是"),e("code",[t._v("export default")]),t._v("的暴露如上面所写,如果结合redux使用,则暴露方式为: "),e("code",[t._v("withRouter(connect(...)(MyComponent))")]),t._v("\n调用"),e("code",[t._v("history")]),t._v("的"),e("code",[t._v("goBack")]),t._v("方法会返回上一历史记录\n调用"),e("code",[t._v("history")]),t._v("的"),e("code",[t._v("push")]),t._v("方法会跳转到目标页,如上面"),e("code",[t._v("goDetail")]),t._v("方法\n跳转传参: "),e("code",[t._v("push()")]),t._v("可以接收一个对象参数,跳转之后,通过"),e("code",[t._v("this.props.location.state")]),t._v("接收")])]),t._v(" "),e("h3",{attrs:{id:"_5-3-侧边栏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-侧边栏"}},[t._v("#")]),t._v(" 5.3 侧边栏")]),t._v(" "),e("h3",{attrs:{id:"_5-4-路由守卫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-路由守卫"}},[t._v("#")]),t._v(" 5.4 路由守卫")]),t._v(" "),e("p",[t._v("在使用 Vue 或者 Angular 的时候，框架提供了路由守卫功能，用来在进入某个路由前进行一些校验工作，如果校验失败，就跳转到 404 或者登陆页面")]),t._v(" "),e("p",[t._v("首先，导航守卫在业务层面可能有三种表现：")]),t._v(" "),e("ol",[e("li",[t._v("根据状态（如登录/未登录）和身份（等级）将路由进行限制。低等级的用户根本没有定义某些路由。")]),t._v(" "),e("li",[t._v("路由在任何时候都是完整的，只是根据状态和身份，将入口进行限制。没有任何操作能够导向没有权限访问的路由地址。")]),t._v(" "),e("li",[t._v("不对入口进行限制，根据状态和身份，将某些特定的路由添加拦截。")])]),t._v(" "),e("p",[t._v("在这几种表现中，2和3并不相互冲突。现在有两种思路实现导航守卫：")]),t._v(" "),e("ul",[e("li",[t._v("写一个路由配置表，写一个高阶组件，导航守卫的功能由高阶组件完成，所有与路由绑定的组件都被高阶组件修饰。（对应业务场景3）")]),t._v(" "),e("li",[t._v("写一个路由配置表，定义一个组件：根据路由配置生成最终的"),e("code",[t._v("<Route>")]),t._v("。对于用户没有权限的路由，可以控制不将其渲染。（对应业务场景1）")]),t._v(" "),e("li",[t._v("写一个路由配置表，写一个高阶组件，将是否渲染入口的逻辑写在高阶组件中，所有可能被隐藏的入口都被此高阶组件修饰。（对应业务场景2）")])]),t._v(" "),e("h2",{attrs:{id:"_6项目添加路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6项目添加路由"}},[t._v("#")]),t._v(" 6项目添加路由")]),t._v(" "),e("p",[t._v("1 安装")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cnpm install -D react-router-dom\n")])])]),e("p",[t._v("2 index.js")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n// 路由使用 history模式\nimport { BrowserRouter } from 'react-router-dom';\n// 路由采用 hash模式\n// import { HashRouter } from 'react-router-dom'\n\nReactDOM.render(\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n, document.getElementById('root'));\n")])])]),e("p",[t._v("3 在根组件app中")]),t._v(" "),e("div",{staticClass:"language-react extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import React from 'react';\nimport {BrowserRouter as Router, Route, Link} from 'react-router-dom';\nimport Login from './pages/loginPage'\nimport UserInfoPage from './pages/user/UserInfoPage'\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <Route exact path='/' component={Login}/>\n      <Route path='/UserInfoPage' component={UserInfoPage}/>\n    </div>\n  );\n}\n\nexport default App;\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);