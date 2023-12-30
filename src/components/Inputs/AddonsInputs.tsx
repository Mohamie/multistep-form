import "../../css/AddOnInputs.scss"

export default function AddOnInputs(){
    return <div className="form__addons">
        <div className="--addon">
            <input type="checkbox" name="addonOne" id="addonOne" />
            <label htmlFor="addonOne">
                Online service
                <span>Access to multiplayer games</span>
            </label>
            <span className="pricing">+$10/mo</span>
        </div>
        <div className="--addon">
            <input type="checkbox" name="addonTwo" id="addonTwo" />
            <label htmlFor="addonTwo">
                Larger storage
                <span>Extra 1TB of cloud save</span>
            </label>
            <span className="pricing">+$20/mo</span>
        </div>
        <div className="--addon">
            <input type="checkbox" name="addonThree" id="addonThree" />
            <label htmlFor="addonThree">
                Customizable profile
                <span>Custom theme on your profile</span>
            </label>
            <span className="pricing">+$20/mo</span>

        </div>
    </div>
}