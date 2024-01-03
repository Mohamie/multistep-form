import "../../css/AddOnInputs.scss"

type AddOnInputsProps = {
    addOns: Array<AddOnType>,
    updateAddonForm: (action: FormAction) => void
}
  

export default function AddOnInputs(props: AddOnInputsProps){
    const { addOns, updateAddonForm } = props;

    function onAddonChange(event: React.ChangeEvent<HTMLInputElement>){
        const currentAddonId = event.currentTarget.id as AddOnType;
  
        if(currentAddonId === "ONLINE_SERVICE"){
          updateAddonForm({type: "ADDONS", value: "ONLINE_SERVICE"});
          return;
        }
        
        if(currentAddonId === "LARGE_STORAGE"){
          updateAddonForm({type: "ADDONS", value: "LARGE_STORAGE"});
          return;
        }
        
        if(currentAddonId === "CUSTOM_PROFILE"){
          updateAddonForm({type: "ADDONS", value: "CUSTOM_PROFILE"});
        }
    }

    return <div className="form__addons">
        <div className="--addon">
            <input type="checkbox" name="addonOne" id="ONLINE_SERVICE" 
                onChange={onAddonChange}
            />
            <label htmlFor="ONLINE_SERVICE">
                Online service
                <span>Access to multiplayer games</span>
            </label>
            <span className="pricing">+$10/mo</span>
        </div>
        <div className="--addon">
            <input type="checkbox" name="addonTwo" id="LARGE_STORAGE" 
                onChange={onAddonChange}
            />
            <label htmlFor="LARGE_STORAGE">
                Larger storage
                <span>Extra 1TB of cloud save</span>
            </label>
            <span className="pricing">+$20/mo</span>
        </div>
        <div className="--addon">
            <input type="checkbox" name="addonThree" id="CUSTOM_PROFILE" 
                onChange={onAddonChange}
            />
            <label htmlFor="CUSTOM_PROFILE">
                Customizable profile
                <span>Custom theme on your profile</span>
            </label>
            <span className="pricing">+$20/mo</span>

        </div>
    </div>
}