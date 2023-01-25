import A from "./component3/A"
import B from "./component3/B";
import { UserProvider } from "./contexts/ContextAPI2";

const App = () => {
    

    /*
    전역 데이터 관리 ContextAPI

    1.외부 ContextAPI2의 컨슈며, 프로바이더 export
    2.root에서는 export된 프로바이터로 감싸줍니다.
    3. 자식 컴포넌트에서는 userContext(컨텍스트명)를 이용해서 데이터를 핸들링
    */

    return (
        <UserProvider>
            <A/>
            <B/>
        </UserProvider>
    )
}

export default App;