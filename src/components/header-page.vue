<template>
  <div dir="rtl">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">آثار آلبر کامو - فرزند آفتاب</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="material-symbols-outlined">
            menu
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href=""><router-link to="/">خانه</router-link></a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/Mehranalam/Albert-Camus" class="nav-link">مخزن این پروژه</a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/Mehranalam/Albert-Camus" class="nav-link"><router-link to="/about">درباره نویسنده</router-link></a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input style="margin-left: 9px;" class="form-control me-2" type="search" placeholder="اثر خود را پیدا کنید"
              aria-label="Search">
            <button class="btn btn-outline-success" type="submit">جستجو</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header-page'

}
</script>

<style lang="scss" scoped>
.holder {
  direction: rtl;
  justify-content: space-between;
  padding: 25px;
  margin: 1%;
  border-radius: 20px;
}

.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.holder p {
  font-family: 'Vazirmatn';
}

.holder button {
  background-color: rgb(54, 54, 124);
  color: white;
  font-family: 'IRANYekan';
  width: 100px;
  border: 0px;
  border-radius: 4px;
  padding: 5px;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
}

.menu ul li {
  padding-left: 14px;
}
</style>