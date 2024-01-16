import "../css//FormSummary.scss"

type FormSummaryProps = {
    form: Form,
    dataFeed: DataFeed
}

export default function FormSummary(props: FormSummaryProps){
    const {form, dataFeed} = props;

    const activeAddOns = form.addOns;

    return <div className="form__summary">
        <div className="--summary">
            <div className="--plan">
                <div className="chosen_plan">
                    <p className="title">
                        {form.plan} ({form.planBillingFrequency})
                    </p>
                    <p className="change">Change</p>
                </div>
                <p className="price">
                    {dataFeed.plan[form.planBillingFrequency][form.plan].priceText}
                </p>
            </div>
            <div className="--addons">
                {
                    activeAddOns.map(addOn => {
                        return <p key={addOn} className="addon">
                            {dataFeed.addOns[form.planBillingFrequency][addOn].title}
                            <span className="price">
                                {dataFeed.addOns[form.planBillingFrequency][addOn].priceText}
                            </span>
                        </p>
                    })
                }
            </div>
        </div>
        <p className="--total">Total (per month) <span>+$12/mo</span></p>
    </div>
}