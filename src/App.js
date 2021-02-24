import React from "react";

const App = () => {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo">
                <a href="index.html" className="mb-0">
                  Oneder
                </a>
              </h1>
            </div>

            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="#contact-section" className="nav-link">
                      تماس با ما
                    </a>
                  </li>
                  <li>
                    <a href="#faq-section" className="nav-link">
                      سوالات
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials-section" className="nav-link">
                      نظرات
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="nav-link">
                      خدمات
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio-section" className="nav-link">
                      نمونه کار
                    </a>
                  </li>
                  <li>
                    <a href="#team-section" className="nav-link">
                      تیم
                    </a>
                  </li>
                  <li>
                    <a href="#about-section" className="nav-link">
                      درباره ما
                    </a>
                  </li>
                  <li>
                    <a href="#home-section" className="nav-link">
                      خانه
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a
                href="/#"
                className="site-menu-toggle js-menu-toggle float-right"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url(images/hero_1.jpg)" }}
        data-aos="fade"
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 mt-lg-5 text-center">
              <h1 className="text-uppercase mb-5" data-aos="fade-up">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </h1>

              <div data-aos="fade-up" data-aos-delay="100">
                <a
                  href="#contact-section"
                  className="btn smoothscroll btn-primary mr-2 mb-2"
                >
                  تماس با ما
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="#about-section" className="mouse smoothscroll">
          <span className="mouse-icon">
            <span className="mouse-wheel"></span>
          </span>
        </a>
      </div>

      <div className="site-section cta-big-image" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title mb-3">درباره ما</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
              <figure className="circle-bg">
                <img src="images/hero_1.jpg" alt="" className="img-fluid" />
              </figure>
            </div>
            <div
              className="col-lg-5 ml-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4">
                <h3 className="h3 mb-4 text-black text-right">
                  لورم ایپسوم متن نامفهوم طراحان
                </h3>
                <p className="text-right">
                  لورم ایپسوم متن نامفهوم طراحانلورم ایپسوم متن نامفهوم
                  طراحانلورم ایپسوم متن نامفهوم طراحانلورم ایپسوم متن نامفهوم
                  طراحانلورم ایپسوم متن نامفهوم طراحانلورم ایپسوم متن نامفهوم
                  طراحانلورم ایپسوم متن نامفهوم طراحانلورم ایپسوم متن نامفهوم
                  طراحانلورم ایپسوم متن نامفهوم طراحان
                </p>
              </div>

              <div className="mb-4">
                <ul className="list-unstyled ul-check success" id="list">
                  <li>لورم ایپسوم متن نامفهوم طراحان</li>
                  <li>لورم ایپسوم متن نامفهوم طراحانلولورم ایپسوم</li>
                  <li>لورم ایپسوم متن نامفهوم طراحان</li>
                  <li>لورم ایپسوم متن نامفهوم طراحان</li>
                </ul>
              </div>

              <p className="text-right">
                <a
                  href="#contact-section"
                  className="smoothscroll btn btn-primary"
                >
                  تماس با ما
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section border-bottom" id="team-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-8 text-center">
              <h2
                className="section-title mb-3"
                data-aos="fade-up"
                data-aos-delay=""
              >
                تیم ما
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="100">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم
                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_5.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_6.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_7.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_8.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_1.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_2.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_3.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="team-member">
                <figure>
                  <ul className="social">
                    <li>
                      <a href="/#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                  <img src="images/person_4.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="p-3 text-right">
                  <h3>کارمند ایکس</h3>
                  <span className="position">مدیر</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="portfolio-section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title mb-3">نمونه کارها</h2>
            </div>
          </div>

          <div className="row justify-content-center mb-5" data-aos="fade-up">
            <div
              id="filters"
              className="filters text-center button-group col-md-7"
            >
              <button className="btn btn-primary" data-filter=".web">
                وب
              </button>
              <button className="btn btn-primary" data-filter=".design">
                طراحی
              </button>
              <button className="btn btn-primary" data-filter=".brand">
                برند
              </button>
              <button className="btn btn-primary active" data-filter="*">
                همه
              </button>
            </div>
          </div>

          <div id="posts" className="row no-gutter">
            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_1.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_1.jpg" alt="" />
              </a>
            </div>
            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_2.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_2.jpg" alt="" />
              </a>
            </div>

            <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_3.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_3.jpg" alt="" />
              </a>
            </div>

            <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_4.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_4.jpg" alt="" />
              </a>
            </div>

            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_5.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_5.jpg" alt="" />
              </a>
            </div>

            <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_6.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_6.jpg" alt="" />
              </a>
            </div>

            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_7.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_7.jpg" alt="" />
              </a>
            </div>

            <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_8.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_8.jpg" alt="" />
              </a>
            </div>

            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_9.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_9.jpg" alt="" />
              </a>
            </div>

            <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_10.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_10.jpg" alt="" />
              </a>
            </div>

            <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_11.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_11.jpg" alt="" />
              </a>
            </div>

            <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_12.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_12.jpg" alt="" />
              </a>
            </div>

            <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
              <a
                href="images/img_13.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/img_13.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="site-section border-bottom bg-light"
        id="services-section"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title mb-3">خدمات ما </h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div className="unit-4 text-right">
                <div className="unit-4-icon mr-4">
                  <span className="text-primary flaticon-startup"></span>
                </div>
                <div className="text-right">
                  <h3>لورم ایپسوم</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                  <p>
                    <a href="/#">ادامه مطلب </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4 mb-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="unit-4 text-right">
                <div className="unit-4-icon mr-4">
                  <span className="text-primary flaticon-startup"></span>
                </div>
                <div className="text-right">
                  <h3>لورم ایپسوم</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                  <p>
                    <a href="/#">ادامه مطلب </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4 mb-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="unit-4 text-right">
                <div className="unit-4-icon mr-4">
                  <span className="text-primary flaticon-startup"></span>
                </div>
                <div className="text-right">
                  <h3>لورم ایپسوم</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                  <p>
                    <a href="/#">ادامه مطلب </a>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-4 mb-lg-4"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div className="unit-4 text-right">
                <div className="unit-4-icon mr-4">
                  <span className="text-primary flaticon-idea"></span>
                </div>
                <div className="text-right">
                  <h3>لورم ایپسوم</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                  <p>
                    <a href="/#">ادامه مطلب </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4 mb-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="unit-4 text-right">
                <div className="unit-4-icon mr-4">
                  <span className="text-primary flaticon-smartphone"></span>
                </div>
                <div className="text-right">
                  <h3>لورم ایپسوم</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                  <p>
                    <a href="/#">ادامه مطلب </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-4 mb-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="unit-4 text-right">
                <div className="unit-4-icon mr-4">
                  <span className="text-primary flaticon-head"></span>
                </div>
                <div className="text-right">
                  <h3>لورم ایپسوم</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                  <p>
                    <a href="/#">ادامه مطلب </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="site-section testimonial-wrap"
        id="testimonials-section"
        data-aos="fade"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3">نظرات</h2>
            </div>
          </div>
        </div>
        <div className="slide-one-item home-slider owl-carousel">
          <div>
            <div className="testimonial">
              <blockquote className="mb-5">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان&ldquo; گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                  حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات&rdquo;
                </p>
              </blockquote>

              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div>
                  <img
                    src="images/person_3.jpg"
                    alt=""
                    className="w-50 img-fluid mb-3"
                  />
                </div>
                <p>نظر ایکس </p>
              </figure>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <blockquote className="mb-5">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان&ldquo; گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                  حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات&rdquo;
                </p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div>
                  <img
                    src="images/person_2.jpg"
                    alt=""
                    className="w-50 img-fluid mb-3"
                  />
                </div>
                <p>نظر ایکس </p>
              </figure>
            </div>
          </div>

          <div>
            <div className="testimonial">
              <blockquote className="mb-5">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان&ldquo; گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                  حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات&rdquo;
                </p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div>
                  <img
                    src="images/person_4.jpg"
                    alt=""
                    className="w-50 img-fluid mb-3"
                  />
                </div>
                <p>نظر ایکس </p>
              </figure>
            </div>
          </div>

          <div>
            <div className="testimonial">
              <blockquote className="mb-5">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان&ldquo; گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                  حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات&rdquo;
                </p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div>
                  <img
                    src="images/person_4.jpg"
                    alt=""
                    className="w-50 img-fluid mb-3"
                  />
                </div>
                <p>نظر ایکس </p>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-light" id="pricing-section">
        <div className="container">
          <div className="row site-section" id="faq-section">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title">بخش سوالات متداول</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>

              <div
                className="mb-5 text-right"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-black h5 mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان ؟
                </h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-lg-6 ml-auto mb-5 order-1 order-lg-2"
              // data-aos={["fade", "fade-up"]}
              data-aos="fade"
              //   data-aos="fade-up"
              data-aos-delay=""
            >
              <img
                src="images/hero_1.jpg"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade">
              <div className="row">
                <div
                  className="col-md-12 mb-md-5 mb-0 col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay=""
                >
                  <div className="unit-4 text-right">
                    <div className="unit-4-icon mr-4 mb-3">
                      <span className="text-primary flaticon-head"></span>
                    </div>
                    <div>
                      <h3>وب و برنامه نویسی موبایل</h3>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                      <p className="mb-0">
                        <a href="/#">ادامه مطلب</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12 mb-md-5 mb-0 col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="unit-4 text-right">
                    <div className="unit-4-icon mr-4 mb-3">
                      <span className="text-primary flaticon-smartphone"></span>
                    </div>
                    <div>
                      <h3>وب و برنامه نویسی موبایل</h3>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                      <p className="mb-0">
                        <a href="/#">ادامه مطلب</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="site-section bg-light"
        id="contact-section"
        data-aos="fade"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="section-title mb-3"> تماس با ما</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 text-center">
              <p className="mb-4">
                <span className="icon-room d-block h4 text-primary"></span>
                <span>ایران - تهران - خیابان فلان</span>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <p className="mb-4">
                <span className="icon-phone d-block h4 text-primary"></span>
                <a href="/#">+1 232 3235 324</a>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <p className="mb-0">
                <span className="icon-mail_outline d-block h4 text-primary"></span>
                <a href="/#">youremail@domain.com</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-5">
              <form action="#" className="p-5 bg-white" id="form">
                <h2 className="h4 text-black mb-5">فرم تماس با ما</h2>

                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      {" "}
                      نام
                    </label>
                    <input type="text" id="fname" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" htmlFor="lname">
                      نام خانوادگی{" "}
                    </label>
                    <input type="text" id="lname" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="email">
                      ایمیل
                    </label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="subject">
                      موضوع
                    </label>
                    <input
                      type="subject"
                      id="subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="message">
                      پیام
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="پیام خود را اینجا وارد کنید..."
                    ></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="ارسال پیام"
                      className="btn btn-primary btn-md text-white"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-5">
                  <h2 className="footer-heading mb-4"> درباره ما</h2>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                </div>
                <div className="col-md-3 ml-auto">
                  <h2 className="footer-heading mb-4">لینک ها مفید </h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#about-section" className="smoothscroll">
                        درباره ما
                      </a>
                    </li>
                    <li>
                      <a href="#services-section" className="smoothscroll">
                        خدمات
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials-section" className="smoothscroll">
                        نظرات
                      </a>
                    </li>
                    <li>
                      <a href="#contact-section" className="smoothscroll">
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">شبکه های اجتماعی</h2>
                  <a href="/#" className="pl-0 pr-3">
                    <span className="icon-facebook"></span>
                  </a>
                  <a href="/#" className="pl-3 pr-3">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="/#" className="pl-3 pr-3">
                    <span className="icon-instagram"></span>
                  </a>
                  <a href="/#" className="pl-3 pr-3">
                    <span className="icon-linkedin"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                  کپی رایت &copy;
                  <script>document.write(new Date().getFullYear());</script>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
