import "./WidgetLarge.css";

function WidgetLarge() {

    const Button = ({type}) =>{
        return <button className={ `widget__large__button ${type}`}>{type}</button>
    }
    return (
        <div className="widget__large">
            <h3 className="widget__large__header">
                Latest transactions
            </h3>
            <table className="widget__large__table">
                <thead className="widget__large__thead">
                    <tr className="widget__large__head">
                        <th className="widget__large__th">Customer</th>
                        <th className="widget__large__th">Date</th>
                        <th className="widget__large__th">Amount</th>
                        <th className="widget__large__th">Status</th>
                    </tr>
                </thead>
                <tbody className="widget__large__tbody">
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img3.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img2.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                    <Button type="Declined" />

                    </td>
                </tr>
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img1.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                    <Button type="Pending" />

                    </td>
                </tr>
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img3.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                    <Button type="Approved" />

                    </td>
                </tr>
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img3.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                    <Button type="Approved" />

                    </td>
                </tr>
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img3.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                    <Button type="Approved" />

                    </td>
                </tr>
                <tr className="widget__large__user">
                    <td className="widget__large__image__container">
                        <img src="/images/img3.jpg" alt="" className="widget__large__image" />
                        <span className="widget__large__name">Terry Lin</span>
                    </td>
                    <td className="widget__large__date">October 4th, 2020</td>
                    <td className="widget__large__amount">$210</td>
                    <td className="widget__large__status">
                    <Button type="Approved" />

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLarge
