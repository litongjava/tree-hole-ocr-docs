import{_ as d,r as s,o as r,c,a as e,b as n,d as l,e as a}from"./app-DVD0zt9r.js";const o={},v=e("h1",{id:"快速入门",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速入门"},[e("span",null,"快速入门")])],-1),t=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),u={href:"https://github.com/litongjava/tools-ocr/releases/tag/v2.2.9",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"下载安装即可,没有什么可以讲解的",-1),p=e("h2",{id:"添加服务模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加服务模型"},[e("span",null,"添加服务模型")])],-1),b=e("p",null,"为了减少安装的包的体积,默认内置内置了移动端模型.移动端模型的推理速度较快,但是有些生僻字无法识别,下面介绍如何添加服务端模型解决这一问题",-1),h=e("h3",{id:"下载-paddle-ocr-服务端模型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-paddle-ocr-服务端模型"},[e("span",null,"下载 paddle ocr 服务端模型")])],-1),g=e("p",null,"paddle paddle 模型下载",-1),_={href:"https://github.com/PaddlePaddle/PaddleOCR/blob/main/doc/doc_ch/models_list.md#1.1",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"下面直接给成服务端模型下载地址",-1),j={href:"https://paddleocr.bj.bcebos.com/PP-OCRv4/chinese/ch_PP-OCRv4_det_server_infer.tar",target:"_blank",rel:"noopener noreferrer"},x={href:"https://paddleocr.bj.bcebos.com/PP-OCRv4/chinese/ch_PP-OCRv4_rec_server_infer.tar",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"模型转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模型转换"},[e("span",null,"模型转换")])],-1),w=e("p",null,"下载的模型默认格式是 paddle paddle 格式,为了实现较快的推理和速度和在 cpu 上进行推理,需要将 paddle 格式的模型转为 onnx 格式",-1),R=e("h4",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介"},[e("span",null,"简介")])],-1),C={href:"https://github.com/PaddlePaddle/Paddle2ONNX",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"paddle2onnx",-1),J={href:"https://github.com/RapidAI/PaddleOCRModelConverter",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,[n("主要有两种使用方式： "),e("ul",null,[e("li",null,"方法一：在线转换，借助魔搭和 Hugging Face 两个平台，搭建在线转换 demo；"),e("li",null,"方法二：离线转换，pip 安装该工具，即可本地转换使用。")])],-1),A=e("h4",{id:"在线快速转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线快速转换"},[e("span",null,"在线快速转换")])],-1),E={href:"https://www.modelscope.cn/studios/liekkas/PaddleOCRModelConverter/summary",target:"_blank",rel:"noopener noreferrer"},y={href:"https://huggingface.co/spaces/SWHL/PaddleOCRModelConverter",target:"_blank",rel:"noopener noreferrer"},T=e("h4",{id:"离线转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#离线转换"},[e("span",null,"离线转换")])],-1),X={href:"https://github.com/RapidAI/PaddleOCRModelConverter",target:"_blank",rel:"noopener noreferrer"},D=a(`<h4 id="替换模型" tabindex="-1"><a class="header-anchor" href="#替换模型"><span>替换模型</span></a></h4><p>进入目录替换模型即可,笔者 windows 的目录是</p><ul><li>D:\\dev_program\\treehole-v2.2.9-windows-x64-cpu\\app\\models</li></ul><p>注意下载模型后需要重名模型存放的对应的目录,笔者的目录如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
├── ch_PP-OCRv4_det_infer
│   ├── inference.onnx
├── ch_PP-OCRv4_rec_infer
│   ├── dict.txt
│   ├── inference.onnx
├── readme.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="已有-onnx-模型下载" tabindex="-1"><a class="header-anchor" href="#已有-onnx-模型下载"><span>已有 onnx 模型下载</span></a></h3><p>已经将部分转换好的 ONNX 模型做了整理，提供了 Hugging Face、Google 网盘和百度网盘两个下载途径。</p>`,7),M={href:"https://huggingface.co/SWHL/RapidOCR/tree/main",target:"_blank",rel:"noopener noreferrer"},N={href:"https://drive.google.com/drive/folders/1x_a9KpCo_1blxH1xFOfgKVkw1HYRVywY?usp=sharing",target:"_blank",rel:"noopener noreferrer"},L={href:"https://pan.baidu.com/s/1CHOXNJLZundoV_8bNpcpWQ?pwd=9h6g",target:"_blank",rel:"noopener noreferrer"},H=e("h2",{id:"服务端口接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务端口接口"},[e("span",null,"服务端口接口")])],-1),F=e("p",null,"有些时候需要中服务端使用 ocr 识别,笔者退出了一个服务端项目,对外提供了 http 接口,开源地址如下",-1),I={href:"https://github.com/litongjava/ai-server/tree/main/paddle-ocr",target:"_blank",rel:"noopener noreferrer"},W=a(`<h2 id="二次开发" tabindex="-1"><a class="header-anchor" href="#二次开发"><span>二次开发</span></a></h2><h3 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构"><span>代码结构</span></a></h3><p>这是一个典型的 Maven 项目结构，其中：</p><ul><li><code>pom.xml</code>: 这是 Maven 的项目对象模型文件，它包含了项目的依赖、插件和其他配置信息。</li><li><code>src</code>: 这是源代码目录，通常包含主代码 (<code>src/main</code>) 和测试代码 (<code>src/test</code>)。</li></ul><p>从 <code>pom.xml</code> 文件的部分内容中，</p><ol><li>项目的 <code>groupId</code> 是 <code>com.luooqi</code>，而 <code>artifactId</code> 是 <code>tool-ocr</code>。这意味着该项目是由 <code>luooqi</code> 开发的一个名为 <code>tool-ocr</code> 的项目。</li><li>项目的版本信息由一个属性 <code>soft.version</code> 定义，其值为 <code>1.2.6</code>。</li><li>项目有几个依赖项，包括但不限于： <ul><li><code>jnativehook</code>：可能与键盘和鼠标挂钩有关，允许应用程序全局监听键盘和鼠标事件。</li><li><code>hutool-all</code>：Hutool 是一个 Java 工具包，包含了一些常用的 Java 功能模块。</li><li><code>imgscalr-lib</code>：这是一个简单的 Java 图片缩放库。</li></ul></li></ol><p>项目的 <code>src</code> 目录结构如下：</p><ol><li><p><strong>资源文件</strong>:</p><ul><li><code>main/deploy/package/macosx/</code> 和 <code>main/deploy/package/windows/</code>：这些似乎是针对不同操作系统的应用程序图标。</li><li><code>main/resources/</code>：包含了各种资源文件，如 CSS、字体、图片等。</li></ul></li><li><p><strong>Java 文件</strong>:</p><ul><li><code>com.benjaminwan.ocrlibrary</code>：这个包似乎包含与 OCR 处理相关的类。</li><li><code>com.luooqi.ocr</code>：这是应用程序的主要包，其中 <code>MainFm.java</code> 可能是主类。</li><li><code>com.luooqi.ocr.controller</code>：包含应用程序的控制器类。</li><li><code>com.luooqi.ocr.local</code>：可能包含本地 OCR 功能的类。</li><li><code>com.luooqi.ocr.model</code>：包含应用程序的数据模型。</li><li><code>com.luooqi.ocr.snap</code>：似乎与屏幕截图功能有关。</li><li><code>com.luooqi.ocr.utils</code>：包含各种实用程序类。</li></ul></li><li><p><strong>测试文件</strong>:</p><ul><li><code>test/java/com/luooqi/ocr/utils/OcrUtilsTest.java</code>：一个针对 <code>OcrUtils</code> 类的测试。</li></ul></li></ol><h3 id="使用-javafx-maven-plugin-打包应用程序" tabindex="-1"><a class="header-anchor" href="#使用-javafx-maven-plugin-打包应用程序"><span>使用 javafx-maven-plugin 打包应用程序</span></a></h3><h4 id="javafx-maven-plugin-简介" tabindex="-1"><a class="header-anchor" href="#javafx-maven-plugin-简介"><span>javafx-maven-plugin 简介</span></a></h4><p>javafx-maven-plugin 插件。这个插件为 JavaFX 项目提供了便捷的构建和打包工具。</p><h4 id="使用-javafx-maven-plugin-生成-native" tabindex="-1"><a class="header-anchor" href="#使用-javafx-maven-plugin-生成-native"><span>使用 javafx-maven-plugin 生成 native</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>set JAVA_HOME=D:\\dev_program\\java\\jdk1.8.0_121
mvn jfx:native
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-javafx-的-jpackage-工具-打包应用程序" tabindex="-1"><a class="header-anchor" href="#使用-javafx-的-jpackage-工具-打包应用程序"><span>使用 JavaFX 的 jpackage 工具 打包应用程序</span></a></h3><p>关于如何将其打包为 <code>.exe</code>，步骤大致如下：</p><ol><li>使用 Maven 构建项目并生成 JAR 文件(java 8)。</li><li>使用 JavaFX 的 jpackage 工具打包 JAR 文件为 EXE 文件 (java 14)。</li></ol><p><code>jpackage</code> 是 Java 14 及更高版本中提供的一个实验工具，用于为 Java 应用程序创建本地包。以下是如何使用 <code>jpackage</code> 为 JavaFX 应用程序创建一个 Windows <code>.exe</code> 文件的基本步骤：</p><h4 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h4><ul><li>安装 Java 8 和 Java 14</li><li>确保您的 JDK 版本是 14 或更高版本，并且已经包含 <code>jpackage</code>。</li><li>安装.NET SDK 6,下载地址https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.317-windows-x64-installer</li><li>从 https://github.com/wixtoolset/wix3/releases 下载 WiX 3.0 或更高版本，然后将其添加到 PATH。</li></ul><h4 id="安装-wix3" tabindex="-1"><a class="header-anchor" href="#安装-wix3"><span>安装 wix3</span></a></h4><p>WiX Toolset 进行了一些变化，并且它们开始提供一个 .NET Core 工具，这可能是您使用的安装方法。但对于 <code>jpackage</code>，您需要的是传统的 WiX Toolset，它包含 <code>light.exe</code> 和 <code>candle.exe</code>。</p><p>请按照以下步骤操作：</p>`,22),B=e("p",null,[e("strong",null,"访问 WiX Toolset 的 Releases 页面"),n(":")],-1),q={href:"https://github.com/wixtoolset/wix3/releases",target:"_blank",rel:"noopener noreferrer"},S=a("<li><p><strong>下载并安装 WiX Toolset</strong>:</p><ul><li>在 Releases 页面，找到最新的稳定版本。</li><li>下载 <code>.exe</code> 安装程序或 <code>.zip</code> 归档文件。</li><li>如果下载了 <code>.exe</code> 安装程序，直接运行它以安装。如果下载了 <code>.zip</code> 归档文件，解压它到一个适当的目录。</li></ul></li><li><p><strong>将 WiX Toolset 添加到 PATH</strong>:</p><ul><li>找到 WiX Toolset 的安装目录或您解压 <code>.zip</code> 文件的目录。确保这个目录下有 <code>bin</code> 子目录，并且其中包含 <code>light.exe</code> 和 <code>candle.exe</code>。</li><li>将这个 <code>bin</code> 子目录添加到您的系统 <code>PATH</code>。</li></ul></li><li><p><strong>重新运行 jpackage 命令</strong>。</p></li>",3),z=a(`<p>完成这些步骤后，您应该能够使用 <code>jpackage</code> 正确地打包您的应用程序为 <code>.exe</code> 文件。</p><h4 id="创建-javafx-jar" tabindex="-1"><a class="header-anchor" href="#创建-javafx-jar"><span>创建 JavaFX JAR</span></a></h4><p>首先，您需要使用 Maven 构建项目并生成一个可执行的 JAR 文件。在项目根目录中执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>D:<span class="token punctuation">\\</span>dev_program<span class="token punctuation">\\</span>java<span class="token punctuation">\\</span>jdk1.8.0_121
mvn clean package <span class="token parameter variable">-DskipTests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>确保 JAR 文件包含所有必要的依赖项并且可以独立运行。</p><h4 id="使用-jpackage-创建-exe-文件" tabindex="-1"><a class="header-anchor" href="#使用-jpackage-创建-exe-文件"><span>使用 jpackage 创建 <code>.exe</code> 文件</span></a></h4><p>以下是一个基本的 <code>jpackage</code> 命令示例，用于将 JavaFX JAR 打包为 <code>.exe</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>jpackage <span class="token parameter variable">--type</span> exe <span class="token parameter variable">--input</span> target/ --main-jar tool-ocr-1.2.6.jar <span class="token parameter variable">--name</span> tree-hole-ocr --main-class com.luooqi.ocr.OcrApp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><ul><li><code>--type exe</code>：指定输出类型为 <code>.exe</code>。</li><li><code>--input target/</code>：指定包含 JAR 文件的目录。</li><li><code>--main-jar</code>：指定要打包的主 JAR 文件。</li><li><code>--name</code>：输出的应用程序名称。</li><li><code>--main-class</code>：指定应用程序的主类。</li><li><code>--win-shortcut</code>：为应用程序创建一个 Windows 快捷方式。</li></ul><p>这只是一个基础示例。<code>jpackage</code> 提供了许多其他选项，例如设置应用程序图标、JVM 参数等。您可以查看 <code>jpackage</code> 的官方文档或使用 <code>jpackage --help</code> 命令查看所有可用选项。</p><p>完成上述步骤后，您应该会在当前目录中得到一个 <code>.exe</code> 文件和一个相应的安装程序。</p><p>注意：这个过程可能需要 JavaFX jmods 文件，您可能需要从 JavaFX 官方网站下载它们，并使用 <code>--module-path</code> 和 <code>--add-modules</code> 选项指定它们。</p><p>最后，如果你想要我为你生成这个 <code>.exe</code> 文件，请告诉我，我会为你完成这个步骤。</p><h2 id="安装包目录结构" tabindex="-1"><a class="header-anchor" href="#安装包目录结构"><span>安装包目录结构</span></a></h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
├── app
│   ├── lib
│   │   ├── api-0.25.0.jar
│   │   ├── basicdataset-0.25.0.jar
│   │   ├── commons-compress-1.23.0.jar
│   │   ├── commons-csv-1.10.0.jar
│   │   ├── commons-logging-1.2.jar
│   │   ├── fontbox-2.0.24.jar
│   │   ├── gson-2.10.1.jar
│   │   ├── hutool-all-5.8.11.jar
│   │   ├── imgscalr-lib-4.2.jar
│   │   ├── jna-5.13.0.jar
│   │   ├── jnativehook-2.1.0.jar
│   │   ├── logback-classic-1.2.3.jar
│   │   ├── logback-core-1.2.3.jar
│   │   ├── model-zoo-0.25.0.jar
│   │   ├── onnxruntime-1.16.0.jar
│   │   ├── onnxruntime-engine-0.25.0.jar
│   │   ├── opencv-0.25.0.jar
│   │   ├── opencv-4.7.0-0.jar
│   │   ├── pdfbox-2.0.24.jar
│   │   ├── pytorch-engine-0.25.0.jar
│   │   ├── slf4j-api-1.7.25.jar
│   ├── logs
│   │   ├── ocr-2024-04-28.log
│   ├── models
│   │   ├── ch_PP-OCRv4_det_infer
│   │   │   ├── inference.onnx
│   │   ├── ch_PP-OCRv4_rec_infer
│   │   │   ├── dict.txt
│   │   │   ├── inference.onnx
│   │   ├── readme.md
│   ├── tools-ocr-2.2.9-jfx.jar
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,18),V={href:"https://rapidai.github.io/RapidOCRDocs/docs/about_model/convert_model/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://rapidai.github.io/RapidOCRDocs/docs/about_model/download_onnx/",target:"_blank",rel:"noopener noreferrer"};function G(K,U){const i=s("ExternalLinkIcon");return r(),c("div",null,[v,t,e("p",null,[e("a",u,[n("下载地址"),l(i)])]),m,p,b,h,g,e("ul",null,[e("li",null,[e("a",_,[n("下载地址"),l(i)])])]),f,e("ul",null,[e("li",null,[e("a",j,[n("ch_PP-OCRv4_server_det 推理模型"),l(i)])]),e("li",null,[e("a",x,[n("ch_PP-OCRv4_server_rec 推理模型"),l(i)])])]),k,w,R,e("ul",null,[e("li",null,[n("Paddle 格式模型的转换，主要借助"),e("a",C,[P,l(i)]),n("库实现。针对 PaddleOCR 中涉及到的相关模型，直接转换并不太方便。因此，推出了"),e("a",J,[n("PaddleOCRModelConverter"),l(i)]),n("转换工具。")]),O]),A,e("ul",null,[e("li",null,[e("a",E,[n("魔搭"),l(i)])]),e("li",null,[e("a",y,[n("Hugging Face"),l(i)])])]),T,e("p",null,[e("a",X,[n("PaddleOCRModelConverter"),l(i)])]),D,e("ul",null,[e("li",null,[e("a",M,[n("Hugging Face Models"),l(i)])]),e("li",null,[e("a",N,[n("Google 网盘"),l(i)])]),e("li",null,[e("a",L,[n("百度网盘"),l(i)])])]),H,F,e("ul",null,[e("li",null,[e("a",I,[n("paddle-ocr"),l(i)])])]),W,e("ol",null,[e("li",null,[B,e("ul",null,[e("li",null,[e("a",q,[n("WiX Toolset Releases"),l(i)])])])]),S]),z,e("ul",null,[e("li",null,[e("a",V,[n("convert_model"),l(i)])]),e("li",null,[e("a",Y,[n("download_onnx"),l(i)])])])])}const Q=d(o,[["render",G],["__file","1.1.html.vue"]]),$=JSON.parse('{"path":"/zh/01/1.1.html","title":"快速入门","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"添加服务模型","slug":"添加服务模型","link":"#添加服务模型","children":[{"level":3,"title":"下载 paddle ocr 服务端模型","slug":"下载-paddle-ocr-服务端模型","link":"#下载-paddle-ocr-服务端模型","children":[]},{"level":3,"title":"模型转换","slug":"模型转换","link":"#模型转换","children":[]},{"level":3,"title":"已有 onnx 模型下载","slug":"已有-onnx-模型下载","link":"#已有-onnx-模型下载","children":[]}]},{"level":2,"title":"服务端口接口","slug":"服务端口接口","link":"#服务端口接口","children":[]},{"level":2,"title":"二次开发","slug":"二次开发","link":"#二次开发","children":[{"level":3,"title":"代码结构","slug":"代码结构","link":"#代码结构","children":[]},{"level":3,"title":"使用 javafx-maven-plugin 打包应用程序","slug":"使用-javafx-maven-plugin-打包应用程序","link":"#使用-javafx-maven-plugin-打包应用程序","children":[]},{"level":3,"title":"使用 JavaFX 的 jpackage 工具 打包应用程序","slug":"使用-javafx-的-jpackage-工具-打包应用程序","link":"#使用-javafx-的-jpackage-工具-打包应用程序","children":[]}]},{"level":2,"title":"安装包目录结构","slug":"安装包目录结构","link":"#安装包目录结构","children":[{"level":3,"title":"windows","slug":"windows","link":"#windows","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"updatedTime":1714308618000,"contributors":[{"name":"litongjava","email":"litongjava@qq.com","commits":3}]},"filePathRelative":"zh/01/1.1.md"}');export{Q as comp,$ as data};
