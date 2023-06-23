import './App.css'
import {useRouter} from "./router";

function App() {
    const {routes} = useRouter();
    return (
        <>
            {routes}
        </>
    )
}

export default App
