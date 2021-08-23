<template>
  <div>
    <header>
      <div class="top-line">
        <div class="top top-left-element">
          <button class="top-button-left">
            <img src="@/assets/Header/Icon button/Small/Chevron/Vector 18 (Stroke).png" alt="Vector">
          </button>
          <span class="top-text-left">User Pages</span>
        </div>
        <div class="top top-right-element">
          <button class="top-button-right">
            <img src="" alt="">
          </button>
          <button class="top-button-right">
            <img src="@/assets/Header/Icon button/Small/Chevron/People.png" alt="People">
          </button>
        </div>
      </div>
      <div class="bottom-line">
        <div id="headernav" class="bottom bottom-left-element">
          <div class="bottom-left-element animationdiv" :class="{isActive: index_selected}">
            <NuxtLink id="href" class="index_href"  exact-active-class="active" to="/" :class="{isActiveText: index_href_selected}">
              <div>
                <img src="@/assets/Header/Tabs/Small/Subtract.png" alt="" class="bot-lft-el">
                <span class="bot-lft-el">Activity</span>
              </div>
            </NuxtLink>
          </div>
          <div class="bottom-left-element animationdiv" :class="{isActive: map_selected}">
            <NuxtLink id="href" to="Map" class="Map_href" :class="{isActiveText: map_href_selected}">
              <img src="@/assets/Header/Tabs/Small/Vector.png" alt="" class="bot-lft-el">
              <span class="bot-lft-el">Map</span>
            </NuxtLink>
          </div>
          <div class="bottom-left-element animationdiv" :class="{isActive: timer_selected}">
            <NuxtLink id="href" to="Timer" class="Timer_href" :class="{isActiveText: timer_href_selected}">
              <img src="@/assets/Header/Tabs/Small/Union.png" alt="" class="bot-lft-el">
              <span class="bot-lft-el">Time</span>
            </NuxtLink>
          </div>
          <div class="bottom-left-element animationdiv" :class="{isActive: todo_selected}">
            <NuxtLink id="href" class="index_href" to="Todo" :class="{isActiveText: todo_href_selected}">
              <img src="@/assets/Header/Tabs/Small/Subtract.png" alt="" class="bot-lft-el">
              <span class="bot-lft-el">Quests</span>
            </NuxtLink>
          </div>
        </div>
        <div class="bottom bottom-right-element">
          <div class="bottom-right-element">
            <img src="@/assets/Header/Tabs/Small/Rectangle 34.png" alt="" class="bottom-right-element">
            <span class="bottom-right-element">Notes</span>
          </div>
          <div class="bottom-right-element">
            <img src="@/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="bottom-right-element">
            <span class="bottom-right-element">Friends</span>
          </div>
          <div class="bottom-right-element">
            <img src="@/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="bottom-right-element">
            <span class="bottom-right-element">Photos</span>
          </div>
          <div class="bottom-right-element">
            <button class="bottom-button-right">
              <img src="@/assets/Header/Tabs/Small/Union.png" alt="" class="bottom-right-element">
            </button>
            <img src="@/assets/Header/Tabs/Small/Vectordown.png" alt="">
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'SPAHead',
  data () {
    return {
      index_selected: false,
      map_selected: false,
      timer_selected: false,
      todo_selected: false,
      index_href_selected: false,
      map_href_selected: false,
      timer_href_selected: false,
      todo_href_selected: false
    }
  },
  mounted () {
    this.$store.dispatch('startTicks')
  }
}
</script>

<style>

header {
  width: 100%;
  height: 112px;
  box-shadow: 0 6px 10px -8px rgba(0, 0, 0, 0.2);
  background-color: white;
}

.top-line {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dde0e6;
}

.top {
  display: inline-block;
}

.top-left-element {
  margin-left: 22px;
  padding-right: 20px;
}

.top-button-left {
  padding-right: 15px;
  outline: none;
  border: 0;
  background: transparent;
  vertical-align: middle;
}

.top-text-left {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.top-right-element {
  margin-right: 15px;
}

.top-button-right {
  margin-left: 15px;
  outline: none;
  border: 0;
  background: transparent;
}

/* Конец header-top части */

/* Начало header-bottom части */

.bottom-line {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom {
  display: inline-block;
}

.bottom-left-element {
  display: flex;
  margin-left: 10px;
  height: 100%;
  align-items: center;
}

.bot-lft-el {
  vertical-align: middle;
}

.bottom-right-element {
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}

.bottom-button-right {
  width: 30px;
  height: 30px;
  outline: none;
  border: 0;
  background: transparent;
  padding-left: 8px;
}

a {
  text-decoration: none;
  color: black;
}

.animationdiv:hover #href {
  padding-top: 3px;
  color: #2375e1;
}

.animationdiv:hover {
  border-bottom: 3px solid #2375e1;
}

a.nuxt-link-exact-active {
  color: #2375e1;
}

.active div span {
  color: #2375e1;
}

</style>
