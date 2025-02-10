(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1725:function(a,t,v){"use strict";v.r(t);var s=v(3),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"jvm监控及诊断工具之gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm监控及诊断工具之gui"}},[a._v("#")]),a._v(" JVM监控及诊断工具之GUI")]),a._v(" "),t("h3",{attrs:{id:"工具概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具概述"}},[a._v("#")]),a._v(" 🌵工具概述")]),a._v(" "),t("p",[a._v("使用命令行工具或组合能帮助获取目标Java应用性能相关的基础信息，但它们存在下列局限：")]),a._v(" "),t("ol",[t("li",[a._v("无法获取方法级别的分析数据，如方法间的调用关系、各方法的调用次数和调用时间等（这对定位应用性能瓶颈至关重要）。")]),a._v(" "),t("li",[a._v("要求用户登录到目标 Java 应用所在的宿主机上，使用起来不是很方便。")]),a._v(" "),t("li",[a._v("分析数据通过终端输出，结果展示不够直观。")])]),a._v(" "),t("p",[a._v("为此，JDK提供了一些内存泄漏的分析工具，如jconsole，jvisualvm等，用于辅助开发人员定位问题，但是这些工具很多时候并不足以满足快速定位的需求。所以这里我们介绍的工具相对多一些、丰富一些。")]),a._v(" "),t("h3",{attrs:{id:"工具目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具目录"}},[a._v("#")]),a._v(" 🌵工具目录")]),a._v(" "),t("h4",{attrs:{id:"jdk自带的工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk自带的工具"}},[a._v("#")]),a._v(" JDK自带的工具")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("jconsole")]),a._v("：Java Monitoring and Management Console是从java5开始，在JDK中自带的java监控和管理控制台，用于对JVM中内存，线程和类等的监控，包括Java应用程序的运行概况、监控堆信息、永久区（或元空间）使用情况、类加载情况等。")]),a._v(" "),t("li",[t("strong",[a._v("Visual VM")]),a._v("：JDK自带全能工具，JDK9后成为独立项目，它提供了一个可视界面，用于查看Java虚拟机上运行的基于Java技术的应用程序的详细信息，可以分析内存快照、线程快照；监控内存变化、GC变化等。")]),a._v(" "),t("li",[t("strong",[a._v("JMC")]),a._v("：Java Mission Control，内置Java Flight Recorder。能够以极低的性能开销收集Java虚拟机的性能数据。")])]),a._v(" "),t("h4",{attrs:{id:"第三方工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方工具"}},[a._v("#")]),a._v(" 第三方工具")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("MAT")]),a._v("：MAT（Memory Analyzer Tool）是基于Eclipse的内存分析工具，是一个快速、功能丰富的Java heap分析工具，它可以帮助我们查找内存泄漏和减少内存消耗。")]),a._v(" "),t("li",[t("strong",[a._v("JProfiler")]),a._v("：商业软件，需要付费。功能强大。")]),a._v(" "),t("li",[t("strong",[a._v("GChisto")]),a._v("：一款专业分析gc日志的工具。")]),a._v(" "),t("li",[t("strong",[a._v("IBM（IBM Thread and Monitor Dump Analyzer for Java）")])]),a._v(" "),t("li",[t("strong",[a._v("Arthas")]),a._v("：阿里开源的线上监控诊断产品，通过全局视角实时查看应用 load、内存、gc、线程的状态信息，并能在不修改应用代码的情况下，对业务问题进行诊断，包括查看方法调用的出入参、异常，监测方法执行耗时，类加载信息等。")])]),a._v(" "),t("h4",{attrs:{id:"在线工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在线工具"}},[a._v("#")]),a._v(" 在线工具")]),a._v(" "),t("ol",[t("li",[t("p",[t("strong",[a._v("gceasy.io")]),a._v("：需要传入JVM相关的数据，可以通过jstat命令生成导出文件，上传文件分析。")]),a._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("jps\njstack 16064 > yootk_stack.log\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])]),a._v(" "),t("h4",{attrs:{id:"idea插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idea插件"}},[a._v("#")]),a._v(" IDEA插件")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("JDK VisualGC")]),a._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 自定义VM选项\n--add-exports=jdk.internal.jvmstat/sun.jvmstat.monitor=ALL-UNNAMED\n--add-exports=jdk.internal.jvmstat/sun.jvmstat.monitor.event=ALL-UNNAMED\n--add-exports=jdk.internal.jvmstat/sun.jvmstat.perfdata.monitor=ALL-UNNAMED\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])])])]),a._v(" "),t("h2",{attrs:{id:"jconsole"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jconsole"}},[a._v("#")]),a._v(" JConsole")]),a._v(" "),t("p",[a._v("jconsole：从Java5开始，在JDK中自带的java监控和管理控制台。用于对JVM中内存、线程和类等的监控，是一个基于JMX（java management extensions）的GUI性能监控工具。")]),a._v(" "),t("p",[a._v("官方地址：https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html")]),a._v(" "),t("h2",{attrs:{id:"visual-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visual-vm"}},[a._v("#")]),a._v(" Visual VM")]),a._v(" "),t("p",[a._v("Visual VM是一个功能强大的多合一故障诊断和性能监控的可视化工具。它集成了多个JDK命令行工具，使用Visual VM可用于显示虚拟机进程及进程的配置和环境信息（jps，jinfo），监视应用程序的CPU、GC、堆、方法区及线程的信息（jstat、jstack）等，甚至代替JConsole。在JDK 6 Update 7以后，Visual VM便作为JDK的一部分发布（VisualVM 在JDK／bin目录下）即：它完全免费。")]),a._v(" "),t("p",[a._v("主要功能：")]),a._v(" "),t("ol",[t("li",[a._v("生成/读取堆内存/线程快照")]),a._v(" "),t("li",[a._v("查看JVM参数和系统属性")]),a._v(" "),t("li",[a._v("查看运行中的虚拟机进程")]),a._v(" "),t("li",[a._v("程序资源的实时监控")]),a._v(" "),t("li",[a._v("JMX代理连接、远程环境监控、CPU分析和内存分析")])]),a._v(" "),t("p",[a._v("官方地址：https://visualvm.github.io/index.html")]),a._v(" "),t("h2",{attrs:{id:"eclipse-mat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-mat"}},[a._v("#")]),a._v(" Eclipse MAT")]),a._v(" "),t("p",[a._v("MAT（Memory Analyzer Tool）工具是一款功能强大的Java堆内存分析器。可以用于查找内存泄漏以及查看内存消耗情况。MAT是基于Eclipse开发的，不仅可以单独使用，还可以作为插件的形式嵌入在Eclipse中使用。是一款免费的性能分析工具，使用起来非常方便。")]),a._v(" "),t("p",[a._v("MAT可以分析heap dump文件。在进行内存分析时，只要获得了反映当前设备内存映像的hprof文件，通过MAT打开就可以直观地看到当前的内存信息。一般说来，这些内存信息包含：")]),a._v(" "),t("ul",[t("li",[a._v("所有的对象信息，包括对象实例、成员变量、存储于栈中的基本类型值和存储于堆中的其他对象的引用值。")]),a._v(" "),t("li",[a._v("所有的类信息，包括classloader、类名称、父类、静态变量等")]),a._v(" "),t("li",[a._v("GCRoot到所有的这些对象的引用路径")]),a._v(" "),t("li",[a._v("线程信息，包括线程的调用栈及此线程的线程局部变量（TLS）")])]),a._v(" "),t("p",[a._v("MAT 不是一个万能工具，它并不能处理所有类型的堆存储文件。但是比较主流的厂家和格式，例如Sun，HP，SAP 所采用的 HPROF 二进制堆存储文件，以及 IBM的 PHD 堆存储文件等都能被很好的解析。")]),a._v(" "),t("p",[a._v("最吸引人的还是能够快速为开发人员生成内存泄漏报表，方便定位问题和分析问题。虽然MAT有如此强大的功能，但是内存分析也没有简单到一键完成的程度，很多内存问题还是需要我们从MAT展现给我们的信息当中通过经验和直觉来判断才能发现。")]),a._v(" "),t("p",[a._v("官方地址： https://www.eclipse.org/mat/downloads.php")]),a._v(" "),t("h2",{attrs:{id:"jprofiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jprofiler"}},[a._v("#")]),a._v(" JProfiler")]),a._v(" "),t("p",[a._v("在运行Java的时候有时候想测试运行时占用内存情况，这时候就需要使用测试工具查看了。在eclipse里面有 Eclipse Memory Analyzer tool（MAT）插件可以测试，而在IDEA中也有这么一个插件，就是JProfiler。JProfiler 是由 ej-technologies 公司开发的一款 Java 应用性能诊断工具。功能强大，但是收费。")]),a._v(" "),t("p",[a._v("特点：")]),a._v(" "),t("ul",[t("li",[a._v("使用方便、界面操作友好（简单且强大）")]),a._v(" "),t("li",[a._v("对被分析的应用影响小（提供模板）")]),a._v(" "),t("li",[a._v("CPU，Thread，Memory分析功能尤其强大")]),a._v(" "),t("li",[a._v("支持对jdbc，noSql，jsp，servlet，socket等进行分析")]),a._v(" "),t("li",[a._v("支持多种模式（离线，在线）的分析")]),a._v(" "),t("li",[a._v("支持监控本地、远程的JVM")]),a._v(" "),t("li",[a._v("跨平台，拥有多种操作系统的安装版本")])]),a._v(" "),t("p",[a._v("主要功能：")]),a._v(" "),t("ol",[t("li",[a._v("方法调用：对方法调用的分析可以帮助您了解应用程序正在做什么，并找到提高其性能的方法。")]),a._v(" "),t("li",[a._v("内存分配：通过分析堆上对象、引用链和垃圾收集能帮您修复内存泄露问题，优化内存使用。")]),a._v(" "),t("li",[a._v("线程和锁：JProfiler提供多种针对线程和锁的分析视图助您发现多线程问题。")]),a._v(" "),t("li",[a._v("高级子系统：许多性能问题都发生在更高的语义级别上。例如，对于JDBC调用，您可能希望找出执行最慢的SQL语句。JProfiler支持对这些子系统进行集成分析。")])]),a._v(" "),t("p",[a._v("官网地址：https://www.ej-technologies.com/products/jprofiler/overview.html")]),a._v(" "),t("p",[a._v("数据采集方式：")]),a._v(" "),t("p",[a._v("JProfier数据采集方式分为两种：Sampling（样本采集）和Instrumentation（重构模式）")]),a._v(" "),t("p",[a._v("Instrumentation：这是JProfiler全功能模式。在class加载之前，JProfier把相关功能代码写入到需要分析的class的bytecode中，对正在运行的jvm有一定影响。")]),a._v(" "),t("ul",[t("li",[a._v("优点：功能强大。在此设置中，调用堆栈信息是准确的。")]),a._v(" "),t("li",[a._v("缺点：若要分析的class较多，则对应用的性能影响较大，CPU开销可能很高（取决于Filter的控制）。因此使用此模式一般配合Filter使用，只对特定的类或包进行分析")])]),a._v(" "),t("p",[a._v("Sampling：类似于样本统计，每隔一定时间（5ms）将每个线程栈中方法栈中的信息统计出来。")]),a._v(" "),t("ul",[t("li",[a._v("优点：对CPU的开销非常低，对应用影响小（即使你不配置任何Filter）")]),a._v(" "),t("li",[a._v("缺点：一些数据／特性不能提供（例如：方法的调用次数、执行时间）")])]),a._v(" "),t("p",[a._v("注：JProfiler本身没有指出数据的采集类型，这里的采集类型是针对方法调用的采集类型。因为JProfiler的绝大多数核心功能都依赖方法调用采集的数据，所以可以直接认为是JProfiler的数据采集类型。")]),a._v(" "),t("h2",{attrs:{id:"arthas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[a._v("#")]),a._v(" Arthas")]),a._v(" "),t("p",[a._v("上述工具都必须在服务端项目进程中配置相关的监控参数，然后工具通过远程连接到项目进程，获取相关的数据。这样就会带来一些不便，比如线上环境的网络是隔离的，本地的监控工具根本连不上线上环境。并且类似于Jprofiler这样的商业工具，是需要付费的。")]),a._v(" "),t("p",[a._v("那么有没有一款工具不需要远程连接，也不需要配置监控参数，同时也提供了丰富的性能监控数据呢？")]),a._v(" "),t("p",[a._v("阿里巴巴开源的性能分析神器Arthas应运而生。")]),a._v(" "),t("p",[a._v("Arthas是Alibaba开源的Java诊断工具，深受开发者喜爱。在线排查问题，无需重启；动态跟踪Java代码；实时监控JVM状态。Arthas 支持JDK 6＋，支持Linux／Mac／Windows，采用命令行交互模式，同时提供丰富的 Tab 自动补全功能，进一步方便进行问题的定位和诊断。当你遇到以下类似问题而束手无策时，Arthas可以帮助你解决：")]),a._v(" "),t("ul",[t("li",[a._v("这个类从哪个 jar 包加载的？为什么会报各种类相关的 Exception？")]),a._v(" "),t("li",[a._v("我改的代码为什么没有执行到？难道是我没 commit？分支搞错了？")]),a._v(" "),t("li",[a._v("遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗？")]),a._v(" "),t("li",[a._v("线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！")]),a._v(" "),t("li",[a._v("是否有一个全局视角来查看系统的运行状况？")]),a._v(" "),t("li",[a._v("有什么办法可以监控到JVM的实时运行状态？")]),a._v(" "),t("li",[a._v("怎么快速定位应用的热点，生成火焰图？")])]),a._v(" "),t("blockquote",[t("p",[a._v("官方地址：https://arthas.aliyun.com/doc/quick-start.html")])]),a._v(" "),t("p",[a._v("安装方式：如果速度较慢，可以尝试国内的码云Gitee下载。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://io/arthas/arthas-boot.jar\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://arthas/gitee/io/arthas-boot.jar\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("Arthas只是一个java程序，所以可以直接用java -jar运行。")]),a._v(" "),t("p",[a._v("除了在命令行查看外，Arthas目前还支持 Web Console。在成功启动连接进程之后就已经自动启动,可以直接访问 http://127.0.0.1:8563/ 访问，页面上的操作模式和控制台完全一样。")]),a._v(" "),t("h2",{attrs:{id:"java-misssion-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-misssion-control"}},[a._v("#")]),a._v(" Java Misssion Control")]),a._v(" "),t("p",[a._v("在Oracle收购Sun之前，Oracle的JRockit虚拟机提供了一款叫做 JRockit Mission Control 的虚拟机诊断工具。")]),a._v(" "),t("p",[a._v("在Oracle收购sun之后，Oracle公司同时拥有了Hotspot和 JRockit 两款虚拟机。根据Oracle对于Java的战略，在今后的发展中，会将JRokit的优秀特性移植到Hotspot上。其中一个重要的改进就是在Sun的JDK中加入了JRockit的支持。")]),a._v(" "),t("p",[a._v("在Oracle JDK 7u40之后，Mission Control这款工具己经绑定在Oracle JDK中发布。")]),a._v(" "),t("p",[a._v("自Java11开始，本节介绍的JFR己经开源。但在之前的Java版本，JFR属于Commercial Feature通过Java虚拟机参数-XX:+UnlockCommercialFeatures 开启。")]),a._v(" "),t("p",[a._v("Java Mission Control（简称JMC) ， Java官方提供的性能强劲的工具，是一个用于对 Java应用程序进行管理、监视、概要分析和故障排除的工具套件。它包含一个GUI客户端以及众多用来收集Java虚拟机性能数据的插件如 JMX Console（能够访问用来存放虚拟机齐个于系统运行数据的MXBeans）以及虚拟机内置的高效 profiling 工具 Java Flight Recorder（JFR）。")]),a._v(" "),t("p",[a._v("JMC的另一个优点就是：采用取样，而不是传统的代码植入技术，对应用性能的影响非常非常小，完全可以开着JMC来做压测（唯一影响可能是 full gc 多了）。")]),a._v(" "),t("p",[a._v("官方地址：https://github.com/JDKMissionControl/jmc")]),a._v(" "),t("h2",{attrs:{id:"其他工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他工具"}},[a._v("#")]),a._v(" 其他工具")]),a._v(" "),t("h3",{attrs:{id:"flame-graphs-火焰图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flame-graphs-火焰图"}},[a._v("#")]),a._v(" Flame Graphs（火焰图）")]),a._v(" "),t("p",[a._v("在追求极致性能的场景下，了解你的程序运行过程中cpu在干什么很重要，火焰图就是一种非常直观的展示CPU在程序整个生命周期过程中时间分配的工具。火焰图对于现代的程序员不应该陌生，这个工具可以非常直观的显示出调用找中的CPU消耗瓶颈。")]),a._v(" "),t("p",[a._v("网上的关于Java火焰图的讲解大部分来自于Brenden Gregg的博客 "),t("a",{attrs:{href:"http://new.brendangregg.com/flamegraphs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://new.brendangregg.com/flamegraphs.html "),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("火焰图，简单通过x轴横条宽度来度量时间指标，y轴代表线程栈的层次。")]),a._v(" "),t("h3",{attrs:{id:"tprofiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tprofiler"}},[a._v("#")]),a._v(" Tprofiler")]),a._v(" "),t("p",[a._v("案例： 使用JDK自身提供的工具进行JVM调优可以将下 TPS 由2.5提升到20（提升了7倍），并准确 定位系统瓶颈。")]),a._v(" "),t("p",[a._v("系统瓶颈有：应用里释态对象不是太多、有大量的业务线程在频繁创建一些生命周期很长的临时对象，代码里有问题。")]),a._v(" "),t("p",[a._v("那么，如何在海量业务代码里边准确定位这些性能代码？这里使用阿里开源工具 Tprofiler 来定位 这些性能代码，成功解决掉了GC 过于频繁的性能瓶预，并最终在上次优化的基础上将 TPS 再提升了4倍，即提升到100。")]),a._v(" "),t("ul",[t("li",[a._v("Tprofiler配置部署、远程操作、 日志阅谈都不太复杂，操作还是很简单的。但是其却是能够 起到一针见血、立竿见影的效果，帮我们解决了GC过于频繁的性能瓶预。")]),a._v(" "),t("li",[a._v("Tprofiler最重要的特性就是能够统汁出你指定时间段内 JVM 的 top method 这些 top method 极有可能就是造成你 JVM 性能瓶颈的元凶。这是其他大多数 JVM 调优工具所不具备的，包括 JRockit Mission Control。JRokit 首席开发者 Marcus Hirt 在其私人博客《 Lom Overhead Method Profiling cith Java Mission Control》下的评论中曾明确指出  JRMC 井不支持 TOP 方法的统计。")])]),a._v(" "),t("p",[a._v("官方地址：http://github.com/alibaba/Tprofiler")]),a._v(" "),t("h3",{attrs:{id:"btrace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btrace"}},[a._v("#")]),a._v(" Btrace")]),a._v(" "),t("p",[a._v("常见的动态追踪工具有BTrace、HouseHD（该项目己经停止开发）、Greys-Anatomy（国人开发 个人开发者）、Byteman（JBoss出品），注意Java运行时追踪工具井不限干这几种，但是这几个是相对比较常用的。")]),a._v(" "),t("p",[a._v("BTrace是SUN Kenai 云计算开发平台下的一个开源项目，旨在为java提供安全可靠的动态跟踪分析工具。官方定义是一个 Java 平台的安全的动态追踪工具，可以用来动态地追踪一个运行的 Java 程序。BTrace动态调整目标应用程序的类以注入跟踪代码（“字节码跟踪“）。")]),a._v(" "),t("h3",{attrs:{id:"yourkit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yourkit"}},[a._v("#")]),a._v(" YourKit")]),a._v(" "),t("h3",{attrs:{id:"jprobe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jprobe"}},[a._v("#")]),a._v(" JProbe")]),a._v(" "),t("h3",{attrs:{id:"spring-insight"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-insight"}},[a._v("#")]),a._v(" Spring Insight")]),a._v(" "),t("h2",{attrs:{id:"推荐资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐资料"}},[a._v("#")]),a._v(" 推荐资料")]),a._v(" "),t("p",[a._v("[1]. https://www.bilibili.com/video/BV1oE411t7pZ")]),a._v(" "),t("p",[a._v("[2]. https://www.bilibili.com/video/BV1BT411A738")]),a._v(" "),t("p",[a._v("[3]. https://www.yuque.com/u21195183/jvm/lv1zot#6fd1f587")])])}),[],!1,null,null,null);t.default=r.exports}}]);