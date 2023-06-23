import Layout from "../components/layout/layout.tsx";
import Header from "../components/layout/header.tsx";
import Content from "../components/layout/content.tsx";
import Footer from "../components/layout/footer.tsx";
import {Outlet} from "react-router";
import INavbar from "./i-navbar.tsx";
import IFooter from "@/layout/i-footer.tsx";

const DefaultLayout = () => {

    return (
        <>
            <Layout className={`overflow-auto scroll-smooth`}>
                <Header>
                    <INavbar></INavbar>
                </Header>
                <Content className={`bg-gray-50`}>
                    <Outlet></Outlet>
                </Content>
                <Footer>
                    <IFooter></IFooter>
                </Footer>
            </Layout>
        </>
    )
}
export default DefaultLayout