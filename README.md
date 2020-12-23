## 使用说明
#### <p style="color:red">在不冲突的情况下，直接复制内部文件夹即可</p>

### 当前版本 1.0.3

### 版本介绍
<table cellpadding="5"  style="font-size:16px;width:100%">
	<tr>
		<th style="min-width:60px">版本号</th>
		<th>修改说明</th>
	</tr>
	<tr>
		<td style="color:red">1.0.3</td>
		<td>1、左右滑动触发tab。（考虑到左右滑动通常和列表等一起出现，所以整合到myPull.js中）</td>
	</tr>
	<tr>
		<td></td>
		<td>2、修改全局window对象为globalThis</td>
	</tr>
	<tr>
		<td>1.0.2</td>
		<td>1、app下拉刷新冲突 (动态设置当前页是否可下拉，代码整合到myPull.js中，混入后，使用this.setPullDown(true||false)重置)</td>
	</tr>
	<tr>
		<td>1.0.1</td>
		<td>1、小程序上类名不规范</td>
	</tr>
	<tr>
		<td></td>
		<td>2、store加载到Vue原型上</td>
	</tr>
</table>

### <p style="color:red">使用左右滑动</p>
```
1、混入myPull.js
2、有标签必须使用@touchstart="touchstart" @touchend="touchend"
3、使用swiperight、swipeleft覆盖默认方法
4、和tab进行联动的注意：<my-tabs @change="tapChange" :modelData="modelData" :initIndex="initIndex"></my-tabs> 
		其中modelData和initIndex的变量名为默认值，如需要修改，在混入myPull.js时进行声明（具体参考myPull.js源码）。
```
#### <p style="color:red">Tips：目前myPull.js只整合了左右滑动，请酌情修改。适配情况：h5，微信小程序，5+app，其余情况自行测试。</p>


### 结构介绍
```
1.  /components
	1.1.  myIconfont 自定义字体图标
	1.2.  myLoading  全局loading
	1.3.  myTabs     封装的组件
	1.4.  myUnits    不同的列表子单元
	
2.  /static
	2.1.  css        初始化及常用类名设置
	2.2.  iconfont   字体图标依赖
	2.3.  js
		 2.3.1.  constant.js   全局组件
		 2.3.2.  global.js     全局方法封装（请求等）
		 2.3.3.  myPull.js     封装的pull(整合了左右滑动)
```

## 各组件说明

### 1. myIconfont
#### 暂未完善.......

### 2. myLoading
<table cellpadding="5"  style="font-size:16px;width:100%">
  <tr>
    <th>引用</th>
    <th>说明</th>
  </th>
  <tr>
    <td>my-loading</td>
    <td>由this.$state.commit('switch_loading')控制</td>
  </th>
</table>

### 3. myTabs
<table cellpadding="5"  style="font-size:16px;width:100%">
  <tr>
    <th>参数名称</th>
    <th>是否必填</th>
    <th>说明</th>
  </th>
  <tr>
    <td>modelData</td>
    <td>false</td>
    <td>[{label:"测试"},{label:"测试"},{label:"测试"}]</td>
  </th>
  <tr>
    <td>initIndex</td>
    <td>false</td>
    <td>默认为0</td>
  </th>
  <tr>
    <td>change</td>
    <td>false</td>
    <td>this.$emit("change",<span style="color:red">点击的索引</span>)</td>
  </th>
</table>

### 3. myUnits
#### <p style="color:red">各列表单元需要传入单元数据，然后使用computed来显示</p>


### 借鉴说明
### 1.[自定义loading](https://ext.dcloud.net.cn/plugin?id=101 "点击前往")
### 2.[封装下拉刷新](https://ext.dcloud.net.cn/plugin?id=40 "点击前往")

<p style="font-size:18px">感谢
<span style="color:green">
1046865524@qq.com、取舍、东庐
</span>
的反馈</p># Refresh-bottom-loading-left-and-right-sliding-template
