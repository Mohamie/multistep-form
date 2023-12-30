export default function AddOnInputs(){
    return <div className="form__addons">
        <div className="--addon">
            <input type="checkbox" name="addonOne" id="addonOne" />
            <label htmlFor="addonOne">Online service</label>
        </div>
        <div className="--addon">
            <input type="checkbox" name="addonTwo" id="addonTwo" />
            <label htmlFor="addonTwo">Larger storage</label>
        </div>
        <div className="--addon">
            <input type="checkbox" name="addonThree" id="addonThree" />
            <label htmlFor="addonThree">Customizable profile</label>
        </div>
    </div>
}