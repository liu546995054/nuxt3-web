

const urls = '//www.titan-recycling.com';
const ajaxUrls = '//api.titan-recycling.com'
var news = {
    init: function () {
        const pathname = window.location.pathname;
        if (pathname == '/news' || pathname == '/news.html') {
            window.location.href=urls + '/newsList/p1.html';
        }
        if (pathname.indexOf('/newsList/') != -1) {
            this.newsInit()
        }
        if (pathname.indexOf('/news/') != -1) {
            this.newsDetailInit()
        }
        if (pathname == '/' || pathname == '/index' || pathname == '/index.html') {
            this.newsHomePage()
        }
    },
    newsInit: function () {
        const params = this.getUrlParams();
        jQuery.ajax({
            url: ajaxUrls + '/appBiz/news/page', // 替换为你的API端点
            type: 'get', // 请求类型，可以是GET、POST等
            dataType: 'json', // 期望从服务器返回的数据类型
            data: { current: Number(window.location.pathname.replace('/newsList/p', '').replace('.html', '')), size: 10 }, // 将对象转换为JSON字符串
            success: function (response) {
                // 请求成功时的回调函数
                console.log('Response:', response);
                news.pagesInit(response.data.total, response.data.pages)
                var htmlStr = ''
                response.data.records.map(item => {
                    htmlStr = htmlStr + `<li data-aos="fade-up">
                                                        <figure class="post-thumbnail">
                                                            <a href="${urls}/news/${item.newsUrl}.html">
                                                                <div class="item-cover">
                                                                    <div class="attachment">
                                                                        <div class="thumbnail">
                                                                            <div class="centered">
                                                                                <img style="height:300px;" src="${item.imageUrls}"
                                                                                    alt="${item.newsTitle}"
                                                                                    class="attachment-medium size-medium wp-post-image"
                                                                                    loading="lazy">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <i class="mask"></i>
                                                                </div>
                                                            </a>
                                                        </figure>
                                                        <div class="post-excerpt">
                                                            <h3>
                                                            <a href="${urls}/news/${item.newsUrl}.html" title="${item.newsTitle}">${item.newsTitle}</a>
                                                            </h3>
                                                            <div class="post-meta">
                                                                <span class="date"><i class="fa fa-clock-o"></i>${item.createTime}</span>
                                                            </div>
                                                            <div class="opacity excerpt-content">${item.newsContent}</div>
                                                            <div class="link-read-more">
                                                                <a href="${urls}/news/${item.newsUrl}.html"><span>More</span> <i
                                                                        class="fa fa-angle-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>`
                })

                jQuery('#newsItems').html(htmlStr)
            },
            error: function (xhr, status, error) {
                // 请求失败时的回调函数
                console.error('Error:', error);
            }
        });
    },
    newsDetailInit() {
        // const params = this.getUrlParams();
        // if (params.id) {
            jQuery.ajax({
                url: ajaxUrls + '/appBiz/news/url', // 替换为你的API端点
                type: 'get', // 请求类型，可以是GET、POST等
                dataType: 'json', // 期望从服务器返回的数据类型
                data: { newsUrl: window.location.pathname.replace('/news/', '').replace('.html', '') }, // 将对象转换为JSON字符串
                success: function (response) {
                    // 请求成功时的回调函数
                    console.log('Response:', response);
                    var data = response.data
                    var htmlStrHead = `<h1>${data.newsTitle}</h1>
                    <div class="info">
                        <span>News</span>
                        <span>Publish Time：${data.createTime}</span>
                        <span>Visited：${data.viewTimes || 0} Times</span>
                    </div>`;

                    jQuery('#news-contents-head').html(htmlStrHead);
                    jQuery('#news-contents').html(data.newsContent);
                    news.keyWordDescInit(data.keywords, data.seoTitle || data.newsTitle, data.seoDesc || data.newsDesc)
                },
                error: function (xhr, status, error) {
                    // 请求失败时的回调函数
                    console.error('Error:', error);
                }
            });
        // }
    },
    newsHomePage() {
        jQuery.ajax({
            url: ajaxUrls + '/appBiz/news/page', // 替换为你的API端点
            type: 'get', // 请求类型，可以是GET、POST等
            dataType: 'json', // 期望从服务器返回的数据类型
            data: { current: 1, size: 3 }, // 将对象转换为JSON字符串
            success: function (response) {
                // 请求成功时的回调函数
                var htmlStr = ''
                response.data.records.map(item => {
                    htmlStr = htmlStr + `<li data-aos="fade-up">
                                                        <figure class="post-thumbnail">
                                                            <a href="${urls}/news/${item.newsUrl}.html">
                                                                <div class="item-cover">
                                                                    <div class="attachment">
                                                                        <div class="thumbnail">
                                                                            <div class="centered">
                                                                                <img style="height:300px;" src="${item.imageUrls}"
                                                                                    alt="${item.newsTitle}"
                                                                                    class="attachment-medium size-medium wp-post-image"
                                                                                    loading="lazy">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <i class="mask"></i>
                                                                </div>
                                                            </a>
                                                        </figure>
                                                        <div class="post-excerpt">
                                                            <h3>
                                                            <a href="${urls}/news/${item.newsUrl}.html" title="${item.newsTitle}">${item.newsTitle}</a>
                                                            </h3>
                                                            <div class="post-meta">
                                                                <span class="date"><i class="fa fa-clock-o"></i>${item.createTime}</span>
                                                            </div>
                                                            <div class="opacity excerpt-content">${item.newsContent}</div>
                                                            <div class="link-read-more">
                                                                <a href="${urls}/news/${item.newsUrl}.html"><span>More</span> <i
                                                                        class="fa fa-angle-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>`
                })

                jQuery('#news-index-page').html(htmlStr)
            },
            error: function (xhr, status, error) {
                // 请求失败时的回调函数
                console.error('Error:', error);
            }
        });
    },
    pagesInit: function (total, current) {
        new Pagination({
            element: '#pages', // 渲染的容器  [必填]
            type: 1, // 样式类型，默认1 ，目前可选 [1,2] 可自行增加样式   [非必填]
            layout: 'prev, pager, next', // sizes,[必填]
            pageIndex: current, // 当前页码 [非必填]
            pageSize: 10, // 每页显示条数   TODO: 默认选中sizes [非必填]
            pageCount: 9, // 页码显示数量，页码必须大于等于5的奇数，默认页码9  TODO:为了样式美观，参数只能为奇数， 否则会报错 [非必填]
            total: total, // 数据总条数 [必填]
            singlePageHide: false, // 单页隐藏， 默认true  如果为true页码少于一页并且layout没有sizes则不会渲染 [非必填]
            pageSizes: [5, 20, 30, 40, 50], // 选择每页条数  TODO: layout的sizes属性存在才生效
            prevText: 'Prev', // 上一页文字，不传默认为箭头图标  [非必填]
            nextText: 'Next', // 下一页文字，不传默认为箭头图标 [非必填]
            ellipsis: true, // 页码显示省略符 默认false  [非必填]
            disabled: true, // 显示禁用手势 默认false  [非必填]
            currentChange: function (index, pageSize) { // 页码改变时回调  TODO:第一个参数是当前页码，第二个参数是每页显示条数数量，需使用sizes第二参数才有值。
                console.log(index, pageSize);
                window.location.href=urls + '/newsList/p'+index+'.html';
            }
        });
    },
    getUrlParams: function () {
        var queryString = window.location.search;
        var regex = /[?&]([^=#]+)=([^&#]*)/g;
        var params = {};
        var match;
        while (match = regex.exec(queryString)) {
            params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
        }
        return params;
    },
    contactInit: function () {
        jQuery('#messageBox').html(`<div class="message-header radius-top">
                    <span class="label">
                        <i class="fa fa-commenting-o"></i>
                    </span>
                    <b>Leave a message</b>
                    <span class="arrow-toggle">
                        <i class="fa fa-angle-up"></i>
                    </span>
                </div>
                <div class="message-form">
                    <p>
    
                    <div class="wpcf7">
                       
                            <p>
                                <span class="wpcf7-form-control-wrap your-name">
                                    <input type="text" value="" size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" type="text" name="name" id="name"
                                        placeholder="Your Name (required)" />
                                </span>
                            </p>
                            <p>
                                <span class="wpcf7-form-control-wrap your-email">
                                    <input type="email" name="email" id="email" value="" size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                        id="your-email" placeholder="Your Email (required)" />
                                </span>
                            </p>
    
                            <p>
                                <span class="wpcf7-form-control-wrap your-phone">
                                    <input type="tel" name="tel" id="tel" value="" size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                        id="your-phone" placeholder="Your Phone" />
                                </span>
                            </p>
    
                            <p>
                                <span class="wpcf7-form-control-wrap your-message">
                                    <textarea id="content" name="content" cols="40" rows="10"
                                        class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                        id="your-message" placeholder="Please fill in the details"></textarea>
                                </span>
                            </p>
                            <p class="btn-submit">
                                <!-- <input type="submit" value="提交" class="wpcf7-form-control wpcf7-submit" name="button" /> -->
                                <button type="submit" class="wpcf7-form-control wpcf7-submit" id="tj" key="SUBMIT">Submit</button>
                            </p>
    
                        
                    </div>
                    </p>
                </div>`)
        jQuery('#tj').click(function () {
            //alert(1)
            if (jQuery('#name').val() == '') { alert('请输入姓名！'); jQuery("#name").focus(); return false; }
            if (jQuery("#tel").val() == "") { alert("请输入手机！"); jQuery("#tel").focus(); return false; }
            if (!jQuery("#tel").val().match(/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/)) { alert("请输入正确的手机号码！"); jQuery("#tel").focus(); return false; }
            // if (jQuery("#email").val() == "") { alert("请输入电子邮箱!"); return false; } 
            if (jQuery("#email").val() != "" && !jQuery("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) { alert("请输入正确的邮箱"); jQuery("#email").focus(); return false; }
            if (jQuery('#content').val() == '') { alert('请输入需求'); return false; }
            jQuery.ajax({
                url: ajaxUrls + '/appBiz/queryrecord/add', // 替换为你的API端点
                type: 'post', // 请求类型，可以是GET、POST等
                dataType: 'json', // 期望从服务器返回的数据类型
                headers: {
                    'Content-Type': 'application/json'  //multipart/form-data;boundary=--xxxxxxx   application/json
                },
                data: JSON.stringify({ userName: jQuery('#name').val(), userMobile: jQuery("#tel").val(), userEmail: jQuery("#email").val(), queryContent: jQuery('#content').val() }), // 将对象转换为JSON字符串
                success: function (response) {
                    // 请求成功时的回调函数
                    console.log('Response:', response);
                    alert('提交成功')
                },
                error: function (xhr, status, error) {
                    // 请求失败时的回调函数
                    console.error('Error:', error);
                }
            });
        })
    },
    keyWordDescInit(keyword, title, desc) {
        document.title = title;
        jQuery('meta[name="keywords"]').attr('content', keyword);
        jQuery('meta[name="description"]').attr('content', desc);
    },
    lanInit() {

        translate.language.setLocal(localStorage.getItem("lang") || 'english');

        translate.selectLanguageTag.show = false;
        translate.service.use('client.edge');
        translate.execute();

        jQuery('#translate a').on("click", function (e) {
            localStorage.setItem("lang", jQuery(this).attr('lang'));
        })
    }
}
news.init();
news.contactInit();
news.lanInit();
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})



