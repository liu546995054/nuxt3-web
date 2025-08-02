<template>

  <section id="cat-thumb-title-posts-1" class="section-item cat-thumb-title-posts">
    <div class="inner">
      <div class="section-container grid-col-3" data-radio="0.75">
        <h2 class="heading-title"><b>
          <NuxtLinkLocale to="/contact">
            <a href="javascript:void(0)"><span class="menu-title">{{ $t('footer.news') }}</span></a>
<!--            <span>{{ $t('menu.contact') }}</span>-->
          </NuxtLinkLocale>

        </b>
        </h2>

        <div class="section-content">
          <ul class="thumb-title-list" id="news-index-page">

            <li data-aos="fade-up" v-for="(item, index) in newsItems" :key="index">
<!--              <NuxtLinkLocale :to="item.link">-->

                <figure class="post-thumbnail">
                    <div class="item-cover">
                      <div class="attachment">
                        <div class="thumbnail">
                          <div class="centered">
                            <img width="300" height="248" :src="item.image"
                                 alt="On the role of metal chip press in the recycling of metal chips"
                                 class="attachment-medium size-medium wp-post-image"
                                 loading="lazy">
                          </div>
                        </div>
                      </div>
                      <i class="mask"></i>
                    </div>
                </figure>
                <div class="post-excerpt">
                  <h3>{{item.title}}</h3>
                  <div class="post-meta">
                    <span class="date"><i class="fa fa-clock-o"></i>{{item.date}}</span>
                    <span class="cat"><i class="fa fa-folder-open-o"></i>
<!--                      <a href="#News.html" rel="category tag">News</a>-->
                    </span>
                  </div>
                  <div class="opacity excerpt-content">{{item.excerpt}}
                  </div>
                  <div class="link-read-more">
<!--                    <a href="/new01.html"><span>Read more</span> <i-->
<!--                        class="fa fa-angle-right"></i></a>-->
                  </div>
                </div>
<!--              </NuxtLinkLocale>-->

            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>



</template>

<script setup>
const newsItems = [
  {
    title: 'On the role of metal chip press in the recycling of metal chips',
    date: 'Feb 11, 2024',
    category: 'News',
    excerpt: 'The chip pressing machine is a chip processing equipment that many metal product factories will configure…',
    image: '/images/news/n1.png',
    link: '/news/new01'
  },
  {
    title: 'Common fault analysis and solutions of shear',
    date: 'Feb 12, 2024',
    category: 'News',
    excerpt: 'In daily life, no matter how good the equipment is, if there is no good sense of repair and maintenance…',
    image: '/images/news/n2.png',
    link: '/news/new02'
  },
  {
    title: 'What is scrap metal packer',
    date: 'Feb 13, 2024',
    category: 'News',
    excerpt: 'It is mainly used in recycling processing industry and metal smelting industry,…',
    image: '/images/news/n3.png',
    link: '/news/new03'
  }
]
</script>

<!--<style scoped>-->
<!--.news {-->
<!--  padding: 80px 0;-->
<!--  background-color: #fff;-->
<!--}-->

<!--.news-grid {-->
<!--  display: grid;-->
<!--  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));-->
<!--  gap: 30px;-->
<!--}-->

<!--.news-card {-->
<!--  background: #fff;-->
<!--  border-radius: 8px;-->
<!--  overflow: hidden;-->
<!--  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);-->
<!--  transition: all 0.3s ease;-->
<!--}-->

<!--.news-card:hover {-->
<!--  transform: translateY(-5px);-->
<!--  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);-->
<!--}-->

<!--.news-image {-->
<!--  height: 200px;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.news-image img {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover;-->
<!--  transition: transform 0.5s ease;-->
<!--}-->

<!--.news-card:hover .news-image img {-->
<!--  transform: scale(1.05);-->
<!--}-->

<!--.news-content {-->
<!--  padding: 25px;-->
<!--}-->

<!--.news-content h3 {-->
<!--  font-size: 1.3rem;-->
<!--  color: #0d3b66;-->
<!--  margin-bottom: 15px;-->
<!--}-->

<!--.news-meta {-->
<!--  display: flex;-->
<!--  margin-bottom: 15px;-->
<!--  font-size: 0.9rem;-->
<!--  color: #666;-->
<!--}-->

<!--.news-meta span {-->
<!--  margin-right: 20px;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.news-meta i {-->
<!--  margin-right: 5px;-->
<!--}-->

<!--.excerpt {-->
<!--  color: #666;-->
<!--  line-height: 1.6;-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.read-more {-->
<!--  display: inline-flex;-->
<!--  align-items: center;-->
<!--  color: #f95738;-->
<!--  font-weight: 600;-->
<!--  transition: all 0.3s;-->
<!--}-->

<!--.read-more i {-->
<!--  margin-left: 5px;-->
<!--  transition: transform 0.3s;-->
<!--}-->

<!--.news-card:hover .read-more {-->
<!--  color: #e04a2d;-->
<!--}-->

<!--.news-card:hover .read-more i {-->
<!--  transform: translateX(5px);-->
<!--}-->
<!--</style>-->
