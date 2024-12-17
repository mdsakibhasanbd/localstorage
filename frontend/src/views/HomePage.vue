<template>
    <DashboardLayout>
        <HomeLayout>
            <TableLayout>
                <!-- <router-view></router-view> -->
            </TableLayout>  
        </HomeLayout>
    </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/Layout/DashboardLayout.vue';
import HomeLayout from '@/components/Layout/HomeLayout.vue';
import TableLayout from '@/components/Layout/TableLayout.vue';    
export default {
        components: {
            DashboardLayout,
            HomeLayout,
            TableLayout
        }
    }
</script>
