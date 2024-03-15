<template>
  <div style="margin-top: 14px; border-radius: 12px;" class="container" dir="rtl">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">آلبر کامو</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/bars-duotone.svg"/>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><router-link to="/">خانه</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">این پروژه متن باز است</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input style="margin-left: 6px;" class="form-control me-2" type="search" placeholder="یافتن اثر"
              aria-label="Search">
            <button class="btn btn-outline-success" type="submit">جستجو</button>
          </form>
        </div>
      </div>
    </nav>

    <div style="margin-top: 60px;" id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://th.bing.com/th/id/OIP.FpIDeSygdyg2C1cd92Mp1AAAAA?rs=1&pid=ImgDetMain" class="d-block w-100"
            alt="...">
          <div style="background-color: gray; border-radius: 23px;" class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://www.thefamouspeople.com/profiles/images/albert-camus-13.jpg" class="d-block w-100"
            alt="...">
          <div style="background-color: gray; border-radius: 23px;" class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://th.bing.com/th/id/R.5f1bbe0da60cbec4fc4fa1b5e259ffd5?rik=yTJ3NMOFwlOm9Q&riu=http%3a%2f%2fmedias.unifrance.org%2fmedias%2f186%2f246%2f63162%2fformat_page%2fmedia.jpg&ehk=gGvGZGXu6owRKk7rT48APpBileBrenr7hk6Vx41w1zw%3d&risl=&pid=ImgRaw&r=0"
            class="d-block w-100" alt="...">
          <div style="background-color: gray; border-radius: 23px;" class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <hr>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: 'IRANYekan', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@import '~bootstrap/dist/css/bootstrap.css'
</style>
