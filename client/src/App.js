import React, {Suspense,useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import SliderBanner from "./components/Main/Slider/Slider";
import HomePageLoading from "./components/HomePageLoading/HomePageLoading";

const App = () => {

    const [isDataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDataLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {/*{*/}
            {/*    // isDataLoading*/}
                {/*//     ? <HomePageLoading/>*/}
                     <div className="App">
                        <Header/>
                        <SliderBanner/>
                    </div>
            {/*// }*/}
        </>

    );
};

export default App;

