(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1789:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"feign远程调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feign远程调用"}},[t._v("#")]),t._v(" Feign远程调用")]),t._v(" "),s("p",[t._v("先来看以前利用RestTemplate发起远程调用的代码：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(632),alt:"image-20210714174814204"}})]),t._v(" "),s("p",[t._v("存在下面的问题：")]),t._v(" "),s("p",[t._v("•代码可读性差，编程体验不统一")]),t._v(" "),s("p",[t._v("•参数复杂URL难以维护")]),t._v(" "),s("p",[t._v("Feign是一个声明式的http客户端，官方地址：https://github.com/OpenFeign/feign")]),t._v(" "),s("p",[t._v("其作用就是帮助我们优雅的实现http请求的发送，解决上面提到的问题。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(633),alt:"image-20210714174918088"}})]),t._v(" "),s("h2",{attrs:{id:"_2-1-feign替代resttemplate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-feign替代resttemplate"}},[t._v("#")]),t._v(" 2.1.Feign替代RestTemplate")]),t._v(" "),s("p",[t._v("Fegin的使用步骤如下：")]),t._v(" "),s("h3",{attrs:{id:"_1-引入依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入依赖"}},[t._v("#")]),t._v(" 1）引入依赖")]),t._v(" "),s("p",[t._v("我们在order-service服务的pom文件中引入feign的依赖：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-openfeign"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_2-添加注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加注解"}},[t._v("#")]),t._v(" 2）添加注解")]),t._v(" "),s("p",[t._v("在order-service的启动类添加注解开启Feign的功能：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(634),alt:"image-20210714175102524"}})]),t._v(" "),s("h3",{attrs:{id:"_3-编写feign的客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写feign的客户端"}},[t._v("#")]),t._v(" 3）编写Feign的客户端")]),t._v(" "),s("p",[t._v("在order-service中新建一个接口，内容如下：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pojo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openfeign"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeignClient")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GetMapping")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PathVariable")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FeignClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userservice"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserClient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/user/{id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("这个客户端主要是基于SpringMVC的注解来声明远程调用的信息，比如：")]),t._v(" "),s("ul",[s("li",[t._v("服务名称：userservice")]),t._v(" "),s("li",[t._v("请求方式：GET")]),t._v(" "),s("li",[t._v("请求路径：/user/{id}")]),t._v(" "),s("li",[t._v("请求参数：Long id")]),t._v(" "),s("li",[t._v("返回值类型：User")])]),t._v(" "),s("p",[t._v("这样，Feign就可以帮助我们发送http请求，无需自己使用RestTemplate来发送了。")]),t._v(" "),s("h3",{attrs:{id:"_4-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试"}},[t._v("#")]),t._v(" 4）测试")]),t._v(" "),s("p",[t._v("修改order-service中的OrderService类中的queryOrderById方法，使用Feign客户端代替RestTemplate：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(635),alt:"image-20210714175415087"}})]),t._v(" "),s("p",[t._v("是不是看起来优雅多了。")]),t._v(" "),s("h3",{attrs:{id:"_5-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5）总结")]),t._v(" "),s("p",[t._v("使用Feign的步骤：")]),t._v(" "),s("p",[t._v("① 引入依赖")]),t._v(" "),s("p",[t._v("② 添加@EnableFeignClients注解")]),t._v(" "),s("p",[t._v("③ 编写FeignClient接口")]),t._v(" "),s("p",[t._v("④ 使用FeignClient中定义的方法代替RestTemplate")]),t._v(" "),s("h2",{attrs:{id:"_2-2-自定义配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-自定义配置"}},[t._v("#")]),t._v(" 2.2.自定义配置")]),t._v(" "),s("p",[t._v("Feign可以支持很多的自定义配置，如下表所示：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("feign.Logger.Level")])]),t._v(" "),s("td",[t._v("修改日志级别")]),t._v(" "),s("td",[t._v("包含四种不同的级别：NONE、BASIC、HEADERS、FULL")])]),t._v(" "),s("tr",[s("td",[t._v("feign.codec.Decoder")]),t._v(" "),s("td",[t._v("响应结果的解析器")]),t._v(" "),s("td",[t._v("http远程调用的结果做解析，例如解析json字符串为java对象")])]),t._v(" "),s("tr",[s("td",[t._v("feign.codec.Encoder")]),t._v(" "),s("td",[t._v("请求参数编码")]),t._v(" "),s("td",[t._v("将请求参数编码，便于通过http请求发送")])]),t._v(" "),s("tr",[s("td",[t._v("feign. Contract")]),t._v(" "),s("td",[t._v("支持的注解格式")]),t._v(" "),s("td",[t._v("默认是SpringMVC的注解")])]),t._v(" "),s("tr",[s("td",[t._v("feign. Retryer")]),t._v(" "),s("td",[t._v("失败重试机制")]),t._v(" "),s("td",[t._v("请求失败的重试机制，默认是没有，不过会使用Ribbon的重试")])])])]),t._v(" "),s("p",[t._v("一般情况下，默认值就能满足我们使用，如果要自定义时，只需要创建自定义的@Bean覆盖默认Bean即可。")]),t._v(" "),s("p",[t._v("下面以日志为例来演示如何自定义配置。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-1-配置文件方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-配置文件方式"}},[t._v("#")]),t._v(" 2.2.1.配置文件方式")]),t._v(" "),s("p",[t._v("基于配置文件修改feign的日志级别可以针对单个服务：")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("feign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userservice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 针对某个微服务的配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loggerLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FULL "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  日志级别 ")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("也可以针对所有服务：")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("feign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loggerLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FULL "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  日志级别 ")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("而日志的级别分为四种：")]),t._v(" "),s("ul",[s("li",[t._v("NONE：不记录任何日志信息，这是默认值。")]),t._v(" "),s("li",[t._v("BASIC：仅记录请求的方法，URL以及响应状态码和执行时间")]),t._v(" "),s("li",[t._v("HEADERS：在BASIC的基础上，额外记录了请求和响应的头信息")]),t._v(" "),s("li",[t._v("FULL：记录所有请求和响应的明细，包括头信息、请求体、元数据。")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-2-java代码方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-java代码方式"}},[t._v("#")]),t._v(" 2.2.2.Java代码方式")]),t._v(" "),s("p",[t._v("也可以基于Java代码来修改日志级别，先声明一个类，然后声明一个Logger.Level的对象：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultFeignConfiguration")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Level")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("feignLogLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASIC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 日志级别为BASIC")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("如果要"),s("strong",[t._v("全局生效")]),t._v("，将其放到启动类的@EnableFeignClients这个注解中：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultConfiguration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultFeignConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果是"),s("strong",[t._v("局部生效")]),t._v("，则把它放到对应的@FeignClient这个注解中：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FeignClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userservice"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultFeignConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-3-feign使用优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-feign使用优化"}},[t._v("#")]),t._v(" 2.3.Feign使用优化")]),t._v(" "),s("p",[t._v("Feign底层发起http请求，依赖于其它的框架。其底层客户端实现包括：")]),t._v(" "),s("p",[t._v("•URLConnection：默认实现，不支持连接池")]),t._v(" "),s("p",[t._v("•Apache HttpClient ：支持连接池")]),t._v(" "),s("p",[t._v("•OKHttp：支持连接池")]),t._v(" "),s("p",[t._v("因此提高Feign的性能主要手段就是使用"),s("strong",[t._v("连接池")]),t._v("代替默认的URLConnection。")]),t._v(" "),s("p",[t._v("这里我们用Apache的HttpClient来演示。")]),t._v(" "),s("p",[t._v("1）引入依赖")]),t._v(" "),s("p",[t._v("在order-service的pom文件中引入Apache的HttpClient依赖：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--httpClient的依赖 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.github.openfeign"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("feign-httpclient"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("2）配置连接池")]),t._v(" "),s("p",[t._v("在order-service的application.yml中添加配置：")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("feign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default全局的配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loggerLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BASIC "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志级别，BASIC就是基本的请求和响应信息")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpclient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启feign对HttpClient的支持")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-connections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大的连接数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-connections-per-route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个路径的最大连接数")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("接下来，在FeignClientFactoryBean中的loadBalance方法中打断点：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(636),alt:"image-20210714185925910"}})]),t._v(" "),s("p",[t._v("Debug方式启动order-service服务，可以看到这里的client，底层就是Apache HttpClient：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(637),alt:"image-20210714190041542"}})]),t._v(" "),s("p",[t._v("总结，Feign的优化：")]),t._v(" "),s("p",[t._v("1.日志级别尽量用basic")]),t._v(" "),s("p",[t._v("2.使用HttpClient或OKHttp代替URLConnection")]),t._v(" "),s("p",[t._v("①  引入feign-httpClient依赖")]),t._v(" "),s("p",[t._v("②  配置文件开启httpClient功能，设置连接池参数")]),t._v(" "),s("h2",{attrs:{id:"_2-4-最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-最佳实践"}},[t._v("#")]),t._v(" 2.4.最佳实践")]),t._v(" "),s("p",[t._v("所谓最近实践，就是使用过程中总结的经验，最好的一种使用方式。")]),t._v(" "),s("p",[t._v("自习观察可以发现，Feign的客户端与服务提供者的controller代码非常相似：")]),t._v(" "),s("p",[t._v("feign客户端：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(638),alt:"image-20210714190542730"}})]),t._v(" "),s("p",[t._v("UserController：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(639),alt:"image-20210714190528450"}})]),t._v(" "),s("p",[t._v("有没有一种办法简化这种重复的代码编写呢？")]),t._v(" "),s("h3",{attrs:{id:"_2-4-1-继承方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-继承方式"}},[t._v("#")]),t._v(" 2.4.1.继承方式")]),t._v(" "),s("p",[t._v("一样的代码可以通过继承来共享：")]),t._v(" "),s("p",[t._v("1）定义一个API接口，利用定义方法，并基于SpringMVC注解做声明。")]),t._v(" "),s("p",[t._v("2）Feign客户端和Controller都集成改接口")]),t._v(" "),s("p",[s("img",{attrs:{src:a(640),alt:"image-20210714190640857"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("简单")]),t._v(" "),s("li",[t._v("实现了代码共享")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("服务提供方、服务消费方紧耦合")])]),t._v(" "),s("li",[s("p",[t._v("参数列表中的注解映射并不会继承，因此Controller中必须再次声明方法、参数列表、注解")])])]),t._v(" "),s("h3",{attrs:{id:"_2-4-2-抽取方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-抽取方式"}},[t._v("#")]),t._v(" 2.4.2.抽取方式")]),t._v(" "),s("p",[t._v("将Feign的Client抽取为独立模块，并且把接口有关的POJO、默认的Feign配置都放到这个模块中，提供给所有消费者使用。")]),t._v(" "),s("p",[t._v("例如，将UserClient、User、Feign的默认配置都抽取到一个feign-api包中，所有微服务引用该依赖包，即可直接使用。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(641),alt:"image-20210714214041796"}})]),t._v(" "),s("h3",{attrs:{id:"_2-4-3-实现基于抽取的最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-3-实现基于抽取的最佳实践"}},[t._v("#")]),t._v(" 2.4.3.实现基于抽取的最佳实践")]),t._v(" "),s("h4",{attrs:{id:"_1-抽取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-抽取"}},[t._v("#")]),t._v(" 1）抽取")]),t._v(" "),s("p",[t._v("首先创建一个module，命名为feign-api：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(642),alt:"image-20210714204557771"}})]),t._v(" "),s("p",[t._v("项目结构：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(643),alt:"image-20210714204656214"}})]),t._v(" "),s("p",[t._v("在feign-api中然后引入feign的starter依赖")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-openfeign"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("然后，order-service中编写的UserClient、User、DefaultFeignConfiguration都复制到feign-api项目中")]),t._v(" "),s("p",[s("img",{attrs:{src:a(644),alt:"image-20210714205221970"}})]),t._v(" "),s("h4",{attrs:{id:"_2-在order-service中使用feign-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在order-service中使用feign-api"}},[t._v("#")]),t._v(" 2）在order-service中使用feign-api")]),t._v(" "),s("p",[t._v("首先，删除order-service中的UserClient、User、DefaultFeignConfiguration等类或接口。")]),t._v(" "),s("p",[t._v("在order-service的pom文件中中引入feign-api的依赖：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("cn.xxl.demo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("feign-api"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("修改order-service中的所有与上述三个组件有关的导包部分，改成导入feign-api中的包")]),t._v(" "),s("h4",{attrs:{id:"_3-重启测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启测试"}},[t._v("#")]),t._v(" 3）重启测试")]),t._v(" "),s("p",[t._v("重启后，发现服务报错了：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(645),alt:"image-20210714205623048"}})]),t._v(" "),s("p",[t._v("这是因为UserClient现在在cn.xxl.feign.clients包下，")]),t._v(" "),s("p",[t._v("而order-service的@EnableFeignClients注解是在cn.xxl.order包下，不在同一个包，无法扫描到UserClient。")]),t._v(" "),s("h4",{attrs:{id:"_4-解决扫描包问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-解决扫描包问题"}},[t._v("#")]),t._v(" 4）解决扫描包问题")]),t._v(" "),s("p",[t._v("方式一：")]),t._v(" "),s("p",[t._v("指定Feign应该扫描的包：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePackages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cn.xxl.feign.clients"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("方式二：")]),t._v(" "),s("p",[t._v("指定需要加载的Client接口：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports},632:function(t,s,a){t.exports=a.p+"assets/img/image-20210714174814204.d4ec81a2.png"},633:function(t,s,a){t.exports=a.p+"assets/img/image-20210714174918088.77254897.png"},634:function(t,s,a){t.exports=a.p+"assets/img/image-20210714175102524.7c5ca7c2.png"},635:function(t,s,a){t.exports=a.p+"assets/img/image-20210714175415087.27e12a1f.png"},636:function(t,s,a){t.exports=a.p+"assets/img/image-20210714185925910.33c55a31.png"},637:function(t,s,a){t.exports=a.p+"assets/img/image-20210714190041542.393b679c.png"},638:function(t,s,a){t.exports=a.p+"assets/img/image-20210714190542730.8a53d397.png"},639:function(t,s,a){t.exports=a.p+"assets/img/image-20210714190528450.075138c8.png"},640:function(t,s,a){t.exports=a.p+"assets/img/image-20210714190640857.c3f5fd4b.png"},641:function(t,s,a){t.exports=a.p+"assets/img/image-20210714214041796.ea010237.png"},642:function(t,s,a){t.exports=a.p+"assets/img/image-20210714204557771.a97c37e8.png"},643:function(t,s,a){t.exports=a.p+"assets/img/image-20210714204656214.1a343762.png"},644:function(t,s,a){t.exports=a.p+"assets/img/image-20210714205221970.a4932f25.png"},645:function(t,s,a){t.exports=a.p+"assets/img/image-20210714205623048.a49cf7ff.png"}}]);