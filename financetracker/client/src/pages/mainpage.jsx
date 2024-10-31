import InsertData from "./insertdata"
import ShowData from "./showdata"
import './mainpage.styles.css'

const MainPage = () => {
    return(
        <div className="section">
            <div>
                <InsertData/>
            </div>
            <div>
                <ShowData/>
            </div>
        </div>
    )
}

export default MainPage 