import{_ as s,r as a,o as r,c,a as e,b as n,d as i,e as d}from"./app-yCpfu1BI.js";const v={},o=e("h1",{id:"快速入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速入门"},[e("span",null,"快速入门")])],-1),t=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),u={href:"https://github.com/litongjava/tools-ocr/releases/tag/v2.2.9",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"下载安装即可,没有什么可以讲解的",-1),b=e("h2",{id:"添加服务模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加服务模型"},[e("span",null,"添加服务模型")])],-1),p=e("blockquote",null,[e("p",null,"无需阅读,已经内置 server 端模型")],-1),h=e("p",null,"为了减少安装的包的体积,默认内置内置了移动端模型.移动端模型的推理速度较快,但是有些生僻字无法识别,下面介绍如何添加服务端模型解决这一问题",-1),_=e("h3",{id:"下载-paddle-ocr-服务端模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-paddle-ocr-服务端模型"},[e("span",null,"下载 paddle ocr 服务端模型")])],-1),g=e("p",null,"paddle paddle 模型下载",-1),f={href:"https://github.com/PaddlePaddle/PaddleOCR/blob/main/doc/doc_ch/models_list.md#1.1",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"下面直接给成服务端模型下载地址",-1),j={href:"https://paddleocr.bj.bcebos.com/PP-OCRv4/chinese/ch_PP-OCRv4_det_server_infer.tar",target:"_blank",rel:"noopener noreferrer"},k={href:"https://paddleocr.bj.bcebos.com/PP-OCRv4/chinese/ch_PP-OCRv4_rec_server_infer.tar",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"模型转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模型转换"},[e("span",null,"模型转换")])],-1),R=e("p",null,"下载的模型默认格式是 paddle paddle 格式,为了实现较快的推理和速度和在 cpu 上进行推理,需要将 paddle 格式的模型转为 onnx 格式",-1),C=e("h4",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介"},[e("span",null,"简介")])],-1),P={href:"https://github.com/PaddlePaddle/Paddle2ONNX",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"paddle2onnx",-1),y={href:"https://github.com/RapidAI/PaddleOCRModelConverter",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,[n("主要有两种使用方式： "),e("ul",null,[e("li",null,"方法一：在线转换，借助魔搭和 Hugging Face 两个平台，搭建在线转换 demo；"),e("li",null,"方法二：离线转换，pip 安装该工具，即可本地转换使用。")])],-1),E=e("h4",{id:"在线快速转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线快速转换"},[e("span",null,"在线快速转换")])],-1),L={href:"https://www.modelscope.cn/studios/liekkas/PaddleOCRModelConverter/summary",target:"_blank",rel:"noopener noreferrer"},N={href:"https://huggingface.co/spaces/SWHL/PaddleOCRModelConverter",target:"_blank",rel:"noopener noreferrer"},A=e("h4",{id:"离线转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#离线转换"},[e("span",null,"离线转换")])],-1),M={href:"https://github.com/RapidAI/PaddleOCRModelConverter",target:"_blank",rel:"noopener noreferrer"},I=d(`<h4 id="替换模型" tabindex="-1"><a class="header-anchor" href="#替换模型"><span>替换模型</span></a></h4><p>进入目录替换模型即可,笔者 windows 的目录是</p><ul><li>D:\\dev_program\\treehole-v2.2.9-windows-x64-cpu\\app\\models</li></ul><p>注意下载模型后需要重名模型存放的对应的目录,笔者的目录如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
├── ch_PP-OCRv4_det_infer
│   ├── inference.onnx
├── ch_PP-OCRv4_rec_infer
│   ├── dict.txt
│   ├── inference.onnx
├── readme.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="已有-onnx-模型下载" tabindex="-1"><a class="header-anchor" href="#已有-onnx-模型下载"><span>已有 onnx 模型下载</span></a></h3><p>已经将部分转换好的 ONNX 模型做了整理，提供了 Hugging Face、Google 网盘和百度网盘两个下载途径。</p>`,7),B={href:"https://huggingface.co/SWHL/RapidOCR/tree/main",target:"_blank",rel:"noopener noreferrer"},H={href:"https://drive.google.com/drive/folders/1x_a9KpCo_1blxH1xFOfgKVkw1HYRVywY?usp=sharing",target:"_blank",rel:"noopener noreferrer"},q={href:"https://pan.baidu.com/s/1CHOXNJLZundoV_8bNpcpWQ?pwd=9h6g",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"服务端口接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务端口接口"},[e("span",null,"服务端口接口")])],-1),T=e("p",null,"有些时候需要中服务端使用 ocr 识别,笔者退出了一个服务端项目,对外提供了 http 接口,开源地址如下",-1),J={href:"https://github.com/litongjava/ai-server/tree/main/paddle-ocr",target:"_blank",rel:"noopener noreferrer"},V=d(`<h2 id="二次开发" tabindex="-1"><a class="header-anchor" href="#二次开发"><span>二次开发</span></a></h2><h3 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构"><span>代码结构</span></a></h3><p>这是一个典型的 Maven 项目结构，其中：</p><ul><li><code>pom.xml</code>: 这是 Maven 的项目对象模型文件，它包含了项目的依赖、插件和其他配置信息。</li><li><code>src</code>: 这是源代码目录，通常包含主代码 (<code>src/main</code>) 和测试代码 (<code>src/test</code>)。</li></ul><p>从 <code>pom.xml</code> 文件的部分内容中，</p><ol><li>项目的 <code>groupId</code> 是 <code>com.luooqi</code>，而 <code>artifactId</code> 是 <code>tool-ocr</code>。这意味着该项目是由 <code>luooqi</code> 开发的一个名为 <code>tool-ocr</code> 的项目。</li><li>项目的版本信息由一个属性 <code>soft.version</code> 定义，其值为 <code>1.2.6</code>。</li><li>项目有几个依赖项，包括但不限于： <ul><li><code>jnativehook</code>：可能与键盘和鼠标挂钩有关，允许应用程序全局监听键盘和鼠标事件。</li><li><code>hutool-all</code>：Hutool 是一个 Java 工具包，包含了一些常用的 Java 功能模块。</li><li><code>imgscalr-lib</code>：这是一个简单的 Java 图片缩放库。</li></ul></li></ol><p>项目的 <code>src</code> 目录结构如下：</p><ol><li><p><strong>资源文件</strong>:</p><ul><li><code>main/deploy/package/macosx/</code> 和 <code>main/deploy/package/windows/</code>：这些似乎是针对不同操作系统的应用程序图标。</li><li><code>main/resources/</code>：包含了各种资源文件，如 CSS、字体、图片等。</li></ul></li><li><p><strong>Java 文件</strong>:</p><ul><li><code>com.benjaminwan.ocrlibrary</code>：这个包似乎包含与 OCR 处理相关的类。</li><li><code>com.luooqi.ocr</code>：这是应用程序的主要包，其中 <code>MainFm.java</code> 可能是主类。</li><li><code>com.luooqi.ocr.controller</code>：包含应用程序的控制器类。</li><li><code>com.luooqi.ocr.local</code>：可能包含本地 OCR 功能的类。</li><li><code>com.luooqi.ocr.model</code>：包含应用程序的数据模型。</li><li><code>com.luooqi.ocr.snap</code>：似乎与屏幕截图功能有关。</li><li><code>com.luooqi.ocr.utils</code>：包含各种实用程序类。</li></ul></li><li><p><strong>测试文件</strong>:</p><ul><li><code>test/java/com/luooqi/ocr/utils/OcrUtilsTest.java</code>：一个针对 <code>OcrUtils</code> 类的测试。</li></ul></li></ol><h3 id="使用-javafx-maven-plugin-打包应用程序" tabindex="-1"><a class="header-anchor" href="#使用-javafx-maven-plugin-打包应用程序"><span>使用 javafx-maven-plugin 打包应用程序</span></a></h3><h4 id="javafx-maven-plugin-简介" tabindex="-1"><a class="header-anchor" href="#javafx-maven-plugin-简介"><span>javafx-maven-plugin 简介</span></a></h4><p>javafx-maven-plugin 插件。这个插件为 JavaFX 项目提供了便捷的构建和打包工具。</p><h4 id="使用-javafx-maven-plugin-生成-native" tabindex="-1"><a class="header-anchor" href="#使用-javafx-maven-plugin-生成-native"><span>使用 javafx-maven-plugin 生成 native</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>set JAVA_HOME=D:\\dev_program\\java\\jdk1.8.0_121
mvn jfx:native -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>目标文件目录</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>target\\jfx\\native
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装包目录结构" tabindex="-1"><a class="header-anchor" href="#安装包目录结构"><span>安装包目录结构</span></a></h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
├── app
│   ├── lib
│   │   ├── commons-logging-1.2.jar
│   │   ├── fontbox-2.0.24.jar
│   │   ├── hutool-all-5.8.11.jar
│   │   ├── imgscalr-lib-4.2.jar
│   │   ├── jnativehook-2.1.0.jar
│   │   ├── logback-classic-1.2.3.jar
│   │   ├── logback-core-1.2.3.jar
│   │   ├── pdfbox-2.0.24.jar
│   │   ├── rapidocr-0.0.7.jar
│   │   ├── rapidocr-common-0.0.7.jar
│   │   ├── rapidocr-onnx-models-1.2.2.jar
│   │   ├── rapidocr-onnx-platform-0.0.7.jar
│   │   ├── rapidocr-onnx-windows-x86_64-1.2.2.jar
│   │   ├── slf4j-api-1.7.25.jar
│   ├── logs
│   │   ├── ocr-2024-04-28.log
│   ├── tmp_1995725880.png
│   ├── tools-ocr-2.3.0-jfx.jar
│   ├── treehole.cfg
├── msvcp120.dll
├── msvcr100.dll
├── msvcr120.dll
├── packager.dll
├── runtime
│   ├── COPYRIGHT
│   ├── LICENSE
│   ├── README.txt
│   ├── THIRDPARTYLICENSEREADME-JAVAFX.txt
│   ├── THIRDPARTYLICENSEREADME.txt
│   ├── Welcome.html
│   ├── bin
│   │   ├── JAWTAccessBridge-64.dll
│   │   ├── JavaAccessBridge-64.dll
│   │   ├── WindowsAccessBridge-64.dll
│   │   ├── attach.dll
│   │   ├── awt.dll
│   │   ├── bci.dll
│   │   ├── dcevm
│   │   │   ├── jvm.dll
│   │   ├── dcpr.dll
│   │   ├── decora_sse.dll
│   │   ├── deploy.dll
│   │   ├── dt_shmem.dll
│   │   ├── dt_socket.dll
│   │   ├── fontmanager.dll
│   │   ├── fxplugins.dll
│   │   ├── glass.dll
│   │   ├── glib-lite.dll
│   │   ├── gstreamer-lite.dll
│   │   ├── hprof.dll
│   │   ├── instrument.dll
│   │   ├── j2pcsc.dll
│   │   ├── j2pkcs11.dll
│   │   ├── jaas_nt.dll
│   │   ├── java.dll
│   │   ├── java_crw_demo.dll
│   │   ├── javafx_font.dll
│   │   ├── javafx_font_t2k.dll
│   │   ├── javafx_iio.dll
│   │   ├── jawt.dll
│   │   ├── jdwp.dll
│   │   ├── jfr.dll
│   │   ├── jfxmedia.dll
│   │   ├── jfxwebkit.dll
│   │   ├── jli.dll
│   │   ├── jpeg.dll
│   │   ├── jsdt.dll
│   │   ├── jsound.dll
│   │   ├── jsoundds.dll
│   │   ├── kcms.dll
│   │   ├── lcms.dll
│   │   ├── management.dll
│   │   ├── mlib_image.dll
│   │   ├── msvcp120.dll
│   │   ├── msvcr100.dll
│   │   ├── msvcr120.dll
│   │   ├── net.dll
│   │   ├── nio.dll
│   │   ├── npt.dll
│   │   ├── plugin2
│   │   │   ├── msvcr100.dll
│   │   │   ├── npjp2.dll
│   │   ├── prism_common.dll
│   │   ├── prism_d3d.dll
│   │   ├── prism_sw.dll
│   │   ├── resource.dll
│   │   ├── sawindbg.dll
│   │   ├── server
│   │   │   ├── Xusage.txt
│   │   │   ├── classes.jsa
│   │   │   ├── jvm.dll
│   │   ├── splashscreen.dll
│   │   ├── sunec.dll
│   │   ├── sunmscapi.dll
│   │   ├── t2k.dll
│   │   ├── unpack.dll
│   │   ├── verify.dll
│   │   ├── w2k_lsa_auth.dll
│   │   ├── zip.dll
│   ├── lib
│   │   ├── accessibility.properties
│   │   ├── amd64
│   │   │   ├── jvm.cfg
│   │   ├── calendars.properties
│   │   ├── charsets.jar
│   │   ├── classlist
│   │   ├── cmm
│   │   │   ├── CIEXYZ.pf
│   │   │   ├── GRAY.pf
│   │   │   ├── LINEAR_RGB.pf
│   │   │   ├── PYCC.pf
│   │   │   ├── sRGB.pf
│   │   ├── content-types.properties
│   │   ├── currency.data
│   │   ├── ext
│   │   │   ├── access-bridge-64.jar
│   │   │   ├── cldrdata.jar
│   │   │   ├── dnsns.jar
│   │   │   ├── jaccess.jar
│   │   │   ├── jfxrt.jar
│   │   │   ├── localedata.jar
│   │   │   ├── meta-index
│   │   │   ├── nashorn.jar
│   │   │   ├── sunec.jar
│   │   │   ├── sunjce_provider.jar
│   │   │   ├── sunmscapi.jar
│   │   │   ├── sunpkcs11.jar
│   │   │   ├── zipfs.jar
│   │   ├── flavormap.properties
│   │   ├── fontconfig.bfc
│   │   ├── fontconfig.properties.src
│   │   ├── fonts
│   │   │   ├── LucidaBrightDemiBold.ttf
│   │   │   ├── LucidaBrightDemiItalic.ttf
│   │   │   ├── LucidaBrightItalic.ttf
│   │   │   ├── LucidaBrightRegular.ttf
│   │   │   ├── LucidaSansDemiBold.ttf
│   │   │   ├── LucidaSansRegular.ttf
│   │   │   ├── LucidaTypewriterBold.ttf
│   │   │   ├── LucidaTypewriterRegular.ttf
│   │   ├── hijrah-config-umalqura.properties
│   │   ├── images
│   │   │   ├── cursors
│   │   │   │   ├── cursors.properties
│   │   │   │   ├── invalid32x32.gif
│   │   │   │   ├── win32_CopyDrop32x32.gif
│   │   │   │   ├── win32_CopyNoDrop32x32.gif
│   │   │   │   ├── win32_LinkDrop32x32.gif
│   │   │   │   ├── win32_LinkNoDrop32x32.gif
│   │   │   │   ├── win32_MoveDrop32x32.gif
│   │   │   │   ├── win32_MoveNoDrop32x32.gif
│   │   ├── javafx.properties
│   │   ├── javaws.jar
│   │   ├── jce.jar
│   │   ├── jfr
│   │   │   ├── default.jfc
│   │   │   ├── profile.jfc
│   │   ├── jfr.jar
│   │   ├── jfxswt.jar
│   │   ├── jsse.jar
│   │   ├── jvm.hprof.txt
│   │   ├── logging.properties
│   │   ├── management
│   │   │   ├── jmxremote.access
│   │   │   ├── jmxremote.password.template
│   │   │   ├── management.properties
│   │   │   ├── snmp.acl.template
│   │   ├── management-agent.jar
│   │   ├── meta-index
│   │   ├── net.properties
│   │   ├── plugin.jar
│   │   ├── psfont.properties.ja
│   │   ├── psfontj2d.properties
│   │   ├── resources.jar
│   │   ├── rt.jar
│   │   ├── security
│   │   │   ├── README.txt
│   │   │   ├── US_export_policy.jar
│   │   │   ├── blacklist
│   │   │   ├── blacklisted.certs
│   │   │   ├── cacerts
│   │   │   ├── java.policy
│   │   │   ├── java.security
│   │   │   ├── javaws.policy
│   │   │   ├── local_policy.jar
│   │   │   ├── trusted.libraries
│   │   ├── sound.properties
│   │   ├── tzdb.dat
│   │   ├── tzmappings
├── treehole.exe
├── treehole.ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,19),F={href:"https://rapidai.github.io/RapidOCRDocs/docs/about_model/convert_model/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://rapidai.github.io/RapidOCRDocs/docs/about_model/download_onnx/",target:"_blank",rel:"noopener noreferrer"};function z(X,G){const l=a("ExternalLinkIcon");return r(),c("div",null,[o,t,e("p",null,[e("a",u,[n("下载地址"),i(l)])]),m,b,p,h,_,g,e("ul",null,[e("li",null,[e("a",f,[n("下载地址"),i(l)])])]),x,e("ul",null,[e("li",null,[e("a",j,[n("ch_PP-OCRv4_server_det 推理模型"),i(l)])]),e("li",null,[e("a",k,[n("ch_PP-OCRv4_server_rec 推理模型"),i(l)])])]),w,R,C,e("ul",null,[e("li",null,[n("Paddle 格式模型的转换，主要借助"),e("a",P,[O,i(l)]),n("库实现。针对 PaddleOCR 中涉及到的相关模型，直接转换并不太方便。因此，推出了"),e("a",y,[n("PaddleOCRModelConverter"),i(l)]),n("转换工具。")]),D]),E,e("ul",null,[e("li",null,[e("a",L,[n("魔搭"),i(l)])]),e("li",null,[e("a",N,[n("Hugging Face"),i(l)])])]),A,e("p",null,[e("a",M,[n("PaddleOCRModelConverter"),i(l)])]),I,e("ul",null,[e("li",null,[e("a",B,[n("Hugging Face Models"),i(l)])]),e("li",null,[e("a",H,[n("Google 网盘"),i(l)])]),e("li",null,[e("a",q,[n("百度网盘"),i(l)])])]),S,T,e("ul",null,[e("li",null,[e("a",J,[n("paddle-ocr"),i(l)])])]),V,e("ul",null,[e("li",null,[e("a",F,[n("convert_model"),i(l)])]),e("li",null,[e("a",Y,[n("download_onnx"),i(l)])])])])}const U=s(v,[["render",z],["__file","1.1.html.vue"]]),K=JSON.parse('{"path":"/zh/01/1.1.html","title":"快速入门","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"添加服务模型","slug":"添加服务模型","link":"#添加服务模型","children":[{"level":3,"title":"下载 paddle ocr 服务端模型","slug":"下载-paddle-ocr-服务端模型","link":"#下载-paddle-ocr-服务端模型","children":[]},{"level":3,"title":"模型转换","slug":"模型转换","link":"#模型转换","children":[]},{"level":3,"title":"已有 onnx 模型下载","slug":"已有-onnx-模型下载","link":"#已有-onnx-模型下载","children":[]}]},{"level":2,"title":"服务端口接口","slug":"服务端口接口","link":"#服务端口接口","children":[]},{"level":2,"title":"二次开发","slug":"二次开发","link":"#二次开发","children":[{"level":3,"title":"代码结构","slug":"代码结构","link":"#代码结构","children":[]},{"level":3,"title":"使用 javafx-maven-plugin 打包应用程序","slug":"使用-javafx-maven-plugin-打包应用程序","link":"#使用-javafx-maven-plugin-打包应用程序","children":[]}]},{"level":2,"title":"安装包目录结构","slug":"安装包目录结构","link":"#安装包目录结构","children":[{"level":3,"title":"windows","slug":"windows","link":"#windows","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1714317285000,"contributors":[{"name":"litongjava","email":"litongjava@qq.com","commits":4}]},"filePathRelative":"zh/01/1.1.md"}');export{U as comp,K as data};
