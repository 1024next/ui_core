<template>
  <aside>
    <ul>
      <li v-for="item in routes"
          :key="item.path">
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRouter } from '#app';
const { on, emit } = useGlobalEventBus();
const router = useRouter();
const routes = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/create",
    name: "create"
  },
  {
    path: "/nav3",
    name: "nav3"
  },
  {
    path: "/nav4",
    name: "nav4"
  },
  {
    path: "/nav5",
    name: "nav5"
  },
]

const needLoginPage = ['create']
// const gotoPage = (route) => {
//   const token = useUserState().token
//   console.log(token);
//   if (needLoginPage.includes(route.name) && !token) {
//     emit('show-login-modal')
//     router.back()
//     return
//   } else {
//     router.push(route.path)
//   }
// }


</script>

<style lang="scss" scoped>
aside {
  width: var(--sideBar-width);
  border-right: 1px solid #ccc;

  ul {
    height: calc(100vh - var(--header-height));
    margin: 0 2px;
    overflow: auto;
    padding: 5px 20px;
    list-style: none;
    position: sticky;
    top: var(--header-height);
    li {
      margin: 10px;
    }
    a {
      list-style: none;
      color: var(--text-color);
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: inline-block;
      padding: 10px;
      border-radius: 8px;
    }
    .router-link-active {
      color: red;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  // ul::-webkit-scrollbar {
  //     width: 10px;
  //  }

  // ul::-webkit-scrollbar-thumb {
  //   background: #ccc;
  // }
}
</style>