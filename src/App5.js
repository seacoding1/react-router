import { Fragment, useState } from "react";
import ColorComponent from "./component3/ColorComponent";
import ColorContext  from "./contexts/ContextAPI";

const App = () => {


    const [color,setColor] = useState('white');

    const colorfunc = (e) => {
        setColor(e.target.value);
    }

    return (

        /*
        p.495
        1. ContextAPI 외부에 선언 createContext() 훅 사용
        2. 자식 컴포넌트 consumer로 데이터를 받기
        3. 부모 컴포넌트 provider로 데이터를 전달(변경)
        */

        //select태그를 만들어서 usestate를 활용해서 color값을 변경

        <ColorContext.Provider value={{color:color}}>
            {/* Provider는 사용할 root컴포넌트에 선언합니다. */}
            <ColorComponent />
            <select onChange={colorfunc}>
                <option value="white">white</option>
                <option value="lightpink">lightpink</option>
                <option value="lavender">lavender</option>
            </select>
        </ColorContext.Provider>

    )
}

export default App;