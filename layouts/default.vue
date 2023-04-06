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
                                <div class="head-img"><img
                                        src="https://sdn.geekzu.org/avatar/641dc07b0ec22b5dd4a5be73766c49be?s=96&amp;d=https%3A%2F%2F1.gravatar.com%2Favatar%2Faf124cedd8c311f57720e7b1e675edab&amp;r=g">
                                </div>
                            </div>
                        </div>
                        <div class="blogger-name">磅礴</div>
                        <div class="blogger-description">锦绣，丹青与成栋</div>
                    </div>
                    <div class="sidebar-sticky">
                        <div class="sidebar-selector">
                            <a data-sidebar-key="custom1" class="active" click="this.handleSidebarSelectorClick(el)"><i
                                    class="pandastudio-icons-fire"></i></a><a data-sidebar-key="custom2"
                                click="this.handleSidebarSelectorClick(el)"><i class="pandastudio-icons-heart"></i></a>
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
        "><img class="discbar" src="//www.ipangbo.cn/wp-content/themes/R//assets/frontend/theme_modules/static/discbar.png"
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

<!-- <style scoped>
header {
    height: 230px;
    background: linear-gradient(#505460, #707480);
    border-bottom: 1px solid #fff;
    border-bottom: 1px solid var(--white_default);
}

.r-container {
    border-radius: 10px;
    background: rgba(0, 4, 10, .7);
    padding: 4px 9px;
    box-shadow: 0 10px 15px rgba(0, 4, 10, .2);
    display: flex;
    flex-direction: column;
}

.content-container {
    width: 90%;
    max-width: 1648px;
    margin-left: auto;
    margin-right: auto;
}

#main {
    margin-top: -55px;
    flex-grow: 1;
}

.r-container>.r-content {
    background: #fff;
    background: var(--white_default);
    border-radius: 8px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.float-tools-container {
    position: sticky;
    z-index: 4;
    bottom: 0;
    height: 0;
}

.top-slider-nav {
    box-shadow: inset 0 -1px rgba(48, 52, 63, .1);
    box-shadow: 0 -1px var(--gray_opacity_1) inset;
    position: relative;
    margin: 0 -0.2px;
}

.pf-slider {
    height: 350px;
    background: linear-gradient(#636673, #3f414b 75%, #636673);
    border-radius: 5px 5px 0 0;
}

.top-slider-nav nav {
    background-image: linear-gradient(rgba(0, 0, 0, .3), transparent);
    height: 50px;
    box-shadow: inset 0 1px hsla(0, 0%, 100%, .1), inset 0 -1px rgba(0, 0, 0, .15), 0 1px hsla(0, 0%, 100%, .07);
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 5px 5px 0 0;
    text-align: center;
    white-space: nowrap;
    font-size: 0;
}

.top-slider-nav nav li {
    display: inline-block;
    align-items: center;
    height: 50px;
}

.top-slider-nav li.current-menu-item {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCI+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNDAiIGN5PSIyOSIgcj0iMjciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAzMikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMwMDAiIHN0b3Atb3BhY2l0eT0iLjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMwMDAiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggZD0iTTM0IDBoMTNsMzMgMzBIMEwzNCAweiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjYSkiIGZpbHRlcj0idXJsKCNiKSIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjQwIiBjeT0iMjciIHI9IjIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMzIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmNmZjAwIiBzdG9wLW9wYWNpdHk9Ii41Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmNmZjAwIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlR3JhcGhpYyIgc3RkRGV2aWF0aW9uPSIxIi8+PC9maWx0ZXI+PHBhdGggZD0iTTM2IDBoOC44TDU3IDMwSDIzTDM2IDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNjKSIgZmlsdGVyPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTMzIDBoMTVjMCAxLjctMS4zIDMtMyAzaC05Yy0xLjcgMC0zLTEuMy0zLTN6IiBmaWxsPSIjZmY5MDAwIi8+PC9zdmc+);
}

.top-slider-nav nav li.current-menu-item {
    background-repeat: no-repeat;
    background-position: top;
}

.top-slider-nav nav li a {
    height: 46px;
    line-height: 46px;
    padding: 0 10px;
    margin: 2px 0;
    display: block;
    color: #fff;
    font-size: 14px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    border-radius: 4px;
    transition: .25s;
}

.top-slider-nav nav li.current-menu-item a {
    color: #ffab00;
    color: var(--analogous_default);
    text-shadow: 0 3px 3px rgba(0, 0, 0, .5);
}

.float-tools-container .float-tools {
    float: right;
    transform: translateY(calc(-100% - 50px)) translateX(calc(100% + 9px));
    background: rgba(0, 4, 10, .7);
    box-shadow: 0 10px 15px rgba(48, 52, 63, .2);
    box-shadow: 0 10px 15px var(--gray_opacity_2);
    border-radius: 0 8px 8px 0;
}

.float-tools-container .float-tools-button button {
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    padding: 0 5px 0 0;
    cursor: pointer;
}

.float-tools-container .float-tools-button button>i {
    color: #adb2bc;
    color: var(--gray_6);
    transition: .25s;
}

.top-slider-nav nav li a:hover {
    color: #ffab00;
    color: var(--analogous_default);
}

.float-tools-container .float-tools-button button:hover>i {
    color: #ffab00;
    color: var(--analogous_default);
}

#wrapper #main .main-row,
#wrapper #main .main-row-reverse {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1
}

#wrapper #main .main-row-reverse .sidebar-column,
#wrapper #main .main-row .sidebar-column {
    background: #f0f2f7;
    background: var(--gray_9);
    width: 230px;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 0 0 0 5px;
    border-right: 1px solid #cbd0da;
    border-right: 1px solid var(--gray_7);
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {

    #wrapper #main .main-row-reverse .sidebar-column,
    #wrapper #main .main-row .sidebar-column {
        overflow-y: auto;
        opacity: 0;
        transform: translateX(-230px) translateZ(100px);
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 1000;
        border-radius: 0;
        border-right: 0;
        box-shadow: 5px 0 8px rgba(48, 52, 63, .2), inset -1px 0 #fff;
        box-shadow: 5px 0 8px var(--gray_opacity_2), -1px 0 var(--white_default) inset;
        transition: visibility 0s ease .35s, opacity .35s, transform .35s
    }
}

#wrapper #main .main-row-reverse .sidebar-shadow,
#wrapper #main .main-row .sidebar-shadow {
    display: none
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {

    #wrapper #main .main-row-reverse .sidebar-shadow,
    #wrapper #main .main-row .sidebar-shadow {
        visibility: hidden;
        opacity: 0;
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(48, 52, 63, .5);
        background-color: var(--gray_opacity_5);
        z-index: 1000;
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        transform: translateZ(100px);
        transition: visibility 0s ease .35s, opacity .35s
    }
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {

    #wrapper #main .main-row-reverse.show-sidebar .sidebar-column,
    #wrapper #main .main-row.show-sidebar .sidebar-column {
        visibility: visible;
        opacity: 1;
        transform: translateX(0) translateZ(100px);
        transition: visibility 0s, opacity .35s, transform .35s
    }

    #wrapper #main .main-row-reverse.show-sidebar .sidebar-shadow,
    #wrapper #main .main-row.show-sidebar .sidebar-shadow {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity .35s
    }
}

#wrapper #main .main-row-reverse .main-column,
#wrapper #main .main-row .main-column {
    width: calc(100% - 230px);
    flex-grow: 0;
    flex-shrink: 0;
    background: #fff;
    background: var(--white_default);
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset;
    border-radius: 0 0 5px 0;
    overflow: hidden
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {

    #wrapper #main .main-row-reverse .main-column,
    #wrapper #main .main-row .main-column {
        width: 100%;
        border-radius: 0 0 5px 5px
    }
}

#wrapper #main .main-row-reverse .main-column-full,
#wrapper #main .main-row .main-column-full {
    width: 100%;
    background: #fff;
    background: var(--white_default);
    border-radius: 0 0 5px 5px;
    overflow: hidden
}

#wrapper #main .main-row {
    flex-direction: row
}

#wrapper #main .main-row .sidebar-column {
    border-right: none;
    border-left: 1px solid #cbd0da;
    border-left: 1px solid var(--gray_7);
    border-radius: 0 0 5px 0
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {
    #wrapper #main .main-row .sidebar-column {
        transform: translateX(230px) translateZ(100px);
        left: unset;
        right: 0;
        border-left: 0;
        box-shadow: -5px 0 8px rgba(48, 52, 63, .2), inset 1px 0 #fff;
        box-shadow: -5px 0 8px var(--gray_opacity_2), 1px 0 var(--white_default) inset
    }
}

#wrapper #main .main-row .main-column {
    border-radius: 0 0 0 5px
}

#wrapper #main .main-row-reverse .sidebar-column {
    background: #f0f2f7;
    background: var(--gray_9);
    width: 230px;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 0 0 0 5px;
    border-right: 1px solid #cbd0da;
    border-right: 1px solid var(--gray_7);
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset;
}

.sidebar-column .pf_blogger {
    position: relative;
    margin-top: -35px;
    text-align: center
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {
    .sidebar-column .pf_blogger {
        margin-top: 10px
    }
}

.sidebar-column .pf_blogger .blogger_head {
    width: 80px;
    height: 74px;
    margin: auto
}

.sidebar-column .pf_blogger .blogger_head .r-content {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    z-index: 1
}

.sidebar-column .pf_blogger .blogger_head .head-img {
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .3);
    transform: translateZ(0)
}

.sidebar-column .pf_blogger .blogger_head .head-img:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(hsla(0, 0%, 100%, .9), hsla(0, 0%, 100%, .2));
    animation: blogger-head-light 7s ease-in infinite
}

@keyframes blogger-head-light {
    0% {
        transform: rotate(.463rad) scaleY(1.4) scaleX(.6) translateX(-128px)
    }

    40% {
        transform: rotate(.463rad) scaleY(1.4) scaleX(.3) translateX(200px);
        opacity: 0
    }

    40.01% {
        transform: rotate(.463rad) scaleY(1.4) scaleX(.5) translateX(-128px);
        opacity: 0
    }

    50% {
        transform: rotate(.463rad) scaleY(1.4) scaleX(.5) translateX(-128px);
        opacity: 1
    }

    70% {
        transform: rotate(.463rad) scaleY(1.4) scaleX(.1) translateX(180px);
        opacity: 0
    }

    to {
        transform: rotate(.463rad) scaleY(1.4) scaleX(.1) translateX(180px);
        opacity: 0
    }
}

.sidebar-column .pf_blogger .blogger_head .head-img img {
    width: 70px;
    height: 70px;
    position: relative;
    z-index: -1
}

.sidebar-column .pf_blogger .blogger-name {
    font-size: 15px;
    color: #50545f;
    color: var(--gray_1);
    margin: 15px 0 5px
}

.sidebar-column .pf_blogger .blogger-description {
    font-size: 12px;
    margin-bottom: 30px
}

.sidebar-column .sidebar-sticky {
    position: sticky;
    top: 50px;
    max-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column
}

@media (max-width: 479px),
(min-width:480px) and (max-width:767px),
(min-width:768px) and (max-width:991px) {
    .sidebar-column .sidebar-sticky {
        position: static;
        max-height: 100vh
    }
}

.sidebar-column .sidebar-sticky .sidebar-selector {
    height: 34px;
    background: linear-gradient(hsla(0, 0%, 100%, 0), #fff);
    background: linear-gradient(var(--white_opacity_0), var(--white_default));
    border-bottom: 1px solid #cbd0da;
    border-bottom: 1px solid var(--gray_7);
    box-shadow: 0 1px #fff;
    box-shadow: 0 1px var(--white_default);
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-grow: 0;
    flex-shrink: 0
}

.sidebar-column .sidebar-sticky .sidebar-selector a {
    cursor: pointer;
    min-width: 50px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #70747f;
    color: var(--gray_3);
    background-repeat: no-repeat;
    background-position: center 31px;
    background-size: 0 0;
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default);
    transition: .3s
}

.sidebar-column .sidebar-sticky .sidebar-selector a.active {
    color: #ff7800;
    color: var(--primary_default);
    background-position: center 0;
    background-size: 80px 30px;
    transition: .3s ease .2s
}

.sidebar-column .sidebar-sticky .sidebar-content {
    overflow: auto;
    padding: 15px
}

.sidebar-column .sidebar-sticky .sidebar-content .sidebar-panel {
    opacity: 0;
    transition: .25s
}

.sidebar-column .sidebar-sticky .sidebar-content .sidebar-panel.active {
    opacity: 1
}

#wrapper #main .main-row-reverse .sidebar-column+.sidebar-column,
#wrapper #main .main-row .sidebar-column+.sidebar-column {
    order: -1;
    background: #fff;
    background: var(--white_default);
    border-right: 0;
    border-left: 1px solid #e5e9ef;
    border-left: 1px solid var(--gray_8);
    border-radius: 0 0 5px 0
}

.r-widget-title {
    margin-bottom: 10px
}

.r-widget-title .r-content {
    background: linear-gradient(#fff, #e5e9ef);
    background: linear-gradient(var(--white_default), var(--gray_8));
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset;
    height: 30px;
    flex-direction: row;
    align-items: center;
    border-radius: 5px
}

.r-widget-title .widget-icon {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDEzIj48cGF0aCBkPSJNMS42IDEzVjUuMWMwLS43LjItMS40LjYtMS45LjUtLjUgMS4xLS44IDEuOC0uNy42IDAgMS4yLjIgMS42LjYuNC4zLjYuOC42IDEuMyAwIC42LS4yIDEuMS0uNyAxLjVzLTEuMi41LTEuOC41SDIuM3YxLjRoMS44Yy42IDAgMS4zLjIgMS44LjYuNC42LjYgMS4zLjUgMlYxM0g4VjkuOGMwLS43LS4xLTEuNC0uNC0xLjktLjMtLjUtLjgtLjktMS40LTEgLjUtLjMuOS0uNiAxLjItMS4xLjMtLjQuNC0xIC40LTEuNSAwLS45LS40LTEuOC0xLjEtMi40UzUgMSA0IDFjLTEuMSAwLTIuMi40LTIuOSAxLjJDLjMgMy4xLS4xIDQuMyAwIDUuNFYxM2gxLjZ6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzLjk5MiIgeTE9IjM4IiB4Mj0iMy45OTIiIHkyPSIyNi4wMDIiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjYpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjc4MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYTAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0xLjYgMTJWNC4xYzAtLjcuMi0xLjQuNi0xLjkuNS0uNSAxLjEtLjggMS44LS44LjYgMCAxLjIuMiAxLjYuNnMuNi45LjYgMS40YzAgLjYtLjIgMS4xLS43IDEuNS0uNS4zLTEuMi41LTEuOC41SDIuM3YxLjRoMS44Yy42LS4xIDEuMy4xIDEuOC41LjQuNi42IDEuMy41IDJWMTJIOFY4LjhjMC0uNy0uMS0xLjQtLjQtMS45LS4zLS41LS44LS45LTEuNC0xIC41LS4zLjktLjYgMS4yLTEuMS4zLS40LjQtMSAuNC0xLjUgMC0uOS0uNC0xLjgtMS4xLTIuNFM1IDAgNCAwQzIuOS0uMSAxLjguNCAxLjEgMS4yYy0uOC45LTEuMiAyLTEuMSAzLjJWMTJoMS42eiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=) no-repeat 50% calc(50% + .5px)/8px 13px, radial-gradient(circle closest-corner at center bottom, rgba(255, 170, 0, .3), rgba(255, 170, 0, 0))
}

.r-widget-title .widget-icon:after {
    content: "";
    display: block;
    width: 1px;
    height: 11px;
    background: #cbd0da;
    background: var(--gray_7);
    box-shadow: -1px 1px #fff;
    box-shadow: -1px 1px var(--white_default)
}

.r-widget-title h4 {
    font-size: 14px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 30px);
    padding: 0 5px;
    background: linear-gradient(90deg, #ff7800, #80848f);
    background: linear-gradient(90deg, var(--primary_default), var(--gray_4));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 1px #FFFFFF);
    filter: drop-shadow(0 1px var(--white_default))
}

.sidebar-panel>.widget {
    margin-bottom: 30px
}

.sidebar-panel .pf_search .r-content {
    background: linear-gradient(#fff, #e5e9ef);
    background: linear-gradient(var(--white_default), var(--gray_8));
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset;
    height: 36px;
    flex-direction: row;
    align-items: center;
    border-radius: 5px
}

.sidebar-panel .pf_search input {
    width: calc(100% - 46px);
    margin: 0 5px;
    padding: 4px 5px;
    border: 0;
    border-radius: 4px;
    background: transparent;
    transition: .35s
}

.sidebar-panel .pf_search input:focus {
    background: linear-gradient(#e5e9ef, #fff);
    background: linear-gradient(var(--gray_8), var(--white_default))
}

.sidebar-panel .pf_search button {
    padding: 0;
    border: 0;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    color: #ff7800;
    color: var(--primary_default);
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default);
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNyI+PHBhdGggZD0iTTE1LjUgMTYuNWMtLjYuNi0xLjYuNi0yLjIgMEwxMS44IDE1Yy0uNC0uNC0uNi0xLS40LTEuNi0zIDIuNC03LjQgMS45LTkuOC0xLjFTLS4zIDUgMi43IDIuNXM3LjQtMS45IDkuOCAxLjFDMTMuNSA0LjkgMTQgNi40IDE0IDhzLS42IDMuMS0xLjYgNC40Yy42LS4yIDEuMiAwIDEuNi40bDEuNSAxLjVjLjYuNi42IDEuNiAwIDIuMnpNNyAyLjVDNCAyLjUgMS41IDUgMS41IDhTNCAxMy41IDcgMTMuNSAxMi41IDExIDEyLjUgOCAxMCAyLjUgNyAyLjV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4LjAxNSIgeTE9IjM3Ljk5MSIgeDI9IjguMDE1IiB5Mj0iMjEuOTk3IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTIyKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmY3ODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmEwIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMTUuNSAxNS41Yy0uNi42LTEuNi42LTIuMiAwTDExLjggMTRjLS40LS40LS42LTEtLjQtMS42LTMgMi40LTcuNCAxLjktOS44LTEuMVMtLjMgMy45IDIuNyAxLjVzNy40LTEuOSA5LjggMS4xQzEzLjUgMy45IDE0IDUuNCAxNCA3cy0uNiAzLjEtMS42IDQuNGMuNi0uMiAxLjIgMCAxLjYuNGwxLjUgMS41Yy42LjYuNiAxLjYgMCAyLjJ6TTcgMS41QzQgMS41IDEuNSA0IDEuNSA3UzQgMTIuNSA3IDEyLjUgMTIuNSAxMCAxMi41IDcgMTAgMS41IDcgMS41eiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=) no-repeat 50% calc(50% + .5px)/16px 17px, radial-gradient(circle closest-corner at center bottom, rgba(255, 170, 0, .3), rgba(255, 170, 0, 0));
    display: flex;
    align-items: center
}

.sidebar-panel .pf_search button:before {
    content: "";
    display: block;
    width: 1px;
    height: 11px;
    background: #cbd0da;
    background: var(--gray_7);
    box-shadow: -1px 1px #fff;
    box-shadow: -1px 1px var(--white_default)
}

.sidebar-panel .widget_nav_menu ul {
    padding: 15px 0 50px;
    position: relative
}

.sidebar-panel .widget_nav_menu ul:before {
    content: "";
    position: absolute;
    width: 4px;
    top: 0;
    left: calc(50% - 2px);
    bottom: 0;
    border: 1px solid #cbd0da;
    border: 1px solid var(--gray_7);
    z-index: 1;
    box-shadow: inset 1px 0 #fff, inset -1px 0 #f0f2f7, 0 3px 5px rgba(0, 4, 10, .06);
    box-shadow: 1px 0 var(--white_default) inset, -1px 0 var(--gray_9) inset, 0 3px 5px rgba(0, 4, 10, .06)
}

.sidebar-panel .widget_nav_menu ul:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    top: 0;
    left: calc(50% - 4px);
    border: 1px solid #70747f;
    border: 1px solid var(--gray_3);
    background: linear-gradient(#adb2bc, #70747f);
    background: linear-gradient(var(--gray_6), var(--gray_3));
    z-index: 1;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .4), 0 3px 5px rgba(0, 4, 10, .2);
    box-shadow: 0 0 0 1px var(--white_opacity_4) inset, 0 3px 5px rgba(0, 4, 10, .2);
    border-radius: 50%
}

.sidebar-panel .widget_nav_menu ul li {
    list-style: none;
    display: inline-block;
    width: 50%;
    position: relative
}

.sidebar-panel .widget_nav_menu ul li:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    top: 50%;
    border: 1px solid #ff7800;
    border: 1px solid var(--primary_default);
    background: linear-gradient(#ffab00, #ff7800);
    background: linear-gradient(var(--analogous_default), var(--primary_default));
    z-index: 1;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .4), 0 3px 5px rgba(255, 120, 0, .3);
    box-shadow: 0 0 0 1px var(--white_opacity_4) inset, 0 3px 5px var(--primary_opacity_3);
    border-radius: 50%
}

.sidebar-panel .widget_nav_menu ul li:last-child:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 6px;
    bottom: -50px;
    border-radius: 5px 5px 0 0;
    border: 1px solid #70747f;
    border: 1px solid var(--gray_3);
    background: linear-gradient(#adb2bc, #70747f);
    background: linear-gradient(var(--gray_6), var(--gray_3));
    z-index: 1;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .4), 0 3px 5px rgba(0, 4, 10, .2);
    box-shadow: 0 0 0 1px var(--white_opacity_4) inset, 0 3px 5px rgba(0, 4, 10, .2)
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd):last-child:after {
    left: -12px
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n):last-child:after {
    right: -12px
}

.sidebar-panel .widget_nav_menu ul li .link-wrapper {
    display: inline-flex;
    max-width: 100%;
    position: relative
}

.sidebar-panel .widget_nav_menu ul li .link-wrapper:after {
    content: "";
    position: absolute;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    top: calc(50% - 4px)
}

.sidebar-panel .widget_nav_menu ul li .link-wrapper .r-content {
    height: 30px;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px var(--white_default) inset;
    justify-content: center;
    padding: 0 8px
}

.sidebar-panel .widget_nav_menu ul li a {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 1px #FFFFFF);
    filter: drop-shadow(0 1px var(--white_default));
    transition: .25s
}

.sidebar-panel .widget_nav_menu ul li a:hover {
    -webkit-text-fill-color: #ff7800;
    -webkit-text-fill-color: var(--primary_default)
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd) {
    margin-left: 50%;
    padding-left: 2px
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd):before {
    left: -4px
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd) .link-wrapper {
    padding-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd) .link-wrapper:after {
    right: 1px;
    border-left: 4px solid #fff;
    border-left: 4px solid var(--white_default)
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd) .link-wrapper .r-content {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: radial-gradient(circle closest-corner at left 50%, rgba(255, 171, 0, .3), rgba(255, 171, 0, 0)), linear-gradient(#fff, #f0f2f7);
    background: radial-gradient(circle closest-corner at left 50%, var(--analogous_opacity_3), var(--analogous_opacity_0)), linear-gradient(var(--white_default), var(--gray_9))
}

.sidebar-panel .widget_nav_menu ul li:nth-child(odd) a {
    background: linear-gradient(90deg, #ff7800, #80848f);
    background: linear-gradient(90deg, var(--primary_default), var(--gray_4));
    -webkit-background-clip: text;
    background-clip: text
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n) {
    text-align: right;
    padding-right: 2px
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n):before {
    right: -4px
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n) .link-wrapper {
    padding-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n) .link-wrapper:after {
    left: 1px;
    border-right: 4px solid #fff;
    border-right: 4px solid var(--white_default)
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n) .link-wrapper .r-content {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: radial-gradient(circle closest-corner at right 50%, rgba(255, 171, 0, .3), rgba(255, 171, 0, 0)), linear-gradient(#fff, #f0f2f7);
    background: radial-gradient(circle closest-corner at right 50%, var(--analogous_opacity_3), var(--analogous_opacity_0)), linear-gradient(var(--white_default), var(--gray_9))
}

.sidebar-panel .widget_nav_menu ul li:nth-child(2n) a {
    background: linear-gradient(90deg, #80848f, #ff7800);
    background: linear-gradient(90deg, var(--gray_4), var(--primary_default));
    -webkit-background-clip: text;
    background-clip: text;
}

.sidebar-panel .music_box_wrapper {
    background-color: rgba(0, 4, 10, .7);
    box-shadow: inset 0 0 0 1px rgba(0, 4, 10, .4), inset 0 0 0 2px hsla(0, 0%, 100%, .15), 0 5px 8px rgba(0, 4, 10, .2);
    border-radius: 7px;
    padding: 0 5px 5px;
    -webkit-user-select: none;
    user-select: none
}

.sidebar-panel .music_box_wrapper .album .icon {
    height: 66px;
    width: 66px;
    float: left;
    position: relative
}

.sidebar-panel .music_box_wrapper .album .icon .disc {
    margin-top: 2px
}

.sidebar-panel .music_box_wrapper .album .icon .discbar {
    position: absolute;
    top: -8px;
    left: 0;
    transform-origin: 9px 9px;
    transform: rotate(15deg);
    transition: .5s cubic-bezier(0, 2, .6, 1)
}

.sidebar-panel .music_box_wrapper .album .icon .discbar.is-playing {
    transform: none
}

.sidebar-panel .music_box_wrapper .album .info {
    width: calc(100% - 66px);
    float: left;
    height: 64px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-shadow: 0 2px 3px rgba(0, 4, 10, .3);
    padding-right: 10px
}

.sidebar-panel .music_box_wrapper .album .info .title {
    line-height: 1.2em;
    max-height: 2.4em;
    overflow: hidden
}

.sidebar-panel .music_box_wrapper .album .info .time {
    font-size: 12px;
    opacity: .5
}

.sidebar-panel .music_box_wrapper .controls {
    height: 30px;
    margin: 0 -4px;
    background: linear-gradient(rgba(0, 4, 10, .4), rgba(0, 4, 10, .4)) no-repeat 0 0/100% 1px, linear-gradient(hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1)) no-repeat 0 1px/100% 1px, linear-gradient(hsla(0, 0%, 100%, .06) 2px, hsla(0, 0%, 100%, 0))
}

.sidebar-panel .music_box_wrapper .controls .buttons {
    display: flex;
    justify-content: space-around
}

.sidebar-panel .music_box_wrapper .controls .buttons button {
    background: none;
    border: none;
    height: 27px;
    color: hsla(0, 0%, 100%, .5);
    text-shadow: 0 2px 3px rgba(0, 4, 10, .4);
    transition: .25s
}

.sidebar-panel .music_box_wrapper .controls .buttons button:hover {
    color: hsla(0, 0%, 100%, .8)
}

.sidebar-panel .music_box_wrapper .controls .buttons button[disabled] {
    color: hsla(0, 0%, 100%, .2);
    text-shadow: 0 -1px rgba(0, 4, 10, .2)
}

.sidebar-panel .music_box_wrapper .controls .buttons button.next,
.sidebar-panel .music_box_wrapper .controls .buttons button.prev {
    font-size: 12px
}

.sidebar-panel .music_box_wrapper .controls .buttons button.play .pandastudio-icons-music-pause {
    display: none
}

.sidebar-panel .music_box_wrapper .controls .pf_progress {
    padding: 0 0 0 5px;
    opacity: 0;
    visibility: hidden;
    transition: .25s
}

.sidebar-panel .music_box_wrapper .controls .processing {
    position: relative;
    height: 3px;
    background: linear-gradient(-90deg, #ffab00, rgba(255, 171, 0, 0)) no-repeat 0 1px/100% 1px, linear-gradient(-90deg, rgba(255, 171, 0, .2), rgba(255, 171, 0, 0) 50%);
    background: linear-gradient(-90deg, var(--analogous_default), var(--analogous_opacity_0)) no-repeat 0 1px/100% 1px, linear-gradient(-90deg, var(--analogous_opacity_2), var(--analogous_opacity_0) 50%)
}

.sidebar-panel .music_box_wrapper .controls .processing .dragger {
    position: absolute;
    top: -1px;
    right: 0;
    width: 5px;
    height: 5px;
    background: linear-gradient(90deg, #ffab00, #ff7800);
    background: linear-gradient(90deg, var(--analogous_default), var(--primary_default));
    box-shadow: 0 0 6px 1px #ffab00;
    box-shadow: 0 0 6px 1px var(--analogous_default);
    border-radius: 50%;
    cursor: ew-resize
}

.sidebar-panel .music_box_wrapper .controls.is-playing .buttons button.play {
    color: #ffab00;
    color: var(--analogous_default);
    text-shadow: 0 2px 3px rgba(0, 4, 10, .2), 0 -1px #fff
}

.sidebar-panel .music_box_wrapper .controls.is-playing .buttons button.play .pandastudio-icons-music-play {
    display: none
}

.sidebar-panel .music_box_wrapper .controls.is-playing .buttons button.play .pandastudio-icons-music-pause {
    display: block
}

.sidebar-panel .music_box_wrapper .controls.is-playing .pf_progress {
    opacity: 1;
    visibility: visible
}

.sidebar-panel .music_box_wrapper .songs {
    padding: 0;
    margin: 0;
    border-radius: 4px
}

.sidebar-panel .music_box_wrapper .songs li {
    display: block;
    list-style: none;
    border: 1px solid #fff;
    line-height: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #70747f;
    color: var(--gray_3);
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default)
}

.sidebar-panel .music_box_wrapper .songs li:not(.is-playing):hover .song_name {
    color: #ff7800;
    color: var(--primary_default)
}

.sidebar-panel .music_box_wrapper .songs li:nth-child(odd) {
    background: #f0f2f7;
    background: var(--gray_9);
    border-bottom-color: #f0f2f7;
    border-bottom-color: var(--gray_9);
    border-top-color: #f0f2f7;
    border-top-color: var(--gray_9)
}

.sidebar-panel .music_box_wrapper .songs li:nth-child(2n) {
    background: #e5e9ef;
    background: var(--gray_8);
    border-bottom-color: #e5e9ef;
    border-bottom-color: var(--gray_8);
    border-top-color: #e5e9ef;
    border-top-color: var(--gray_8)
}

.sidebar-panel .music_box_wrapper .songs li:first-child {
    border-top-color: #fff;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px
}

.sidebar-panel .music_box_wrapper .songs li:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-color: #fff
}

.sidebar-panel .music_box_wrapper .songs li:not(.playing) {
    cursor: pointer
}

.sidebar-panel .music_box_wrapper .songs li .song_name {
    width: calc(100% - 30px);
    flex-grow: 0;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: .25s
}

.sidebar-panel .music_box_wrapper .songs li .song_state {
    width: 30px;
    flex-shrink: 0
}

.sidebar-panel .music_box_wrapper .songs li .song_state>* {
    display: none;
    margin: auto
}

.sidebar-panel .music_box_wrapper .songs li.is-playing {
    border-color: #ff7800;
    border-color: var(--primary_default);
    background-image: linear-gradient(#ffab00, rgba(255, 171, 0, 0)), repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0, 4, 10, .02) 0, rgba(0, 4, 10, .02) 8px);
    background-image: linear-gradient(var(--analogous_default), var(--analogous_opacity_0)), repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0, 4, 10, .02) 0, rgba(0, 4, 10, .02) 8px);
    background-color: #ff7800;
    background-color: var(--primary_default);
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .1);
    color: #fff;
    text-shadow: 0 -1px rgba(0, 4, 10, .1)
}

.sidebar-panel .music_box_wrapper .songs li.is-playing .song_state .playing {
    display: block;
    background: rgba(0, 4, 10, .3);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    box-shadow: inset 0 1px rgba(0, 4, 10, .2), 0 1px hsla(0, 0%, 100%, .2);
    position: relative
}

.sidebar-panel .music_box_wrapper .songs li.is-playing .song_state .playing:before {
    content: "";
    position: absolute;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 6px solid #fff;
    top: calc(50% - 4px);
    right: 4px
}

.sidebar-panel .music_box_wrapper .songs li.is-error .song_state .error {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ff4949
}

.sidebar-panel .music_box_wrapper .songs li.is-loading .song_state .loading {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border-left: 1px solid #ff7800;
    border-bottom: 1px solid #ff7800;
    border-right: 1px solid #ff7800;
    border: 1px solid var(--primary_default);
    border-top: 1px solid transparent;
    animation: rotate 1s linear infinite
}

@keyframes rotate {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(1turn)
    }
}

.sidebar-panel .widget_pf_tts .album {
    background: rgba(0, 4, 10, .7);
    border: 1px solid rgba(0, 4, 10, .7);
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2), 0 10px 15px rgba(0, 4, 10, .2);
    border-radius: 6px 0 0 6px;
    padding-left: 10px
}

.sidebar-panel .widget_pf_tts .album .img_wrapper {
    position: relative
}

.sidebar-panel .widget_pf_tts .album .img_wrapper:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 50%;
    bottom: 0;
    background: linear-gradient(hsla(0, 0%, 100%, .6), hsla(0, 0%, 100%, .1));
    -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
    transform-origin: left;
    animation: tts_hightlight 8s linear infinite
}

@keyframes tts_hightlight {
    0% {
        opacity: 0;
        transform: scaleX(.4)
    }

    63% {
        opacity: 1;
        transform: scaleX(1)
    }

    90% {
        opacity: 0;
        transform: scaleX(1.2)
    }

    to {
        opacity: 0
    }
}

.sidebar-panel .widget_pf_tts .album .img {
    width: 187px;
    height: 167px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .3)
}

.sidebar-panel .widget_pf_tts .controls {
    margin-top: 5px;
    display: flex;
    justify-content: center
}

.sidebar-panel .widget_pf_tts .controls:before {
    content: "";
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(0, 4, 10, .7);
    left: calc(50% - 5px)
}

.sidebar-panel .widget_pf_tts .pill {
    margin-top: 5px;
    height: 32px;
    background: linear-gradient(rgba(0, 4, 10, .6), rgba(0, 4, 10, .7));
    border-radius: 99px;
    border: 1px solid rgba(0, 4, 10, .7);
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2), 0 5px 8px rgba(0, 4, 10, .2);
    display: flex;
    align-items: center;
    padding-left: 5px
}

.sidebar-panel .widget_pf_tts .pill.init {
    cursor: pointer
}

.sidebar-panel .widget_pf_tts .pill.init:hover .state {
    color: #fff
}

.sidebar-panel .widget_pf_tts .pill button {
    background: rgba(0, 4, 10, .15);
    box-shadow: inset 0 3px 5px rgba(0, 4, 10, .3), 0 1px hsla(0, 0%, 100%, .1);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    border: none;
    padding: 0;
    color: #ffab00;
    color: var(--analogous_default);
    text-shadow: 0 2px 3px rgba(0, 4, 10, .2), 0 -1px #fff
}

.sidebar-panel .widget_pf_tts .pill button .pandastudio-icons-music-play {
    display: block
}

.sidebar-panel .widget_pf_tts .pill button.is-playing .pandastudio-icons-music-play,
.sidebar-panel .widget_pf_tts .pill button .pandastudio-icons-music-pause {
    display: none
}

.sidebar-panel .widget_pf_tts .pill button.is-playing .pandastudio-icons-music-pause {
    display: block
}

.sidebar-panel .widget_pf_tts .pill button i {
    transform: scale(.8)
}

.sidebar-panel .widget_pf_tts .pill .state {
    font-size: 13px;
    color: hsla(0, 0%, 100%, .7);
    text-shadow: 0 -1px rgba(0, 4, 10, .5);
    padding-left: 8px;
    padding-right: 15px;
    transition: .25s
}

.sidebar-panel .widget_pf_tts .pill .state.is-preparing .pf_default,
.sidebar-panel .widget_pf_tts .pill .state.is-preparing .pf_progress,
.sidebar-panel .widget_pf_tts .pill .state .pf_preparing,
.sidebar-panel .widget_pf_tts .pill .state .pf_progress {
    display: none
}

.sidebar-panel .widget_pf_tts .pill .state.is-preparing .pf_preparing {
    display: block
}

.sidebar-panel .widget_pf_tts .pill .state.is-playing .pf_default,
.sidebar-panel .widget_pf_tts .pill .state.is-playing .pf_preparing {
    display: none
}

.sidebar-panel .widget_pf_tts .pill .state.is-playing .pf_progress {
    display: block
}

.sidebar-panel .widget_pf_tts .pill .state .pf_progress {
    width: 150px;
    height: 2px;
    background: hsla(0, 0%, 100%, .2);
    box-shadow: inset 0 1px #30343f;
    box-shadow: 0 1px var(--gray_0) inset
}

.sidebar-panel .widget_pf_tts .pill .state .processing {
    position: relative;
    height: 3px;
    background: linear-gradient(-90deg, #ffab00, rgba(255, 171, 0, 0)) no-repeat 0 1px/100% 1px, linear-gradient(-90deg, rgba(255, 171, 0, .2), rgba(255, 171, 0, 0) 50%);
    background: linear-gradient(-90deg, var(--analogous_default), var(--analogous_opacity_0)) no-repeat 0 1px/100% 1px, linear-gradient(-90deg, var(--analogous_opacity_2), var(--analogous_opacity_0) 50%)
}

.sidebar-panel .widget_pf_tts .pill .state .processing .dragger {
    position: absolute;
    top: -1px;
    right: 0;
    width: 5px;
    height: 5px;
    background: linear-gradient(90deg, #ffab00, #ff7800);
    background: linear-gradient(90deg, var(--analogous_default), var(--primary_default));
    box-shadow: 0 0 6px 1px #ffab00;
    box-shadow: 0 0 6px 1px var(--analogous_default);
    border-radius: 50%;
    cursor: ew-resize
}

.sidebar-panel .widget_pf_toc_widget .toc {
    position: relative
}

.sidebar-panel .widget_pf_toc_widget .toc:before {
    content: "";
    position: absolute;
    width: 4px;
    top: 0;
    left: 16px;
    bottom: 0;
    border: 1px solid #cbd0da;
    border: 1px solid var(--gray_7);
    z-index: 1;
    box-shadow: inset 1px 0 #fff, inset -1px 0 #f0f2f7, 0 3px 5px rgba(0, 4, 10, .06);
    box-shadow: 1px 0 var(--white_default) inset, -1px 0 var(--gray_9) inset, 0 3px 5px rgba(0, 4, 10, .06)
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2]:before,
.sidebar-panel .widget_pf_toc_widget ul:after,
.sidebar-panel .widget_pf_toc_widget ul:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    left: 14px;
    border: 1px solid #70747f;
    border: 1px solid var(--gray_3);
    background: linear-gradient(#adb2bc, #70747f);
    background: linear-gradient(var(--gray_6), var(--gray_3));
    z-index: 1;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .4), 0 3px 5px rgba(0, 4, 10, .2);
    box-shadow: 0 0 0 1px var(--white_opacity_4) inset, 0 3px 5px rgba(0, 4, 10, .2);
    border-radius: 50%;
    transition: .25s
}

.sidebar-panel .widget_pf_toc_widget ul {
    padding: 15px 0 15px 20px
}

.sidebar-panel .widget_pf_toc_widget ul:after {
    bottom: 0
}

.sidebar-panel .widget_pf_toc_widget ul:before {
    top: 0
}

.sidebar-panel .widget_pf_toc_widget ul li {
    list-style: none
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2] {
    position: relative
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2]:before {
    top: 19px;
    left: -6px
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2] .toc_wrapper {
    cursor: pointer;
    display: inline-flex;
    padding: 2px 5px 2px 0;
    background: rgba(0, 4, 10, .7);
    box-shadow: 0 5px 8px rgba(0, 4, 10, .15);
    border-radius: 0 7px 7px 0;
    margin: 8px 0;
    max-width: 100%;
    transition: .25s
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2] .toc_wrapper span {
    max-width: 100%;
    height: 30px;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background: linear-gradient(#fff, #f0f2f7);
    background: linear-gradient(var(--white_default), var(--gray_9))
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2] .toc_wrapper span a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #80848f;
    color: var(--gray_4);
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default);
    transition: .25s
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2].current:before {
    border-color: #ff7800;
    border-color: var(--primary_default);
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .4), 0 3px 5px rgba(255, 120, 0, .3);
    box-shadow: 0 0 0 1px var(--white_opacity_4) inset, 0 3px 5px var(--primary_opacity_3);
    background: linear-gradient(#ffab00, #ff7800);
    background: linear-gradient(var(--analogous_default), var(--primary_default))
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2].current .toc_wrapper {
    box-shadow: 0 10px 15px rgba(0, 4, 10, .2)
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2].current .toc_wrapper span {
    background: radial-gradient(circle closest-corner at left 50%, rgba(255, 171, 0, .3), rgba(255, 171, 0, 0)), linear-gradient(#fff, #f0f2f7);
    background: radial-gradient(circle closest-corner at left 50%, var(--analogous_opacity_3), var(--analogous_opacity_0)), linear-gradient(var(--white_default), var(--gray_9))
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H2].current .toc_wrapper span a {
    color: #ff7800;
    color: var(--primary_default)
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H3] {
    padding-left: 10px;
    margin: 8px 0
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H3] a {
    color: #80848f;
    color: var(--gray_4);
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default);
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: .25s;
    cursor: pointer
}

.sidebar-panel .widget_pf_toc_widget [data-toc-type=H3].current a {
    color: #ff7800;
    color: var(--primary_default)
}

.sidebar-panel .widget_pf_post_list_widget .list-box {
    background-color: rgba(0, 4, 10, .7);
    box-shadow: inset 0 0 0 1px rgba(0, 4, 10, .4), inset 0 0 0 2px hsla(0, 0%, 100%, .15), 0 5px 8px rgba(0, 4, 10, .2);
    border-radius: 10px 10px 7px 7px;
    padding: 20px 5px 5px;
    margin-top: 17px;
    position: relative
}

.sidebar-panel .widget_pf_post_list_widget .list-box:not([data-filter=relate_posts]) .list-title {
    text-align: center;
    margin-top: -37px;
    margin-bottom: 7px
}

.sidebar-panel .widget_pf_post_list_widget .list-box:not([data-filter=relate_posts]) .list-title .title-text {
    display: inline-block;
    margin: auto;
    position: relative
}

.sidebar-panel .widget_pf_post_list_widget .list-box:not([data-filter=relate_posts]) .list-title .title-text span {
    position: relative;
    display: inline-block;
    border-radius: 5px 5px 2px 2px;
    height: 30px;
    padding: 0 25px;
    line-height: 30px;
    color: #fff;
    text-shadow: 0 -1px #e66c00;
    text-shadow: 0 -1px var(--primary_dark_1);
    background: linear-gradient(90deg, #ff861a, #ffab00, #ff861a);
    z-index: 1;
    white-space: nowrap;
    box-shadow: 0 10px 10px rgba(0, 4, 10, .3)
}

.sidebar-panel .widget_pf_post_list_widget .list-box:not([data-filter=relate_posts]) .list-title .title-text:after {
    content: "";
    width: 34px;
    height: 24px;
    display: block;
    position: absolute;
    right: -25px;
    bottom: -6px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMjUzIiB5MT0iMTUzNCIgeDI9IjIxOSIgeTI9IjE1MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmFiMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNjZjMDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMjUzIDE1MjJoLTM0djI0aDM0bC02LTEyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxOSAtMTUyMikiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik05IDE4bC05IDZWMGg5djE4eiIgZmlsbD0iI2IzNTQwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
}

.sidebar-panel .widget_pf_post_list_widget .list-box:not([data-filter=relate_posts]) .list-title .title-text:before {
    content: "";
    width: 34px;
    height: 24px;
    display: block;
    position: absolute;
    left: -25px;
    bottom: -6px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTA0IiB5MT0iMTUzNCIgeDI9IjEzOCIgeTI9IjE1MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmFiMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNjZjMDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMTA0IDE1MjJoMzR2MjRoLTM0bDYtMTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA0IC0xNTIyKSIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTI1IDE4bDkgNlYwaC05djE4eiIgZmlsbD0iI2IzNTQwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list {
    background: #fff;
    background: var(--white_default);
    padding: 1px;
    border-radius: 4px;
    margin: 0
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 8px 6px;
    position: relative
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li:first-child .badage {
    color: #ffab00
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li:nth-child(2n) {
    background: #f0f2f7;
    background: var(--gray_9)
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li:nth-child(n+4) .badage {
    display: none
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .list_thumbnail {
    margin-right: 7px;
    width: 32px;
    height: 29px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 0 3px 5px rgba(0, 4, 10, .2)
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .badage {
    position: absolute;
    top: -3px;
    right: 2px;
    font-size: 16px;
    color: #cbd0da;
    color: var(--gray_7);
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default)
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos {
    position: relative;
    display: block;
    flex-grow: 1
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .title {
    font-size: 13px;
    display: block;
    transform-origin: top;
    color: #70747f;
    color: var(--gray_3);
    transform-origin: left;
    transition: .25s
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .metas {
    position: absolute;
    font-size: 12px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    transform-origin: bottom;
    transform: translateY(5px) scale(.9);
    transform-origin: left;
    opacity: 0;
    transition: .25s
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .metas>span+span {
    margin-left: 6px
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .metas i {
    margin-right: 3px
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .metas .reads {
    color: #67c23a
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .metas .likes {
    color: #ff4949
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos .metas .comments {
    color: #409eff
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos:hover .title {
    transform: translateY(-5px) scale(.9);
    opacity: 0
}

.sidebar-panel .widget_pf_post_list_widget .list-box .list li .infos:hover .metas {
    transform: none;
    opacity: 1
}

.sidebar-panel .widget_pf_post_list_widget .list-box[data-filter=relate_posts] {
    padding: 0 5px 5px
}

.sidebar-panel .widget_pf_post_list_widget .list-box[data-filter=relate_posts] .list li .badage {
    display: none
}

.sidebar-panel .widget_pf_post_list_widget .list-box[data-filter=relate_posts] .list-title {
    padding: 10px 0;
    text-align: center;
    color: #ffc44d;
    color: var(--analogous_light_3);
    text-shadow: 0 -1px rgba(48, 52, 63, .5);
    text-shadow: 0 -1px var(--gray_opacity_5);
    background-repeat: no-repeat;
    background-position: center 9px
}

.sidebar-panel .widget_pf_microblog .list-box {
    background-color: rgba(0, 4, 10, .7);
    box-shadow: inset 0 0 0 1px rgba(0, 4, 10, .4), inset 0 0 0 2px hsla(0, 0%, 100%, .15), 0 5px 8px rgba(0, 4, 10, .2);
    border-radius: 10px 10px 7px 7px;
    padding: 0 5px 5px;
    margin-top: 17px;
    position: relative
}

.sidebar-panel .widget_pf_microblog .list-box .list-title {
    display: flex;
    align-items: flex-end;
    justify-content: space-between
}

.sidebar-panel .widget_pf_microblog .list-box .list-title .title-image {
    display: inline-block;
    padding: 2px;
    border-radius: 5px;
    background-color: rgba(0, 4, 10, .7);
    box-shadow: inset 0 0 0 1px rgba(0, 4, 10, .4), inset 0 0 0 2px hsla(0, 0%, 100%, .15), 0 5px 8px rgba(0, 4, 10, .2);
    margin: -16px 5px 5px
}

.sidebar-panel .widget_pf_microblog .list-box .list-title .title-image img {
    width: 42px;
    height: 42px;
    border-radius: 3px
}

.sidebar-panel .widget_pf_microblog .list-box .list-title .title-text {
    display: inline-block;
    position: relative;
    margin-bottom: 6px;
    margin-right: 6px;
    text-shadow: 0 -1px rgba(48, 52, 63, .5);
    text-shadow: 0 -1px var(--gray_opacity_5);
    color: #ffc44d;
    color: var(--analogous_light_3)
}

.sidebar-panel .widget_pf_microblog .list-box .list {
    background: #fff;
    background: var(--white_default);
    padding: 1px;
    border-radius: 4px;
    margin: 0
}

.sidebar-panel .widget_pf_microblog .list-box .list li {
    list-style: none;
    padding: 10px;
    position: relative;
    border-bottom: 1px dashed #cbd0da;
    border-bottom: 1px dashed var(--gray_7)
}

.sidebar-panel .widget_pf_microblog .list-box .list li:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px
}

.sidebar-panel .widget_pf_microblog .list-box .list li:last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom: none
}

.sidebar-panel .widget_pf_microblog .list-box .list li:nth-child(2n) {
    background: rgba(0, 4, 10, .02)
}

.sidebar-panel .widget_pf_microblog .list-box .list li .content {
    font-size: 13px;
    text-shadow: 0 1px #fff;
    text-shadow: 0 1px var(--white_default)
}

.sidebar-panel .widget_pf_microblog .list-box .list li .content img {
    max-width: 100%;
    height: auto
}

.sidebar-panel .widget_pf_microblog .list-box .list li .content a {
    color: #ff7800;
    color: var(--primary_default)
}

.sidebar-panel .widget_pf_microblog .list-box .list li .content a:hover {
    color: #ffab00;
    color: var(--analogous_default)
}

.sidebar-panel .widget_pf_microblog .list-box .list li .date {
    font-size: 10px;
    color: #cbd0da;
    color: var(--gray_7);
    text-align: right
}

.sidebar-panel .widget_pf_microblog .list-box .list li .date i {
    margin-right: 3px
}
</style> -->
