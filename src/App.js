import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (

    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
       <AppHome />
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Layout>
  );
}

export default App;
