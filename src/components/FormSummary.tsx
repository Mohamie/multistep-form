import "../css//FormSummary.scss"

export default function FormSummary(){
    return <div className="form__summary">
        <div className="--summary">
            <div className="--plan">
                <div className="chosen_plan">
                    <p className="title">Arcade (Monthly)</p>
                    <p className="change">Change</p>
                </div>
                <p className="price">$9/mo</p>
            </div>
            <div className="--addons">
                <p className="addon">
                    Online Service
                    <span className="price">+$1/mo</span>
                </p>
                <p className="addon">
                    Larger storage
                    <span className="price">+$2/mo</span>
                </p>
            </div>
        </div>
        <p className="--total">Total (per month) <span>+$12/mo</span></p>
    </div>
}