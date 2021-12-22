import Chart from "../components/charts/Chart"
import FeaturedInfo from "../components/FeaturedInfo"
import WidgetLarge from "../components/widgets/WidgetLarge"
import WidgetSmall from "../components/widgets/WidgetSmall"
import { userData } from "../data/userData"

import "./Home.css"

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Users Analytics" grid dataKey="Active Users" />
            <div className="home__widgets">
                <WidgetSmall className="small__widget" />
                <WidgetLarge className="large__widget" />
            </div>
        </div>
    )
}

export default Home
