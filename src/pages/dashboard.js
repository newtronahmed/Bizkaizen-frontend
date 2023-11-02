// import AppLayout from '@/components/Layouts/AppLayout'
// import Head from 'next/head'

// const Dashboard = () => {
//     return (
//         <AppLayout
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Dashboard
//                 </h2>
//             }>
//             <Head>
//                 <title>My Manager</title>
//             </Head>

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 bg-white border-b border-gray-200">
//                             You're logged in!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AppLayout>
//     )
// }

// export default Dashboard
import React from 'react';
import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu, theme, Button, List, Avatar } from 'antd';
import { MdAnalytics, MdInventory, MdReceiptLong, MdDashboard, MdOutlineMenuOpen, MdOutlineNotifications, MdAdd } from 'react-icons/md'
import { RiMenuFoldFill, RiMenuUnfoldLine } from 'react-icons/ri'
// import Dashboard from '@/pages/dashboard';
import { CiSearch } from 'react-icons/ci'
// import Profile from '../Navbar/profile';
import IndexPage from '@/components/Screens/IndexPage';
import Transactions from '@/components/Screens/Transactions';
import Profile from '@/components/Navbar/profile';

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    const { query } = router
    const route = query.page || 'dashboard'
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState("")
    const sidebarLinks = [
        { icon: MdDashboard, label: 'Dashboard', route:'',},
        { icon: MdAnalytics, label: 'Analytics', route:'analytics',  },
        { icon: MdReceiptLong, label: 'Receipts', route:'receipts', },
        { icon: MdInventory, label: 'Inventory', route:'inventory', },
        { icon: MdReceiptLong, label: 'Credit Management', route: 'credit-management' },
        { icon: MdReceiptLong, label: 'Sales', route:'sales' },
        { icon: MdAnalytics, label: 'Transactions', route:'transactions' },
        { icon: MdInventory, label: 'Customers', route:'customers' },
        { icon: MdAnalytics, label: 'Vendors', route:'vendors' },
    ]
    const onSidebarLinkClick = (e) => {
        router.push("/dashboard/?page="+ e.key, undefined, {shallow: true})
    }
    return (
        <Layout style={{ padding: "1rem" }}>
            <Sider
                style={{ background: '#fff' }}
                breakpoint="lg"
                collapsedWidth="60"
                trigger={null}
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                collapsible
                collapsed={collapsed}
            >
                {/* <div className="demo-logo-vertical" /> */}
                {!collapsed && <Profile />}
                <Menu
                    // theme="dark"
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    defaultSelectedKeys={[current]}
                    className='text-primary_gray'
                    onClick={onSidebarLinkClick}
                    items={sidebarLinks.map(
                        ({ icon, label , route}, index) => ({
                            key: route,
                            icon: React.createElement(icon, { size: 28 }),
                            label
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <Header className='flex items-center' style={{ padding: 0, background: '#fff' }} >
                    <Button
                        type="text"
                        icon={collapsed ? <RiMenuUnfoldLine /> : <RiMenuFoldFill />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='flex w-full justify-between'>
                        <div className='text-2xl font-bold capitalize'>{route || 'Dashboard'}</div>
                        <div className='flex gap-6 items-center'>
                            <div><CiSearch size={24} /></div>
                            <div><MdOutlineNotifications size={24} /></div>
                            <div className='text-white bg-primary_blue p-2 rounded-full'><MdAdd size={24} /></div>
                        </div>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    { route === "transactions" && <Transactions />}
                    { route === "dashboard" && <IndexPage />}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default AppLayout

