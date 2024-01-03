import "../../css/PlanInput.scss"
import ArcadeIcon from "../../assets/images/icon-arcade.svg"
import AdvancedIcon from "../../assets/images/icon-advanced.svg"
import ProIcon from "../../assets/images/icon-pro.svg"

type PlansInputsProps = {
  plan: PlanOptions,
  planBilling: BillFrequency,
  planFeed: PlanFeed,
  updatePlanForm: (action: FormAction) => void
}

type PlanInput = {
  title: string, 
  priceText: string, 
  id: string,
  name: string,
  checked: boolean,
  icon: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PlanInputs(props: PlansInputsProps){
    const { plan, planBilling, planFeed, updatePlanForm } = props;

    function onPlanChange(event: React.ChangeEvent<HTMLInputElement>){
      const currentPlanId = event.currentTarget.id;

      if(currentPlanId === "arcade"){
        updatePlanForm({type: "PLAN", value: "ARCADE"});
        return;
      }
      
      if(currentPlanId === "advanced"){
        updatePlanForm({type: "PLAN", value: "ADVANCED"});
        return;
      }
      
      if(currentPlanId === "pro"){
        updatePlanForm({type: "PLAN", value: "PRO"});
        return;
      }
    }

    return  <div className="form__plans">
      
      <PlanInput
        id="arcade"
        name="arcade"
        title={planFeed.ARCADE.title}
        priceText={planFeed.ARCADE.priceText}
        checked={plan === "ARCADE"}
        icon={ArcadeIcon}
        onChange={onPlanChange}
      />
      
      <PlanInput
        id="advanced"
        name="advanced"
        title={planFeed.ADVANCED.title}
        priceText={planFeed.ADVANCED.priceText}
        checked={plan === "ADVANCED"}
        icon={AdvancedIcon}
        onChange={onPlanChange}
      />

      <PlanInput
        id="pro"
        name="pro"
        title={planFeed.PRO.title}
        priceText={planFeed.PRO.priceText}
        checked={plan === "PRO"}
        icon={ProIcon}
        onChange={onPlanChange}
      />
  
      <div className="--bill_frequency">
        <input type="radio" id="monthly" name="billFrequency"
          checked={planBilling === "MONTHLY"} 
          onChange={() => updatePlanForm({type: "BILL_FREQUENCY", value: "MONTHLY"})}
        />
        <label htmlFor="monthly">Monthly</label>
        
        <div className="toggle"></div>

        <input type="radio" id="yearly" name="billFrequency"
          checked={planBilling === "YEARLY"} 
          onChange={() => updatePlanForm({type: "BILL_FREQUENCY", value: "YEARLY"})}
        />
        <label htmlFor="yearly">Yearly</label>
      </div>
  </div>
}

function PlanInput(props: PlanInput){
  const { title, priceText, id, name, checked, icon, onChange } = props;

  return  <div className="--plan">
    <input 
      type="radio" 
      id={id} 
      name={name} 
      checked={checked} 
      onChange={onChange}
    />
    
    <img src={icon} alt="" />
    
    <label htmlFor={id}>
      {title} <span className="price">{priceText}</span>
    </label>
</div>
}