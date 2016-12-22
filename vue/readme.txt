vue组件编译的注意事项
1.需要安装vue-loader vue-babel-preset-stage-0 
2. .babellrc的配置文件需要配置stage0 


如果想编译scss文件的话  需要在style加上属性lang:sass  而不是scss

scope代表当前样式只应用于当前组件  避免全局污染



问题？

关于打包

1.为什么打包的文件很大  因为webpack设置的devtool了 所以很大，不要设置  http://www.jianshu.com/p/a64735eb0e2b
2.引用的vue无法使用 页面单独引用可以使用
3.组件内部如何引用外部scss样式 @import "name.scss"
4.css引用的图片路径问题 output中的publicPath的配置，如果是cdn静态资源库怎么办？如何解决本地地址  测试地址 线上地址  cdn地址不同的问题



path.resolve需要注意第二个路径为相对路径



学习一个框架，首先是需要认真阅读文档，
每一个细节都要完全理解，同时要知道所以然，有些地方需要写简单的原理实现，便于加深理解
知其然，是为了理解api，知其所以然，是为了理解原理
比如class和style的绑定，具体是怎么实现的，自己能写出来简单的实现么？（ 都是通过eval实现的 ）



如何用正则匹配html  进而进行解析？
这些都是常见的细节？理解了 会加深很多方面的理解



关于vue

1.路由不能写在组建内部，必须写在主文件main里面  而且需要这样用  Vue.use（vueRouter）
2.路由引用的组件，不能用

import Goods from ./asd/goods.vue
{path:"/goods",component:{template:Goods}}

而应该
import Goods from ./asd/goods.vue
{path:"/goods",component:Goods}


3.元素查找

只要涉及到查找元素，都需要在mounted里面调用；
如果涉及到数据读取，异步读取数据后需要调用this.$nextTick（callback）在callback里面写对应的逻辑
不然找不到元素


4.循环
v－for＝“（item,index）in lists”    通过一个对象的属性来迭代
v-for="item of lists"  通过对象的列表进行遍历

整数迭代  v-for="n in 10"

组件迭代 需要把数据绑定到组件上
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index">
</my-component>


注意：
1.通过索引修改数组的某一项时并不会触发视图更新
可以通过set触发


5.动画的关键在于
元素的初始化状态就要设置成动画完成时候的状态，因为最初状态的v-show为false  虽然位置一样，但是是非显示状态


6.如何解决组件之间的通信？

父组件与子组件之间的传递和接收参数
：propName
props:{
	propName:{
		type:....
	}
}

7.子组件接收参数如果为对象或者数组，default需要用函数return  不能直接写为default：｛｝或者 default：［］
所有子组件的data值也需要返回，而不是直接定义为｛｝；


8.如果计算属性和和层次很深的数据关联，如果深层次中的数组中的一条发生改变，计算属性也会改变么？
如果是在传递到子组件中的数据，在子组件中修改，父组件的计算属性会改变么？
怎么实现的？



9.两个基础属性 firstname lastname   一个计算属性  fullname
当firstname和lastname都发生改变 那么fullname也会发生改变，如果要想让fullname发生改变，firstname和lastname也自动发生改变，需要为fullname设置一个setter
具体可以看文档的教程部分？



10.既然有计算属性，watch属性存在的意义？
当数据发生改变的时候，不需要计算属性，而是做一些简单的操作，比如异步获取数据，就很有用。


11.事件
当需要传递数据和原生事件对象的时候 如下使用：
:click="handler('arg1',$event)"

事件修饰符
.stop
.prevent
.capture  使用事件捕获方式 从最顶端的document上的事件开始执行
.self     在元素本身执行才可以，在子元素上不行
.once   执行一次 就解除绑定事件

理解了为什么大部分浏览器都是使用时间冒泡的方式，因为点击的都是具体的元素，最好不要葱body上开始执行事件




4.如何解决热加载的问题？


5.如何解决前后端完全分离的问题？


6。如何解决项目过大导致的入口文件过大问题？因为随着项目的逻辑越来越复杂，组件会越来越多，打包文件会越来越大


7.如何实现完全自适应布局？
