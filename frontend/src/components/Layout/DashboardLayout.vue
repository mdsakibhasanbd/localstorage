<template>
    <div class="flex h-screen overflow-y-hidden">
        <aside :class="['flex-shrink-0 transition-all duration-300', { '-ml-64': sidebarHidden }]"
            class="w-64 flex flex-col">
            <div class="">
                <h1
                    class="p-[18px] text-xl  font-bold text-[#DC1918] capitalize text-center">
                    Localstorage</h1>
            </div>
            <div class="overflow-y-auto">
                <!-- Permissions-based Menu Items with Dropdowns -->
                <div>
                    <ul class="mt-6 leading-10">
                        <li v-for="(menu, index) in permissions" :key="index" class="relative px-2 py-1">
                            <!-- Main menu item -->
                            <div class="dropdown-toggle inline-flex items-center justify-between w-full text-sm font-semibold text-teal-800 cursor-pointer hover:text-green-400"
                                @click="toggleDropdown(index)">
                                <span class="inline-flex items-center">
                                    <i class="bx-sm" :class="menu.icon"></i>

                                    <!-- If no submenu, show the router-link -->
                                    <span v-if="!menu.subMenu || !menu.subMenu.length" class="ml-4">
                                        <router-link :to="'/' + menu.name" active-class="font-bold text-primary"
                                            exact-active-class="font-bold text-primary">
                                            {{ menu.resourceName }}
                                        </router-link>
                                    </span>
                                    <!-- Otherwise, just show the resource name -->
                                    <span v-else class="ml-4">
                                        {{ menu.resourceName }}
                                    </span>
                                </span>

                                <!-- Conditionally render chevron if submenu exists -->
                                <i v-if="menu.subMenu && menu.subMenu.length"
                                    class="bx bx-chevron-right bx-sm transition-transform duration-300"
                                    :class="{ 'rotate-90': openDropdown === index }"></i>
                            </div>

                            <!-- Submenu (if it exists) -->
                            <div v-if="menu.subMenu && menu.subMenu.length"
                                :class="{ hidden: openDropdown !== index, 'scale-y-100': openDropdown === index }"
                                class="dropdown-content mt-2 overflow-hidden text-sm font-medium bg-green-400 rounded-md shadow-inner transition-all duration-300 transform origin-top">
                                <ul class="p-2 space-y-2">
                                    <li v-for="subMenu in menu.subMenu" :key="subMenu.name"
                                        class="text-white hover:text-gray-800 hover:bg-gray-100 rounded-md">
                                        <div v-if="subMenu.read && !subMenu.params" class="flex items-center py-2">
                                            <i class="bx bx-current-location px-2"></i>
                                            <router-link :to="`/${menu.name}/${subMenu.name}`"
                                                active-class="font-bold text-primary"
                                                exact-active-class="font-bold text-primary">
                                                {{ subMenu.resourceName }}
                                            </router-link>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <div class="flex-1">
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div @click="toggleSidebar" tabindex="0" role="button" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="navbar-center"></div>
                <div class="navbar-end">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn   bg-[#DC1918] btn-circle xs:my-1 lg:my-0  ">
                            <div class="  h-8 w-8 flex items-center rounded-full">
                                <!-- <img  alt="Profile"
                                    src="/Img/Watchflext-New-logo-White 1.png" /> -->
                                    <p>logo</p>
                            </div>
                        </div>
                        <ul tabindex="0"
                            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">Profile <span class="badge">New</span></a>
                            </li>
                            <li><a>Settings</a></li>
                            <li>
                                <router-link @click.native="logout" to="/login">Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <main class="flex flex-col h-[95.5%] w-full">
                <div class="max-w-full px-4 py-4 sm:px-2 lg:px-2 lg:py-6 mx-1">
                    <div class="-mt-6 overflow-x-auto h-screen border-2 border-slate-300 rounded-xl">
                        <slot></slot>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
// import { useAuthStore } from '@/stores/auth'
// import { useCurdStore } from '@/stores/curd'
// import { mapState } from 'pinia'


export default {
    data() {
        return {
            openDropdown: null,
            sidebarHidden: false,

            "permissions": [
                {
                    "resourceName": "Dashboard",
                    "subMenu": [],
                    "read": true,
                    "create": true,
                    "update": true,
                    "delete": true,
                    "params": false,
                    "name": "Dashboard",
                    "icon": "bx bxs-dashboard"
                },  {
                    "resourceName": "UploadImage",
                    "subMenu": [],
                    "read": true,
                    "create": true,
                    "update": true,
                    "delete": true,
                    "params": false,
                    "name": "UploadImage",
                    "icon": "bx bxs-dashboard"
                },{
                    "resourceName": "Category",
                    "subMenu": [],
                    "read": true,
                    "create": true,
                    "update": true,
                    "delete": true,
                    "params": false,
                    "name": "Category",
                    "icon": "bx bxs-dashboard"
                },{
                    "resourceName": "Size",
                    "subMenu": [],
                    "read": true,
                    "create": true,
                    "update": true,
                    "delete": true,
                    "params": false,
                    "name": "Size",
                    "icon": "bx bxs-dashboard"
                },
              
            ]


        }
    },
    computed: {
        // ...mapState(useCurdStore, ['permissions'])
    },
    methods: {
        toggleDropdown(DropdownId) {
            this.openDropdown = this.openDropdown === DropdownId ? null : DropdownId;
        },
        logout() {
            const authStore = useAuthStore()
            authStore.logout()
        },
        toggleSidebar() {
            this.sidebarHidden = !this.sidebarHidden
        },
    }
}
</script>