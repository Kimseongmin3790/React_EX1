import Header from './component/Header';
import Footer from './component/Footer';

function App() {
    return (<>
        <Header title="안녕하세요"></Header>

        <Footer content="푸터 입니다" fnAlert={()=>{
            alert("첫번째 푸터");
        }}></Footer>

        <Footer content="서브 푸터 입니다" fnAlert={()=>{
            alert("두번째 푸터");
        }}></Footer>
    </>)
}

export default App;