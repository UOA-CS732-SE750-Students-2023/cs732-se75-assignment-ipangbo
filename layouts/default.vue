<!--
 * Default Layout
 * @author: Bo Pang
 * @since: 2023-04-04
 * default.vue
-->
<template>
    <!-- todo: top nav -->
    <header>
        <HeadImage></HeadImage>
    </header>
    <div id="main" class="content-container r-container">
        <div class="r-content">
            <div class="top-slider-nav">
                <div class="pf-slider">
                    <PostsCarousel :slides="slides as any"></PostsCarousel>
                </div>
                <nav>
                    <li class="current-menu-item">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Website Map</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Private Policy</a>
                    </li>
                </nav>

            </div>
            <div class="main-row-reverse">
                <div class="main-column has-recommend">
                    <div class="main-container recent">
                        <div class="pf-modal-title">
                            <div class="title-text"><i class="pandastudio-icons-stars"></i>最新文章</div><a
                                class="read-more pd-ripple pd-ripple-trigger" href="https://www.ipangbo.cn/timeline">更多<i
                                    class="pandastudio-icons-arrow-right"></i></a>
                        </div>
                        <div class="row post-card-row style-list">
                            <div class="post-list-col col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
                                <a href="https://www.ipangbo.cn/linux/564.html" class="pf_list pd-ripple pd-ripple-trigger">
                                    <span class="post-thumbnail"
                                        style="background-image:url(https://tc.qn.ipangbo.cn/image/Cover/230329.png)"
                                        post-id="564"></span>
                                    <span class="metas">
                                        <h4>Ubuntu换错源了怎么办？云服务器抢救数据日记</h4>
                                        <span class="infos">
                                            <span class="m-reads">
                                                <i class="pandastudio-icons-eye"></i>28</span>
                                            <span class="m-likes">
                                                <i class="pandastudio-icons-heart-o"></i>2</span>
                                            <span class="m-comments">
                                                <i class="pandastudio-icons-comments-o"></i>0</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div class="post-list-col col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
                                <a href="https://www.ipangbo.cn/%e7%95%99%e5%ad%a6/546.html"
                                    class="pf_list pd-ripple pd-ripple-trigger">
                                    <span class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230217.png)"
                                        post-id="546"></span>
                                    <span class="metas">
                                        <h4>新西兰留学跨境金融最佳实践</h4>
                                        <span class="infos">
                                            <span class="m-reads">
                                                <i class="pandastudio-icons-eye"></i>140</span>
                                            <span class="m-likes">
                                                <i class="pandastudio-icons-heart-o"></i>0</span>
                                            <span class="m-comments">
                                                <i class="pandastudio-icons-comments-o"></i>0</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div class="post-list-col col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
                                <a href="https://www.ipangbo.cn/site/518.html" class="pf_list pd-ripple pd-ripple-trigger">
                                    <span class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230126.png)"
                                        post-id="518"></span>
                                    <span class="metas">
                                        <h4>EnlighterJS——WordPress代码高亮插件的安装与自定义CSS（美化）</h4>
                                        <span class="infos">
                                            <span class="m-reads">
                                                <i class="pandastudio-icons-eye"></i>183</span>
                                            <span class="m-likes">
                                                <i class="pandastudio-icons-heart-o"></i>1</span>
                                            <span class="m-comments">
                                                <i class="pandastudio-icons-comments-o"></i>0</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div class="post-list-col col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
                                <a href="https://www.ipangbo.cn/build/468.html" class="pf_list pd-ripple pd-ripple-trigger">
                                    <span class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230117.png)"
                                        post-id="468"></span>
                                    <span class="metas">
                                        <h4>Anaconda在Windows下优化备忘录</h4>
                                        <span class="infos">
                                            <span class="m-reads">
                                                <i class="pandastudio-icons-eye"></i>161</span>
                                            <span class="m-likes">
                                                <i class="pandastudio-icons-heart-o"></i>0</span>
                                            <span class="m-comments">
                                                <i class="pandastudio-icons-comments-o"></i>0</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div class="post-list-col col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
                                <a href="https://www.ipangbo.cn/site/360.html" class="pf_list pd-ripple pd-ripple-trigger">
                                    <span class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230106.png)"
                                        post-id="360"></span>
                                    <span class="metas">
                                        <h4>在Ubuntu服务器上安装Docker以及Portainer</h4>
                                        <span class="infos">
                                            <span class="m-reads">
                                                <i class="pandastudio-icons-eye"></i>273</span>
                                            <span class="m-likes">
                                                <i class="pandastudio-icons-heart-o"></i>0</span>
                                            <span class="m-comments">
                                                <i class="pandastudio-icons-comments-o"></i>0</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div class="post-list-col col-xxs-12 col-xs-12 col-sm-6 col-lg-4">
                                <a href="https://www.ipangbo.cn/game/344.html" class="pf_list pd-ripple pd-ripple-trigger"
                                    style="">
                                    <span class="post-thumbnail"
                                        style="background-image:url(https://img.wbto.cn/uploadimg/image/20221114/20221114134933_61695.jpg)"
                                        post-id="344"></span>
                                    <span class="metas">
                                        <h4>《咸鱼大冲关》2023题库</h4>
                                        <span class="infos">
                                            <span class="m-reads">
                                                <i class="pandastudio-icons-eye"></i>562</span>
                                            <span class="m-likes">
                                                <i class="pandastudio-icons-heart-o"></i>0</span>
                                            <span class="m-comments">
                                                <i class="pandastudio-icons-comments-o"></i>0</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main-container recommend_titles_wrapper pf_scroller pf_scroller_is_mac">
                        <ul class="recommend_titles">
                            <li class="title pd-ripple pd-ripple-trigger active" data-recommend-key="0"
                                click="this.handleRecommendSelectorClick(0)"><a><i
                                        class="pandastudio-icons-comments-o"></i>热门讨论</a></li>
                            <li class="title pd-ripple pd-ripple-trigger" data-recommend-key="1"
                                click="this.handleRecommendSelectorClick(1)"><a><i
                                        class="pandastudio-icons-eye"></i>阅读最多</a></li>
                        </ul>
                    </div>
                    <div class="main-container recommend_panels_wrapper">
                        <div class="recommend_panels">
                            <div class="row post-card-row style-card">
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/02/code.jpg)"
                                                        post-id="344"></div>
                                                    <div class="m-text" style="color: rgb(14, 120, 145);">
                                                        在线VScode——Code-Server：使用宝塔面板可视化搭建</div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(95, 119, 124);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>3127</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>4</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/site/151.html"
                                                            style="color: rgb(204, 246, 255);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/site/151.html" class="post-thumbnail"
                                            style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/02/code.jpg)"
                                            post-id="344"></a>
                                        <div class="title">
                                            <h4>在线VScode——Code-Server：使用宝塔面板可视化搭建</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/u22-scaled-1.jpeg)"
                                                        post-id="344"></div>
                                                    <div class="m-text" style="color: rgb(130, 38, 82);">Ubuntu 22.04 更换阿里源
                                                    </div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 95, 109);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>7340</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>3</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/build/251.html"
                                                            style="color: rgb(255, 204, 229);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/build/251.html" class="post-thumbnail"
                                            style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/u22-scaled-1.jpeg)"
                                            post-id="344"></a>
                                        <div class="title">
                                            <h4>Ubuntu 22.04 更换阿里源</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail" style="background-image:url()" post-id="344">
                                                    </div>
                                                    <div class="m-text" style="color: rgb(77, 77, 77);">这个网站的故事 The Story of
                                                        this Website</div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>464</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>1</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/site/158.html"
                                                            style="color: rgb(230, 230, 230);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/site/158.html" class="post-thumbnail"
                                            style="background-image:url()" post-id="344"></a>
                                        <div class="title">
                                            <h4>这个网站的故事 The Story of this Website</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/11/屏幕截图-2021-11-02-224739.png)"
                                                        post-id="344"></div>
                                                    <div class="m-text" style="color: rgb(139, 73, 28);">MySQL8.0远程访问方法
                                                    </div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 107, 95);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>450</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>1</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/uncategorized/235.html"
                                                            style="color: rgb(255, 224, 204);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/uncategorized/235.html" class="post-thumbnail"
                                            style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/11/屏幕截图-2021-11-02-224739.png)"
                                            post-id="344"></a>
                                        <div class="title">
                                            <h4>MySQL8.0远程访问方法</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row post-card-row style-card">
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220522.png)"
                                                        post-id="272"></div>
                                                    <div class="m-text" style="color: rgb(77, 77, 77);">
                                                        Ubuntu22.04使用apt安装MySQL8指南</div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>2069</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>1</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/linux/272.html"
                                                            style="color: rgb(230, 230, 230);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/linux/272.html" class="post-thumbnail"
                                            style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220522.png)"
                                            post-id="272"></a>
                                        <div class="title">
                                            <h4>Ubuntu22.04使用apt安装MySQL8指南</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/截图-2022-04-22-20-29-09.png)"
                                                        post-id="272"></div>
                                                    <div class="m-text" style="color: rgb(136, 24, 102);">Ubuntu 22.04
                                                        解决IBus中文输入法无法跟随光标</div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 95, 115);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>2001</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>1</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/linux/383.html"
                                                            style="color: rgb(255, 204, 239);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/linux/383.html" class="post-thumbnail"
                                            style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/截图-2022-04-22-20-29-09.png)"
                                            post-id="272"></a>
                                        <div class="title">
                                            <h4>Ubuntu 22.04 解决IBus中文输入法无法跟随光标</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/210525.png)"
                                                        post-id="200"></div>
                                                    <div class="m-text" style="color: rgb(77, 77, 77);">
                                                        关于配置了密钥对之后ssh连接localhost仍然需要输入密码的问题的解决方法</div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>677</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>0</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/build/200.html"
                                                            style="color: rgb(230, 230, 230);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/build/200.html" class="post-thumbnail"
                                            style="background-image:url(https://tc1.ipangbo.cn/image/Cover/210525.png)"
                                            post-id="200"></a>
                                        <div class="title">
                                            <h4>关于配置了密钥对之后ssh连接localhost仍然需要输入密码的问题的解决方法</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                    <div class="pf_card">
                                        <div class="metas">
                                            <div class="meta-container">
                                                <div class="m-title">
                                                    <div class="m-thumbnail"
                                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/09/top-homeimage@2x.png)"
                                                        post-id="200"></div>
                                                    <div class="m-text" style="color: rgb(105, 98, 94);">NextCloud配置备忘录
                                                    </div>
                                                </div>
                                                <div class="m-infos" style="background: rgb(124, 105, 95);">
                                                    <div class="infos">
                                                        <span class="m-reads">
                                                            <i class="pandastudio-icons-eye"></i>638</span>
                                                        <span class="m-likes">
                                                            <i class="pandastudio-icons-heart-o"></i>0</span>
                                                        <span class="m-comments">
                                                            <i class="pandastudio-icons-comments-o"></i>0</span>
                                                    </div>
                                                    <div class="m-read-more">
                                                        <a class="pd-ripple pd-ripple-trigger"
                                                            href="https://www.ipangbo.cn/site/220.html"
                                                            style="color: rgb(255, 221, 204);"><span
                                                                class="text">阅读全文</span><span class="icon"><i
                                                                    class="pandastudio-icons-arrow-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://www.ipangbo.cn/site/220.html" class="post-thumbnail"
                                            style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/09/top-homeimage@2x.png)"
                                            post-id="200"></a>
                                        <div class="title">
                                            <h4>NextCloud配置备忘录</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-container category">
                        <div class="pf-modal-title">
                            <div class="title-text"><i class="pandastudio-icons-category"></i>Linux</div><a
                                class="read-more pd-ripple pd-ripple-trigger"
                                href="https://www.ipangbo.cn/category/linux">更多<i
                                    class="pandastudio-icons-arrow-right"></i></a>
                        </div>
                        <div class="row post-card-row style-card">
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc.qn.ipangbo.cn/image/Cover/230329.png)"
                                                    post-id="564"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">Ubuntu换错源了怎么办？云服务器抢救数据日记
                                                </div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>28</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>2</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/linux/564.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/linux/564.html" class="post-thumbnail"
                                        style="background-image:url(https://tc.qn.ipangbo.cn/image/Cover/230329.png)"
                                        post-id="564"></a>
                                    <div class="title">
                                        <h4>Ubuntu换错源了怎么办？云服务器抢救数据日记</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220102.png)"
                                                    post-id="294"></div>
                                                <div class="m-text" style="color: rgb(10, 11, 153);">Ubuntu
                                                    22.04下nvm/npm/yarn的安装及换源</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(95, 96, 124);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>261</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/linux/294.html"
                                                        style="color: rgb(204, 205, 255);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/linux/294.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220102.png)"
                                        post-id="294"></a>
                                    <div class="title">
                                        <h4>Ubuntu 22.04下nvm/npm/yarn的安装及换源</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220522.png)"
                                                    post-id="272"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">
                                                    Ubuntu22.04使用apt安装MySQL8指南</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>2069</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>1</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/linux/272.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/linux/272.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220522.png)"
                                        post-id="272"></a>
                                    <div class="title">
                                        <h4>Ubuntu22.04使用apt安装MySQL8指南</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/截图-2022-04-22-20-29-09.png)"
                                                    post-id="272"></div>
                                                <div class="m-text" style="color: rgb(136, 24, 102);">Ubuntu 22.04
                                                    解决IBus中文输入法无法跟随光标</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 115);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>2001</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>1</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/linux/383.html"
                                                        style="color: rgb(255, 204, 239);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/linux/383.html" class="post-thumbnail"
                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/截图-2022-04-22-20-29-09.png)"
                                        post-id="272"></a>
                                    <div class="title">
                                        <h4>Ubuntu 22.04 解决IBus中文输入法无法跟随光标</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-container category">
                        <div class="pf-modal-title">
                            <div class="title-text"><i class="pandastudio-icons-category"></i>网站</div><a
                                class="read-more pd-ripple pd-ripple-trigger"
                                href="https://www.ipangbo.cn/category/site">更多<i
                                    class="pandastudio-icons-arrow-right"></i></a>
                        </div>
                        <div class="row post-card-row style-card">
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc.qn.ipangbo.cn/image/Cover/230329.png)"
                                                    post-id="564"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">Ubuntu换错源了怎么办？云服务器抢救数据日记
                                                </div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>28</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>2</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/linux/564.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/linux/564.html" class="post-thumbnail"
                                        style="background-image:url(https://tc.qn.ipangbo.cn/image/Cover/230329.png)"
                                        post-id="564"></a>
                                    <div class="title">
                                        <h4>Ubuntu换错源了怎么办？云服务器抢救数据日记</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230126.png)"
                                                    post-id="518"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">
                                                    EnlighterJS——WordPress代码高亮插件的安装与自定义CSS（美化）</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>183</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>1</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/site/518.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/site/518.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230126.png)"
                                        post-id="518"></a>
                                    <div class="title">
                                        <h4>EnlighterJS——WordPress代码高亮插件的安装与自定义CSS（美化）</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230106.png)"
                                                    post-id="360"></div>
                                                <div class="m-text" style="color: rgb(17, 17, 147);">
                                                    在Ubuntu服务器上安装Docker以及Portainer</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(95, 95, 124);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>273</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/site/360.html"
                                                        style="color: rgb(204, 204, 255);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/site/360.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230106.png)"
                                        post-id="360"></a>
                                    <div class="title">
                                        <h4>在Ubuntu服务器上安装Docker以及Portainer</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230103.png)"
                                                    post-id="316"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">网站优化备忘录</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>272</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/site/316.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/site/316.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230103.png)"
                                        post-id="316"></a>
                                    <div class="title">
                                        <h4>网站优化备忘录</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-container category">
                        <div class="pf-modal-title">
                            <div class="title-text"><i class="pandastudio-icons-category"></i>开发 Build</div><a
                                class="read-more pd-ripple pd-ripple-trigger"
                                href="https://www.ipangbo.cn/category/build">更多<i
                                    class="pandastudio-icons-arrow-right"></i></a>
                        </div>
                        <div class="row post-card-row style-card">
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230117.png)"
                                                    post-id="468"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">Anaconda在Windows下优化备忘录
                                                </div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>161</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/build/468.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/build/468.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230117.png)"
                                        post-id="468"></a>
                                    <div class="title">
                                        <h4>Anaconda在Windows下优化备忘录</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/u22-scaled-1.jpeg)"
                                                    post-id="344"></div>
                                                <div class="m-text" style="color: rgb(130, 38, 82);">Ubuntu 22.04 更换阿里源
                                                </div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 109);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>7340</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>3</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/build/251.html"
                                                        style="color: rgb(255, 204, 229);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/build/251.html" class="post-thumbnail"
                                        style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/u22-scaled-1.jpeg)"
                                        post-id="344"></a>
                                    <div class="title">
                                        <h4>Ubuntu 22.04 更换阿里源</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/210525.png)"
                                                    post-id="200"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">
                                                    关于配置了密钥对之后ssh连接localhost仍然需要输入密码的问题的解决方法</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>677</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/build/200.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/build/200.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/210525.png)"
                                        post-id="200"></a>
                                    <div class="title">
                                        <h4>关于配置了密钥对之后ssh连接localhost仍然需要输入密码的问题的解决方法</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-container category last-category">
                        <div class="pf-modal-title">
                            <div class="title-text"><i class="pandastudio-icons-category"></i>留学</div><a
                                class="read-more pd-ripple pd-ripple-trigger"
                                href="https://www.ipangbo.cn/category/%e7%95%99%e5%ad%a6">更多<i
                                    class="pandastudio-icons-arrow-right"></i></a>
                        </div>
                        <div class="row post-card-row style-card">
                            <div class="post-card-col col-xxs-6 col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                <div class="pf_card">
                                    <div class="metas">
                                        <div class="meta-container">
                                            <div class="m-title">
                                                <div class="m-thumbnail"
                                                    style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230217.png)"
                                                    post-id="546"></div>
                                                <div class="m-text" style="color: rgb(77, 77, 77);">新西兰留学跨境金融最佳实践</div>
                                            </div>
                                            <div class="m-infos" style="background: rgb(124, 95, 95);">
                                                <div class="infos">
                                                    <span class="m-reads">
                                                        <i class="pandastudio-icons-eye"></i>140</span>
                                                    <span class="m-likes">
                                                        <i class="pandastudio-icons-heart-o"></i>0</span>
                                                    <span class="m-comments">
                                                        <i class="pandastudio-icons-comments-o"></i>0</span>
                                                </div>
                                                <div class="m-read-more">
                                                    <a class="pd-ripple pd-ripple-trigger"
                                                        href="https://www.ipangbo.cn/%e7%95%99%e5%ad%a6/546.html"
                                                        style="color: rgb(230, 230, 230);"><span
                                                            class="text">阅读全文</span><span class="icon"><i
                                                                class="pandastudio-icons-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://www.ipangbo.cn/%e7%95%99%e5%ad%a6/546.html" class="post-thumbnail"
                                        style="background-image:url(https://tc1.ipangbo.cn/image/Cover/230217.png)"
                                        post-id="546"></a>
                                    <div class="title">
                                        <h4>新西兰留学跨境金融最佳实践</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-container random">
                        <div class="col-xxs-12 col-xs-12 random-title">
                            <i class="pandastudio-icons-random-cards"></i>随便看看
                        </div>
                        <div class="random-row">
                            <div class="row">
                                <div class="post-card-row col-xxs-12 col-xs-12 col-sm-9 style-random_list">
                                    <div class="post-random-col col-xxs-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <a href="https://www.ipangbo.cn/uncategorized/235.html" class="pf_random">
                                            <span class="post-thumbnail"
                                                style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2021/11/屏幕截图-2021-11-02-224739.png)"
                                                post-id="546"></span>
                                            <h4>MySQL8.0远程访问方法</h4>
                                        </a>
                                    </div>
                                    <div class="post-random-col col-xxs-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <a href="https://www.ipangbo.cn/uncategorized/210.html" class="pf_random">
                                            <span class="post-thumbnail" style="background-image:url()"
                                                post-id="546"></span>
                                            <h4>灵均表达式</h4>
                                        </a>
                                    </div>
                                    <div class="post-random-col col-xxs-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <a href="https://www.ipangbo.cn/linux/294.html" class="pf_random">
                                            <span class="post-thumbnail"
                                                style="background-image:url(https://tc1.ipangbo.cn/image/Cover/220102.png)"
                                                post-id="294"></span>
                                            <h4>Ubuntu 22.04下nvm/npm/yarn的安装及换源</h4>
                                        </a>
                                    </div>
                                    <div class="post-random-col col-xxs-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <a href="https://www.ipangbo.cn/build/200.html" class="pf_random">
                                            <span class="post-thumbnail"
                                                style="background-image:url(https://tc1.ipangbo.cn/image/Cover/210525.png)"
                                                post-id="200"></span>
                                            <h4>关于配置了密钥对之后ssh连接localhost仍然需要输入密码的问题的解决方法</h4>
                                        </a>
                                    </div>
                                    <div class="post-random-col col-xxs-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <a href="https://www.ipangbo.cn/build/251.html" class="pf_random">
                                            <span class="post-thumbnail"
                                                style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/u22-scaled-1.jpeg)"
                                                post-id="200"></span>
                                            <h4>Ubuntu 22.04 更换阿里源</h4>
                                        </a>
                                    </div>
                                    <div class="post-random-col col-xxs-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <a href="https://www.ipangbo.cn/linux/383.html" class="pf_random">
                                            <span class="post-thumbnail"
                                                style="background-image:url(https://www.ipangbo.cn/wp-content/uploads/2022/04/截图-2022-04-22-20-29-09.png)"
                                                post-id="200"></span>
                                            <h4>Ubuntu 22.04 解决IBus中文输入法无法跟随光标</h4>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xxs-12 col-xs-12 col-sm-3">
                                    <div class="pf-modal-read-more"><a class="read-more pd-ripple pd-ripple-trigger"
                                            href="https://www.ipangbo.cn/timeline">近期文章<i
                                                class="pandastudio-icons-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sidebar-shadow" click="this.hide_mobile_sidebar()"></div>
                <aside class="sidebar-column">
                    <div class="pf_blogger">
                        <div class="r-container r-sm blogger_head">
                            <div class="r-content">
                                <div class="head-img"><img src="~/assets/img/avartar.jpg">
                                </div>
                            </div>
                        </div>
                        <div class="blogger-name">{{ useRuntimeConfig().public.authorName }}</div>
                        <div class="blogger-description">{{ useRuntimeConfig().public.authorSlogan }}</div>
                    </div>
                    <div class="sidebar-sticky">
                        <div class="sidebar-selector">
                            <a data-sidebar-key="custom1" class="active" click="this.handleSidebarSelectorClick(el)">
                                <el-icon>
                                    <HomeFilled />
                                </el-icon>
                            </a><a data-sidebar-key="custom2" click="this.handleSidebarSelectorClick(el)"><el-icon>
                                    <Promotion />
                                </el-icon></a>
                        </div>
                        <div class="sidebar-content pf_scroller pf_scroller_is_mac">
                            <div class="sidebar-panel active" data-sidebar-key="custom1" style="display:block">
                                <div id="pf_search-3" class="widget widget_pf_search">
                                    <div class="pf_search r-container r-sm">
                                        <form action="" class="r-content pd-ripple"><input type="search" placeholder="搜索..."
                                                autocomplete="off"><button class="pd-ripple-trigger"></button></form>
                                    </div>
                                </div>
                                <div id="pf_toc_widget-3" class="widget widget_pf_toc_widget" style="display: none;">
                                    <div class="toc">
                                        <ul data-toc-min-number=""></ul>
                                    </div>
                                </div>
                                <div id="nav_menu-3" class="widget widget_nav_menu">
                                    <div class="r-widget-title r-container r-sm">
                                        <div class="r-content pd-ripple pd-ripple-trigger"><span class="widget-icon"></span>
                                            <h4>导航</h4>
                                        </div>
                                    </div>
                                    <div class="menu-%e5%88%86%e7%b1%bb%e8%8f%9c%e5%8d%95-container">
                                        <ul id="menu-%e5%88%86%e7%b1%bb%e8%8f%9c%e5%8d%95" class="menu">
                                            <li id="menu-item-583"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-583">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/timeline">时间线</a></span></span>
                                            </li>
                                            <li id="menu-item-585"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-585">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://note.ipangbo.cn">Note站</a></span></span>
                                            </li>
                                            <li id="menu-item-586"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-586">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/category/site">网站</a></span></span>
                                            </li>
                                            <li id="menu-item-588"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-588">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/category/linux">Linux</a></span></span>
                                            </li>
                                            <li id="menu-item-589"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-589">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/category/build">开发
                                                            Build</a></span></span>
                                            </li>
                                            <li id="menu-item-590"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-590">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/category/game">游戏</a></span></span>
                                            </li>
                                            <li id="menu-item-591"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-591">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/category/%e7%95%99%e5%ad%a6">留学</a></span></span>
                                            </li>
                                            <li id="menu-item-587"
                                                class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-587">
                                                <span class="link-wrapper r-container r-sm"><span class="r-content"><a
                                                            href="https://www.ipangbo.cn/category/uncategorized">未分类</a></span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="pf_music_box-widget-3" class="widget pf_music_box">
                                    <div class="r-widget-title r-container r-sm">
                                        <div class="r-content pd-ripple pd-ripple-trigger"><span class="widget-icon"></span>
                                            <h4>Music Box</h4>
                                        </div>
                                    </div>
                                    <div class="music_box_wrapper">
                                        <div class="player">
                                            <div class="album clearfix">
                                                <div class="icon"><img class="disc"
                                                        src="//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/disc.png"
                                                        srcset="//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/disc@2x.png 2x,//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/disc@3x.png 3x
                                        "><img class="discbar"
                                                        src="//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/discbar.png"
                                                        srcset="//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/discbar@2x.png 2x,//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/discbar@3x.png 3x
                                        "></div>
                                                <div class="info">
                                                    <div class="title">未播放</div>
                                                    <div class="time">00:00</div>
                                                </div>
                                            </div>
                                            <div class="controls">
                                                <div class="pf_progress">
                                                    <div class="processing" style="width:0%">
                                                        <div class="dragger"></div>
                                                    </div>
                                                </div>
                                                <div class="buttons"><button class="prev" disabled="true"
                                                        autocomplete="off"><i
                                                            class="pandastudio-icons-music-prev"></i></button><button
                                                        class="play" autocomplete="off"><i
                                                            class="pandastudio-icons-music-play"></i><i
                                                            class="pandastudio-icons-music-pause"></i></button><button
                                                        class="next" disabled="true" autocomplete="off"><i
                                                            class="pandastudio-icons-music-next"></i></button></div>
                                            </div>
                                        </div>
                                        <ul class="songs" data-songs="[&quot;&quot;]">
                                            <li data-index="0">
                                                <div class="song_name">明天会更好</div>
                                                <div class="song_state">
                                                    <div class="playing"></div>
                                                    <div class="error"></div>
                                                    <div class="loading"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-panel" data-sidebar-key="custom2" style="display:none">
                                <div id="pf_microblog-3" class="widget widget_pf_microblog">
                                    <div class="list-box">
                                        <div class="list-title"><span class="title-image"><img
                                                    src="https://sdn.geekzu.org/avatar/641dc07b0ec22b5dd4a5be73766c49be?s=96&amp;d=https%3A%2F%2F1.gravatar.com%2Favatar%2Faf124cedd8c311f57720e7b1e675edab&amp;r=g"></span><span
                                                class="title-text"><span></span></span></div>
                                        <ul class="list">

                                            <li class="clearfix">
                                                <div class="content">
                                                    <p><!-- wp:paragraph --></p>
                                                    <p>启用了R主题</p>
                                                    <p><!-- /wp:paragraph --></p>

                                                </div>
                                                <div class="date"><i class="pandastudio-icons-clock"></i>
                                                    2023-04-01
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
        <div class="float-tools-container">
            <div class="float-tools">
                <div class="float-tools-button">
                    <button class="scroll2top" @click="ElMessage({ message: '回顶部', duration: 3000 })">
                        <el-icon color="#fff" :size="20">
                            <Upload />
                        </el-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <TheFooter></TheFooter>
    </footer>
</template>

<script setup lang="ts">
import PostsCarousel from '~/components/PostsCarousel.vue';
import { usePostsStore } from '~/stores/posts';
import { Slide } from '~/types/PostTypes';

const route = useRoute();
const postsStore = usePostsStore();

const slides = ref<Slide[]>([]);
if (route.path === "/") {
    const homePagePinnedSlides = await postsStore.getHomePagePinnedSlides();
    const homePageNewestSlides = await postsStore.getHomePageNewestSlides();

    slides.value = homePagePinnedSlides.concat(homePageNewestSlides);
}

</script>
